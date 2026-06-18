export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/charger.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Neon Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-purple-900/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-8">
        <div className="max-w-4xl">

          {/* Status */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 bg-cyan-500/10 mb-10">
            ● SYSTEM ONLINE
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-black leading-none">
            LEKKALA
            <br />
            VENKATA
            <br />
            SAMBA
            <br />
            SIVA REDDY
          </h1>

          {/* Role */}
          <h2 className="mt-8 text-cyan-400 text-2xl md:text-3xl tracking-[0.4em] uppercase">
            Data Analyst
          </h2>

          {/* Tagline */}
          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl">
            Data Is Not Just Numbers.
            <br />
            It's A Story Waiting To Be Told.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#"
              className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/shivareddy-lekkala"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-500/20 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/lekkala-venkata-samba-sivareddy-09964b293"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500/20 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}