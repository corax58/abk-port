/* eslint-disable @next/next/no-img-element */
import { CometCard } from "@/components/ui/comet-card";
import SectionTitle from "./SectionTitle";

export default function AboutMe() {
  return (
    <section className="py-20 w-full bg-secondary border-y">
      <SectionTitle title="About Me" subtitle="About Me" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a passionate <strong>Frontend Developer</strong> with over
                9 months of production experience building modern web
                applications. My journey started with a curiosity for how things
                work on the web, which quickly turned into an obsession with
                clean code and pixel-perfect UIs.
              </p>
              <p>
                Currently, I specialize in the <strong>React ecosystem</strong>,
                particularly <strong>Next.js</strong>. I don&apos;t just write
                code; I care deeply about architecture, scalability, and the
                end-user experience. Whether it&apos;s optimizing Core Web
                Vitals or designing a reusable component library, I treat every
                project with a product-first mindset.
              </p>
              <p>
                I thrive in environments where I can solve complex problems,
                such as managing complex state, optimizing render cycles, or
                integrating robust APIs.
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
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-3/4 w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-2xl bg-[#000000] object-cover "
                      alt="Invite background"
                      src="/assets/image.png"
                      style={{
                        // boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs">Abubeker Abduljelil</div>
                  <div className="text-xs text-gray-300 opacity-50">
                    Full Stack Dev
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
