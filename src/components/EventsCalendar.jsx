import { useMemo } from 'react';
import { CalendarDays } from 'lucide-react';

// Simple monthly events grid for the next four weeks
export default function EventsCalendar() {
  const events = useMemo(
    () => [
      {
        date: 'Sat, Oct 5',
        title: 'Composting 101',
        time: '10:00–11:30 AM',
        badge: 'Workshop',
      },
      { date: 'Wed, Oct 9', title: 'Harvest & Pack Night', time: '5:30–7:30 PM', badge: 'Volunteer' },
      { date: 'Sat, Oct 12', title: 'Balcony Garden Setup', time: '9:30–11:00 AM', badge: 'Workshop' },
      { date: 'Sun, Oct 20', title: 'Community Compost Drop-off', time: '9:00–12:00 PM', badge: 'Drop-off' },
      { date: 'Thu, Oct 24', title: 'Seed Saving Circle', time: '6:00–7:30 PM', badge: 'Meetup' },
    ],
    []
  );

  return (
    <section id="events" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-amber-700 text-white shadow">
            <CalendarDays size={20} />
          </span>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Calendar of Events</h2>
            <p className="text-stone-700 mt-1">Workshops, volunteer nights, and community meetups.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.title + e.date} className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">{e.title}</h3>
                  <p className="text-sm text-stone-600 mt-1">{e.date}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-700 text-white text-xs px-2.5 py-1 font-medium">
                  {e.badge}
                </span>
              </div>
              <p className="mt-4 text-stone-700 text-sm">{e.time}</p>
              <button className="mt-4 inline-flex items-center rounded-md bg-green-700 text-white px-3 py-2 text-sm font-medium hover:bg-green-800">
                RSVP
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
