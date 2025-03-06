import { useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import Heading from "../ui/Heading";
import { useFadeInAnimation } from "../../hooks/useAnimations";

export default function About() {
  const aboutSection = useRef(null);
  const heading = useFadeInAnimation({ start: "top 400px" });
  const body = useFadeInAnimation({ start: "top 400px" });

  return (
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          {/* <img
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          /> */}
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0 animate-on-scroll"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className="translate-y-10 text-body-1 2xl:text-4xl opacity-0 animate-on-scroll">
              I am an independent frontend developer and UI/UX designer based in
              Nairobi, Kenya.
              <br></br>
              <br></br>I specialize in crafting elevated, intuitive, and
              minimalistic designs for startups and small businesses to help
              them stand out in the digital landscape with a powerful impact. 😎
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
