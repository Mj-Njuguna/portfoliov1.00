export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex items-center justify-center space-x-[3%] transition-transform duration-700">
          <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-700">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}
