import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate send
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <Mail size={16}/> Let's build together
          </div>
          <h2 className="mt-3 text-3xl font-bold">Get in touch</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Have a project in mind or want to say hi? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"/>
            <input required type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"/>
          </div>
          <textarea required rows={5} placeholder="Tell me about your project" className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">
              <Send size={16}/> Send message
            </button>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
