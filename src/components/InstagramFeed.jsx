import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

// Lightweight embed that uses Instagram oEmbed via blockquote. Users can replace with their own posts.
export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script once
    const existing = document.getElementById('ig-embed-script');
    if (existing) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.instagram.com/embed.js';
    s.id = 'ig-embed-script';
    document.body.appendChild(s);
  }, []);

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-b from-stone-800 to-stone-900 text-white shadow">
            <Instagram size={18} />
          </span>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">From our Instagram</h2>
            <p className="text-stone-700 mt-1">Fresh harvests, workshop moments, and garden progress.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CxJb0o0v7eY/"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: 0, maxWidth: '540px', width: '100%' }}
          />

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CuTAPyKx8s1/"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: 0, maxWidth: '540px', width: '100%' }}
          />

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/CsQk7YyQ9lZ/"
            data-instgrm-version="14"
            style={{ background: '#FFF', border: 0, margin: 0, maxWidth: '540px', width: '100%' }}
          />
        </div>
        <p className="mt-6 text-sm text-stone-600">Want your post featured? Tag us @greenroot.coop</p>
      </div>
    </section>
  );
}
