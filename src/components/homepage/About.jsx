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
          <img
            loading="lazy"
            className="aspect-square h-[800px] w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="500"
            height="600"
            alt="portrait image of me"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0 animate-on-scroll"
            >
              Who am I?
            </h3>
            <p ref={body} className="translate-y-10 text-body-1 2xl:text-4xl opacity-0 animate-on-scroll">
              I am an independent fullstack developerbased in
              Nairobi, Kenya.
              <br></br>
              <br></br>I'm a digital architect blending creativity and logic to craft immersive experiences.
               By day, I turn ideas into reality; by night, I explore cutting-edge tech. More than
                a developer, I'm a problem solver, storyteller, and innovator, dedicated to writing
                 beautiful code that powers beautiful experiences. 😎
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
