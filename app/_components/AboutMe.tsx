/* eslint-disable @next/next/no-img-element */
import SectionTitle from "./SectionTitle";
import { Mail, Phone, CalendarDays } from "lucide-react";

const infoItems = [
  { label: "Age", value: "24", icon: CalendarDays },
  { label: "Phone", value: "+251 916 115 888", icon: Phone },
  { label: "Email", value: "AbubekerCorax@gmail.com", icon: Mail },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-28 w-full bg-secondary border-y">
      <SectionTitle title="About Me" subtitle="Personal Info" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative grid grid-cols-1 md:grid-cols-2 rounded-xs border bg-background overflow-hidden ">
          {/* Bio / "message" side */}
          <div className="relative order-2 md:order-1 flex flex-col justify-center border-t md:border-t-0 border-border p-8 sm:p-10 lg:p-14">
            <div className="space-y-4 text-secondary-foreground/85 leading-relaxed ">
              <p>
                I&apos;m a Software Engineer with a{" "}
                <strong>BSc in Computer Science</strong> and a year of hands-on
                experience building things people actually use. I live mostly in
                the <strong>React</strong>, <strong>Next.js</strong>, and{" "}
                <strong>TypeScript</strong> world.
              </p>

              <p>
                I care deeply about the details others skip — whether
                that&apos;s a layout that holds up at every breakpoint, a
                Lighthouse score worth bragging about, or{" "}
                <strong>SEO fundamentals that actually move the needle</strong>.
                Lately I&apos;ve been building the frontend for a food delivery
                app and helping clients get found on Google.
              </p>

              <p>
                Outside of code, I&apos;m drawn to{" "}
                <strong>art in a lot of its forms</strong> — and I think that
                bleeds into how I work. Good interfaces should feel considered,
                not just functional. That&apos;s the standard I hold myself to.
              </p>
            </div>
          </div>

          {/* Vertical divider — sits on the grid, so it's always full height */}
          <div className="absolute left-1/2 top-10 bottom-10 hidden w-px -translate-x-1/2 bg-border md:block" />

          {/* Personal info / "address" side */}
          <div className="order-1 md:order-2 flex flex-col p-8 sm:p-10 lg:p-12">
            {/* Stamp */}
            <div className="flex justify-end">
              <div className="relative h-28 w-28  border-4 border-background shadow-sm outline outline-1 outline-dashed outline-offset-2 outline-secondary-foreground/25">
                <img
                  loading="lazy"
                  src="/assets/image.png"
                  alt="Abubeker Abduljelil"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Identity */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold tracking-wide">
                Abubeker Abduljelil
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-secondary-foreground/50">
                Software Engineer
              </p>
            </div>

            {/* Info list */}
            <div className="mt-10 space-y-4 font-mono text-sm md:mt-auto">
              {infoItems.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-dashed border-border pb-2"
                >
                  <span className="flex items-center gap-2 text-secondary-foreground/50">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </span>
                  <span className="text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
