export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl">
        <p className="text-blue-400 mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mb-4">
          Sanchit Shahare
        </h1>

        <h2 className="text-2xl text-slate-300 mb-6">
          Flutter Developer • React Developer
        </h2>

        <p className="text-slate-400 mb-8">
          Building scalable mobile apps, websites and
          digital products.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 rounded-lg">
            View Projects
          </button>

          <button className="px-6 py-3 border border-slate-600 rounded-lg">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}