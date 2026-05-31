import ContactMeForm from "./ContactMeForm";
import QuickLinks from "./QuickLinks";
import SectionTitle from "./SectionTitle";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="min-h-dvh border-t  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex-col overflow-hidden flex gap-4 lg:gap-16 justify-center"
    >
      <SectionTitle title="Get In Touch" subtitle="Contact" />
      <div className=" flex max-md:flex-col gap-8  max-w-7xl mx-auto">
        <div className="md:w-1/2 z-10 relative pt-12 max-md:px-4 flex flex-col justify-between gap-16">
          <div className="flex flex-col gap-5 max-md:items-center">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl max-md:text-center ">
              Let&apos;s <br />
              <span className="text-primary">Build Great Software</span>
            </h3>

            <p className="text-muted-foreground md:pr-12 max-md:text-center">
              Have a vision? Lets turn it into high-performance reality. Reach
              out for collaboration, projects, or just a friendly chat!
            </p>
          </div>
          <QuickLinks />
        </div>
        <ContactMeForm className="w-full md:w-1/2 max-md:max-w-none max-md:rounded-none max-md:border-0 h-fit" />
      </div>
    </section>
  );
};

export default ContactMe;
