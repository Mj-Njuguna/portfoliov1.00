import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import Eshopcrm from "/src/assets/videos/E-shop-crm.mp4";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";
import Eshopclientside from "/src/assets/videos/E-shop-client-side.mp4";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link=""
            img={ibgroup}
            alt="Stab mobile money platform"
            name="Stab application"
            type=" Design • Frontend Development"
            year="2025"
            tools="React native • TailwindCSS • Figma"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://github.com/Mj-Njuguna/E-store-frontend"
            autoplay
            muted
            loop
            playsInline
            video={Eshopclientside}
            alt="E-shop client side"
            name="e-shop client side"
            type="Frontend Development"
            year="2025"
            tools="Next • TailwindCSS • Shadcn UI"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://e-store-backend-5191dqpdy-michael-njugunas-projects-a2b6710c.vercel.app/"
            autoplay
            muted
            loop
            playsInline
            video={Eshopcrm}
            alt="E-shop CRM"
            name="e-shop CRM"
            type="Backend Development"
            year="2025"
            tools="Next • Prisma • TypeScript • NextAuth • Neon"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
