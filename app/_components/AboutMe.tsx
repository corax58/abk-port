/* eslint-disable @next/next/no-img-element */
import { CometCard } from "@/components/ui/comet-card";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 w-full bg-secondary border-y">
      <SectionTitle title="About Me" subtitle="Personal Info" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Bio Text Section */}
          <div className="md:w-1/2">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Software Engineer with a{" "}
                <strong>BSc in Computer Science</strong> and over a year of
                professional experience. My expertise lies within the{" "}
                <strong>React</strong>, <strong>Nextjs</strong> and{" "}
                <strong>Typescript</strong> ecosystem, where I bridge the gap
                between technical logic and visual design.
              </p>

              <p>
                I pride myself on{" "}
                <strong>pixel-perfect design implementation</strong>,
                performance optimization, and ensuring strong{" "}
                <strong>SEO</strong>. My recent work includes building the
                frontend for a food delivery application and successfully
                optimizing websites to improve search engine visibility for
                clients.
              </p>

              <p>
                Beyond the screen, I have a deep appreciation for{" "}
                <strong>various forms of art</strong>. This passion influences
                my eye for detail and helps me create interfaces that are not
                only functional but aesthetically pleasing.
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
