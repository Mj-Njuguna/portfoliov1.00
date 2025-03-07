import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Mobile Development",
    "Web Development",
    "UI/UX Design",
  ];

  const toolBoxItems = [
    "React native",
    "ReactJS",
    "Expo",
    "Figma",
    "AI",
    "TailwindCSS",
    "Heroku",
    "Javascript",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things development. With each of my
          service, my goal is to deliver an useful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my go to tools."
          description="These are my go-to tech stacks for bringing projects to life. I'm always eager to deepen my knowledge of my current stack and explore new technologies that can expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
