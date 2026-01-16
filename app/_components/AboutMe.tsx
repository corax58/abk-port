/* eslint-disable @next/next/no-img-element */
import { CometCard } from "@/components/ui/comet-card";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <section className="py-20 w-full bg-secondary border-y">
      <SectionTitle title="About Me" subtitle="About Me" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a <strong>full-stack developer</strong> with hands-on
                experience building and maintaining modern web applications. I
                care a lot about writing clear, maintainable code and building
                interfaces that feel solid and intentional.
              </p>

              <p>
                Most of my recent work is in the React ecosystem, especially
                Next.js. I spend a lot of time thinking about application
                structure, performance, and how users actually interact with
                what I build.
              </p>

              <p>
                I enjoy tackling problems like managing complex state, improving
                rendering performance, and integrating APIs in a way that keeps
                the codebase easy to reason about.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-6">
            <CometCard className="w-fit shadow-none">
              <button
                type="button"
                className="my-10 flex w-76 md:w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-[#1F2121] p-2  md:my-20 md:p-4"
                aria-label="View invite F7RA"
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
                      alt="Profile picture"
                      className="h-full w-full rounded-full object-cover border-4 border-[#2A2C2C]"
                    />
                  </div>
                </div>

                {/* Identity */}
                <div className="mt-4 text-center text-white">
                  <h2 className="text-lg font-semibold tracking-wide">
                    Abubeker Abduljelil
                  </h2>
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
                    <span>+251 9XX XXX XXX</span>
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
