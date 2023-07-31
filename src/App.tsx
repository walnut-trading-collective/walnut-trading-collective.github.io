function App() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-950 font-mono text-center p-4 md:p-0">
      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-yellow-500 mb-4">
          Walnut Trading Collective
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white mb-8">
          Accelerating global investing through cutting-edge supercomputing
        </p>
        <a
          href="#contact-us"
          className="text-nueral-700 bg-yellow-500 hover:bg-blue-900 hover:text-white p-4 rounded-full font-semibold"
        >
          Contact Us
        </a>
      </div>
      <footer className="text-yellow-500 p-5">
        <p className="text-sm">
          © 2023 Walnut Trading Collective | Made with ❤️ in Berkeley, CA
        </p>
      </footer>
    </div>
  );
};

export default App;