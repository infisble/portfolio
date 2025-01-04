import { getSupabaseClient } from './supabase';

export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  // Store in Supabase first
  const client = getSupabaseClient();
  if (!client) {
    return { error: 'Service unavailable' };
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
    console.error('Error storing message:', error);
    return { error: 'Failed to send message' };
  }
}