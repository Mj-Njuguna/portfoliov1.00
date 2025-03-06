export default function Projects({ name, img, alt, type, link, year, tools, video, autoplay, loop, muted, playsInline }) {
  return (
    <div className="group relative overflow-hidden">
      <a
        target="_blank"
        rel="noreferrer"
        href={link || "#"}
        className="block relative w-full h-[500px] overflow-hidden rounded-3xl cursor-pointer"
        onClick={(e) => {
          if (!link) {
            e.preventDefault();
          }
        }}
      >
        {video ? (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary-300">
            <video
              className="w-auto h-auto max-w-full max-h-full object-contain"
              autoPlay={autoplay}
              loop={loop}
              muted={muted}
              playsInline={playsInline}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            src={img}
            alt={alt}
            width="800"
            height="600"
          />
        )}
        
        {/* Center Visit Project Button */}
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 z-10">
            <div className="bg-[#70705C]/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#70705C]/30 transform transition-transform duration-300 group-hover:scale-110">
              <span className="inline-flex items-center text-[#ffffd3] font-medium">
                Visit Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        )}
        
        {/* Project Info */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-[#ffffd3]  transition-opacity duration-500 opacity-90 group-hover:opacity-100">
          <div className="flex space-x-2 mb-3 text-sm opacity-80">
            <span className="px-3 py-1 border border-[#777764] rounded-full">{year}</span>
            <span className="px-3 py-1 border border-[#777764] rounded-full">{tools}</span>
          </div>
          <h3 className="text-2xl font-semibold uppercase tracking-wide">{name}</h3>
          <p className="text-lg font-light opacity-80">{type}</p>
        </div>
      </a>
    </div>
  );
}
