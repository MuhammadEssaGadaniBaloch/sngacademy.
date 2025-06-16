import { createServerClient } from '@supabase/ssr'

export async function createClient() {
  let cookieStore: any

  try {
    // Try to import next/headers (app directory)
    const { cookies } = await import('next/headers')
    cookieStore = await cookies()
  } catch {
    // If next/headers is not available (pages directory), use a fallback
    cookieStore = {
      getAll: () => [],
      setAll: () => {}
    }
  }

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
