import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { SITE } from "@/lib/site";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Footer = () => {
  const phones = [SITE.author.phone, SITE.author.phoneAlt].filter(Boolean);

  return (
    <footer className="border-t bg-secondary/40">
      <MaxWidthWrapper className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="text-xl font-bold font-display tracking-tight">
                abubeker
              </span>
              <span className="text-xl font-bold font-display tracking-tight text-primary">
                .dev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Full Stack TypeScript developer focused on clean architecture,
              fast performance, and thoughtful UX.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                href={`mailto:${SITE.author.email}`}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                {SITE.author.email}
              </a>
              {phones.map((phone) => (
                <a
                  key={phone}
                  className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                className="text-foreground hover:text-primary transition-colors"
                href="/#about"
              >
                About
              </Link>
              <Link
                className="text-foreground hover:text-primary transition-colors"
                href="/#skills"
              >
                Skills
              </Link>
              <Link
                className="text-foreground hover:text-primary transition-colors"
                href="/#experience"
              >
                Experience
              </Link>
              <Link
                className="text-foreground hover:text-primary transition-colors"
                href="/#contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                className="hover:text-foreground transition-colors"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
