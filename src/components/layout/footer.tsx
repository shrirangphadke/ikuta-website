import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="section-container py-14 flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <Image
            src="/images/ikuta-logo.svg"
            alt="IKUTA"
            width={158}
            height={35}
            className="h-9 w-auto invert"
          />

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-orange-500">
            India Operations
          </p>

          <p className="mt-4 text-zinc-500 max-w-md leading-relaxed">
            Japanese engineering heritage localized for Indian
            manufacturers through technical coordination, application
            support and lifecycle service.
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
              <li>Milling / Scalping</li>
              <li>Tension Leveler</li>
              <li>Surface Treatment</li>
              <li>Automation & Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6 text-sm text-zinc-600 flex flex-col lg:flex-row justify-between gap-4">
          <p>
            © 2026 IKUTA India Operations.
          </p>

          <p>
            Precision. Reliability. Japanese Engineering Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
