
const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-5 py-16 lg:py-28"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-xl">
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and put
            together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="btn brand-gradient text-white border-none"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="btn btn-outline border-gray-200"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/assets/banner-stack.png"
            alt="3D Development Technology Stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
