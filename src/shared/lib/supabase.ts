import { createClient } from '@supabase/supabase-js';
import { sampleProjects } from '@/shared/config/sample-projects';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (supabaseInstance) return supabaseInstance;

  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn('Missing Supabase credentials, using sample data');
    return null;
  }

  supabaseInstance = createClient(url, key);
  return supabaseInstance;
}

export async function fetchProjects() {
  const client = getSupabaseClient();
  if (!client) {
    return sampleProjects;
  }

  try {
    const { data, error } = await client
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data.length > 0 ? data : sampleProjects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return sampleProjects;
  }
}

interface MessageData {
  name: string;
  email: string;
  message: string;
}

export async function sendMessage(data: MessageData) {
  const client = getSupabaseClient();
  if (!client) {
    return { error: 'Supabase client not initialized' };
  }

  try {
    const { error } = await client
      .from('messages')
      .insert([{
        name: data.name,
        email: data.email,
        message: data.message
      }]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error sending message:', error);
    return { error: 'Failed to send message' };
  }
}