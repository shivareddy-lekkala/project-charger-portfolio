import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f620,transparent_40%),radial-gradient(circle_at_bottom_left,#a855f720,transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-full text-cyan-400 mb-8">
              ● SYSTEM ONLINE
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              LEKKALA
              <br />
              VENKATA SAMBA
              <br />
              SIVA REDDY
            </h1>

            <h2 className="mt-6 text-xl md:text-2xl text-cyan-400 tracking-[0.3em]">
              DATA ANALYST
            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-xl">
              Data Is Not Just Numbers.
              <br />
              It's A Story Waiting To Be Told.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                Resume
              </a>

              <a
                href="https://github.com/shivareddy-lekkala"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/20"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/lekkala-venkata-samba-sivareddy-09964b293"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/20"
              >
                LinkedIn
              </a>

            </div>

            {/* Status Panel */}

            <div className="mt-12 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5">
                <p className="text-gray-400 text-sm">
                  STATUS
                </p>

                <p className="text-green-400 font-bold mt-2">
                  AVAILABLE
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5">
                <p className="text-gray-400 text-sm">
                  EXPERIENCE
                </p>

                <p className="text-white font-bold mt-2">
                  Data Analytics
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative">

            <div className="absolute inset-0 blur-3xl bg-purple-500/20 rounded-full"></div>

            <Image
              src="/images/charger.png"
              alt="Charger"
              width={1000}
              height={700}
              priority
              className="relative z-10 w-full object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}