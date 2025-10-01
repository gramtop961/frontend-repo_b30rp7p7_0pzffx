export default function Footer() {
  return (
    <footer id="join" className="border-t border-amber-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-stone-900 font-semibold">About the Co-op</h3>
            <p className="mt-3 text-stone-700 text-sm">
              We are a neighborhood-powered urban farming collective growing food and soil across vacant lots,
              school gardens, and balconies. Everyone is welcome.
            </p>
          </div>
          <div>
            <h3 className="text-stone-900 font-semibold">Visit</h3>
            <p className="mt-3 text-stone-700 text-sm">
              123 Greenway Ave
              <br />
              Cityville, USA
              <br />
              Saturdays 9am–1pm
            </p>
          </div>
          <div>
            <h3 className="text-stone-900 font-semibold">Get Involved</h3>
            <ul className="mt-3 text-stone-700 text-sm space-y-2">
              <li>
                <a href="#events" className="hover:text-green-700">Volunteer nights</a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-green-700">CSA shares</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-green-700">Spread the word</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-stone-900 font-semibold">Join the Co-op</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                alert('Thanks! We\'ll reach out with membership details.');
              }}
              className="mt-3 space-y-3"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-amber-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-md bg-green-700 text-white px-4 py-2 text-sm font-medium hover:bg-green-800"
              >
                Request Membership Info
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} GreenRoot Co-op. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Made with care using urban soil and open source.</p>
        </div>
      </div>
    </footer>
  );
}
