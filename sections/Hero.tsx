export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/charger.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Purple/Cyan Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-purple-900/30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center">

        <div className="max-w-3xl">

          {/* Status Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 bg-cyan-500/10 mb-8">
            ● SYSTEM ONLINE
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-8xl font-black leading-tight">
            LEKKALA
            <br />
            VENKATA
            <br />
            SAMBA
            <br />
            SIVA REDDY
          </h1>

          {/* Role */}
          <p className="mt-8 text-cyan-400 text-2xl md:text-3xl tracking-[0.4em] uppercase">
            Data Analyst
          </p>

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

          {/* Status Cards */}
          <div className="grid grid-cols-2 gap-4 mt-12 max-w-xl">

            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                STATUS
              </p>

              <p className="text-green-400 font-bold mt-2">
                AVAILABLE
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                ROLE
              </p>

              <p className="text-white font-bold mt-2">
                DATA ANALYST
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                PROJECTS
              </p>

              <p className="text-cyan-400 font-bold mt-2">
                2+
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                SKILLS
              </p>

              <p className="text-purple-400 font-bold mt-2">
                SQL • Power BI • Python
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}