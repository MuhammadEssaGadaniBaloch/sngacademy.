import { Loader2 } from "lucide-react";

interface LoaderProps {
  size?: number;
  className?: string;
  fullScreen?: boolean;
}

export function Loader({ size = 24, className = "", fullScreen = false }: LoaderProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <Loader2 className={`animate-spin ${className}`} size={size} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`animate-spin ${className}`} size={size} />
    </div>
  );
} 