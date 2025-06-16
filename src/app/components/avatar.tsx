'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/client';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Avatar as AvatarUI, AvatarImage, AvatarFallback
} from '@/components/ui/avatar';
import { LogOut, User, Settings, Bell, Pencil } from 'lucide-react';
import toast from 'react-hot-toast';

interface UserData {
  email: string;
  avatar_url: string;
  avatar_path: string;
  id: string;
}

interface EventWithTarget extends Event {
  currentTarget: HTMLImageElement;
}

export default function UserProfile() {
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [userData, setUserData] = useState<UserData>({
    email: '',
    avatar_url: '',
    avatar_path: '',
    id: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get current user
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) throw authError || new Error('Not authenticated');

        // Try to get profile from 'profiles' table
        let profileData = null;
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('email, avatar_path')
          .eq('id', user.id)
          .single();

        // If profile doesn't exist, create one
        if (profileError && profileError.code === 'PGRST116') {
          try {
            const { data: newProfile, error: insertError } = await supabase
              .from('profiles')
              .insert([{ id: user.id, email: user.email, avatar_path: '' }])
              .select()
              .single();

            if (insertError) {
              // If insert fails due to duplicate key, try to fetch the existing profile
              if (insertError.code === '23505') {
                const { data: existingProfile, error: fetchError } = await supabase
                  .from('profiles')
                  .select('email, avatar_path')
                  .eq('id', user.id)
                  .single();

                if (fetchError) throw fetchError;
                profileData = existingProfile;
              } else {
                throw insertError;
              }
            } else {
              profileData = newProfile;
            }
          } catch (err: any) {
            console.error('Error creating/fetching profile:', err);
            throw err;
          }
        } else if (profileError) {
          throw profileError;
        } else {
          profileData = profile;
        }

        // Generate signed URL for avatar if exists
        let avatarUrl = '';
        if (profileData?.avatar_path) {
          const { data: signedUrl, error: signedError } = await supabase
            .storage
            .from('avatars')
            .createSignedUrl(profileData.avatar_path, 3600);

          if (signedError) throw signedError;
          avatarUrl = signedUrl.signedUrl;
        }

        setUserData({
          email: profileData?.email || '',
          avatar_url: avatarUrl,
          avatar_path: profileData?.avatar_path || '',
          id: user.id
        });
      } catch (err: any) {
        toast.error(`Error fetching profile: ${err.message}`);
      }
    };

    fetchUserData();
  }, []);

  const uploadProfilePicture = async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${userData.id}/avatar.${fileExt}`;

      // Upload new avatar
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Update path in profile table
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_path: filePath })
        .eq('id', userData.id);

      if (updateError) throw updateError;

      // Get new signed URL
      const { data: signed, error: signedError } = await supabase
        .storage
        .from('avatars')
        .createSignedUrl(filePath, 3600);

      if (signedError) throw signedError;

      setUserData((prev: UserData) => ({
        ...prev,
        avatar_path: filePath,
        avatar_url: signed.signedUrl || ''
      }));

      toast.success('Profile picture updated!');
    } catch (err: any) {
      toast.error(`Upload failed: ${err.message}`);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await uploadProfilePicture(file);
  };

  const handleProfileClick = () => router.push('/main/');

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 focus:outline-none">
        <div className="relative group">
          <AvatarUI
            className="w-10 h-10 cursor-pointer"
            onClick={handleProfileClick}
          >
            <AvatarImage
              src={userData.avatar_url || '/Profile2.jpg'}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                (e.target as HTMLImageElement).src = '/Profile2.jpg'; 
              }}
              alt="avatar"
            />
            <AvatarFallback>
              {userData.email?.[0]?.toUpperCase() || 'U'}
            </AvatarFallback>
          </AvatarUI>
          
          {/* Edit Icon in Corner */}
          <div 
            className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            title="Edit Profile Picture"
          >
            <Pencil className="w-3 h-3 text-gray-600" />
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        <div className="hidden sm:block text-left">
          <p className="text-xs text-gray-500">
            {userData.email || 'No User'}
          </p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 mt-2">
        <DropdownMenuLabel className="text-xs text-gray-500">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleProfileClick} className="gap-2 cursor-pointer">
          <User className="w-4 h-4" />
          <span>View Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 cursor-pointer">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 cursor-pointer">
          <Bell className="w-4 h-4" />
          <span>Notifications</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="gap-2 cursor-pointer">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
