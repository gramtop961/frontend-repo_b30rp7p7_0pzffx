import Header from './components/Header';
import Offerings from './components/Offerings';
import EventsCalendar from './components/EventsCalendar';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-inter text-stone-800 bg-white">
      <Header />
      <main>
        <Offerings />
        <EventsCalendar />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
