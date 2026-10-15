
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold">
              Dev <span className="brand-gradient-text">Stack</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-sm">
              Discover technologies and build your perfect
              development stack.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#technologies" className="hover:text-white">
                Technologies
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Dev Stack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
