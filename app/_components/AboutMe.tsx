/* eslint-disable @next/next/no-img-element */
import { CometCard } from "@/components/ui/comet-card";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 w-full bg-secondary border-y">
      <SectionTitle title="About Me" subtitle="Personal Info" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Bio Text Section */}
          <div className="md:w-1/2">
            <div className="space-y-4 text-secondary-foreground/85 leading-relaxed">
              <p>
                I'm a Software Engineer with a{" "}
                <strong>BSc in Computer Science</strong> and a year of hands-on
                experience building things people actually use. I live mostly in
                the <strong>React</strong>, <strong>Next.js</strong>, and{" "}
                <strong>TypeScript</strong> world.
              </p>

              <p>
                I care deeply about the details others skip — whether that's a
                layout that holds up at every breakpoint, a Lighthouse score
                worth bragging about, or{" "}
                <strong>SEO fundamentals that actually move the needle</strong>.
                Lately I've been building the frontend for a food delivery app
                and helping clients get found on Google.
              </p>

              <p>
                Outside of code, I'm drawn to{" "}
                <strong>art in a lot of its forms</strong> — and I think that
                bleeds into how I work. Good interfaces should feel considered,
                not just functional. That's the standard I hold myself to.
              </p>
            </div>
          </div>

          {/* Card Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center gap-6">
            <CometCard className="w-fit shadow-none">
              <button
                type="button"
                className="my-10 flex w-76 md:w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-[#1F2121] p-2  md:my-20 md:p-4"
                aria-label="View invite"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                {/* Avatar */}
                <div className="flex justify-center mt-8">
                  <div className="relative h-40 w-40">
                    <img
                      loading="lazy"
                      src="/assets/image.png"
                      alt="Abubeker Abduljelil"
                      className="h-full w-full rounded-full object-cover border-4 border-[#2A2C2C]"
                    />
                  </div>
                </div>

                {/* Identity */}
                <div className="mt-4 text-center text-white">
                  <h3 className="text-lg font-semibold tracking-wide">
                    Abubeker Abduljelil
                  </h3>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>

                {/* Divider */}
                <div className="mt-12 mb-4 h-px w-full bg-[#2A2C2C]" />

                {/* Info section */}
                <div className="space-y-2 font-mono text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span className="opacity-60">Age</span>
                    <span>24</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="opacity-60">Phone</span>
                    <span>+251 916 115 888</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Email</span>
                    <span>AbubekerCorax@gmail.com</span>
                  </div>
                </div>
              </button>
            </CometCard>
          </div>
        </div>
      </div>
    </section>
  );
}
