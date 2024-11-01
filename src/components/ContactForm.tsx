import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Telegram bot details
    const TELEGRAM_TOKEN = '7804996942:AAFY3ym1kVye6Ju1ts018bjEqbzMGbYR3mY';
    const CHAT_ID = '7170563581';

    // Message format
    const message = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      // Send form data to Telegram bot
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          required
          className="peer w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-transparent
                   focus:border-blue-400 focus:bg-gray-800/80"
          placeholder="Your Name"
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none
                     ${focusedField === 'name' || formData.name
                       ? '-top-2.5 text-sm bg-gray-900 px-2 text-blue-400'
                       : 'top-3 text-gray-400'}`}
        >
          Your Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          required
          className="peer w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-transparent
                   focus:border-blue-400 focus:bg-gray-800/80"
          placeholder="Email Address"
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none
                     ${focusedField === 'email' || formData.email
                       ? '-top-2.5 text-sm bg-gray-900 px-2 text-blue-400'
                       : 'top-3 text-gray-400'}`}
        >
          Email Address
        </label>
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          required
          rows={4}
          className="peer w-full bg-gray-800/50 border-2 border-gray-700 rounded-lg px-4 py-3 outline-none transition-all duration-300 placeholder-transparent resize-none
                   focus:border-blue-400 focus:bg-gray-800/80"
          placeholder="Your Message"
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none
                     ${focusedField === 'message' || formData.message
                       ? '-top-2.5 text-sm bg-gray-900 px-2 text-blue-400'
                       : 'top-3 text-gray-400'}`}
        >
          Your Message
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 
                 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
                 flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}