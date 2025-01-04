import { useState } from 'react';
import { sendEmail } from '@/shared/lib/email';
import { Button } from '@/shared/ui/button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await sendEmail(formData);
      
      if ('error' in result) {
        throw new Error(result.error);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 dark:text-dark-text">Contact Me</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white/90 dark:border-dark-border dark:text-gray-800"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white/90 dark:border-dark-border dark:text-gray-800"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-white/90 dark:border-dark-border dark:text-gray-800"
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </div>

        {status === 'success' && (
          <p className="text-green-600 dark:text-green-800 text-center font-medium">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 dark:text-red-800 text-center font-medium">
            {errorMessage || 'Failed to send message. Please try again.'}
          </p>
        )}
      </form>
    </div>
  );
}