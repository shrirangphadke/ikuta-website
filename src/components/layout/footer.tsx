export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="section-container py-14 flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <h2 className="text-3xl font-black">
            IKUTA<span className="text-orange-500">.</span>
          </h2>

          <p className="mt-4 text-zinc-500 max-w-md leading-relaxed">
            Premium Japanese industrial systems engineered
            for precision metal processing and modern
            manufacturing excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-zinc-500">
              <li>About</li>
              <li>Technology</li>
              <li>Industries</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Products
            </h3>

            <ul className="space-y-3 text-zinc-500">
              <li>Slitter Line</li>
              <li>Tension Leveler</li>
              <li>Buffing Line</li>
              <li>Automation Systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6 text-sm text-zinc-600 flex flex-col lg:flex-row justify-between gap-4">
          <p>
            © 2026 IKUTA Industrial Systems.
          </p>

          <p>
            Precision. Reliability. Japanese Engineering Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
