import stabmain from "/src/assets/images/stab-main.png";
import Eshopcrm from "/src/assets/videos/E-shop-crm.mp4";
import stabfigma from "/src/assets/images/stab-figma.png";
import portfolio from "/src/assets/images/portfolio.png";
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
            link="https://stab-tau.vercel.app/"
            img={stabmain}
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
            year="2023"
            tools="Next • TailwindCSS • Shadcn UI"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://www.figma.com/design/A0kzZqonGliaxViqZZMKWw/STAB?node-id=1-28&t=PnrhgEWSJOTvWTef-1"
            img={stabfigma}
            alt="stab mobile app figma mockup design"
            name="stab application mockup design"
            type="Web Design • Frontend Development"
            year="2024"
            tools="React Native• TailwindCSS• Figma"
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
            year="2023"
            tools="Next • Prisma • TypeScript • NextAuth • Neon"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="./"
            img={portfolio}
            alt="portfolio mockup"
            name="personal portfolio "
            type="Frontend Development"
            year="2022"
            tools="React • GSAP • TailwindCSS • TypeScript "
          />
         
        </div>
      </div>
    </section>
  );
}
