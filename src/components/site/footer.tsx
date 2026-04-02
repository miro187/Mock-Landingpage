import { companyName, footerLinks, socialLinks } from "@/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-10 sm:py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.6fr_0.6fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <p className="font-display text-lg font-semibold text-slate-900">
                  {companyName}
                </p>
                <p className="text-sm text-slate-500">
                  Fictional business landing page demo
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              All names, logos, testimonials, case studies, pricing, metrics, and
              contact details on this website are fictional and used only to
              demonstrate design, UX, and frontend implementation quality.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Navigation
            </p>
            <div className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-600 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Social
            </p>
            <div className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-slate-600 hover:text-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Fictional Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>hello@northpoint-demo.com</p>
              <p>+49 (000) 555-0144</p>
              <p>Aster Quay 18, Berlin Demo District</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Built as a portfolio-quality mock business landing page in Next.js.</p>
          <p>Portfolio preview only. No real company or client relationship is represented.</p>
        </div>
      </Container>
    </footer>
  );
}
