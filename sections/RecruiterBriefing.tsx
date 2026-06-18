export default function RecruiterBriefing() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="text-5xl font-black text-cyan-400">
            RECRUITER BRIEFING
          </h2>

          <p className="text-gray-400 mt-4">
            Candidate Profile Overview
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Candidate Info */}

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8">

            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              CANDIDATE
            </h3>

            <div className="space-y-4">

              <div>
                <p className="text-gray-400">
                  Name
                </p>

                <p className="font-semibold text-lg">
                  LEKKALA VENKATA SAMBA SIVA REDDY
                </p>
              </div>

              <div>
                <p className="text-gray-400">
                  Role
                </p>

                <p className="font-semibold text-lg">
                  Aspiring Data Analyst
                </p>
              </div>

              <div>
                <p className="text-gray-400">
                  Status
                </p>

                <p className="text-green-400 font-bold">
                  AVAILABLE FOR OPPORTUNITIES
                </p>
              </div>

            </div>

          </div>

          {/* Skills */}

          <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8">

            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              VERIFIED SKILLS
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-cyan-500/10 p-4">
                SQL
              </div>

              <div className="rounded-xl bg-cyan-500/10 p-4">
                Power BI
              </div>

              <div className="rounded-xl bg-cyan-500/10 p-4">
                Python
              </div>

              <div className="rounded-xl bg-cyan-500/10 p-4">
                Excel
              </div>

              <div className="rounded-xl bg-cyan-500/10 p-4">
                Pandas
              </div>

              <div className="rounded-xl bg-cyan-500/10 p-4">
                Data Visualization
              </div>

            </div>

          </div>

        </div>

        {/* Certifications */}

        <div className="grid lg:grid-cols-3 gap-6 mt-10">

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h4 className="font-bold text-cyan-400 mb-3">
              CERTIFICATION
            </h4>

            <p>
              SQL Certification
            </p>

            <p className="text-gray-400 text-sm mt-2">
              LinkedIn Learning
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-white/5 p-6">
            <h4 className="font-bold text-purple-400 mb-3">
              TRAINING
            </h4>

            <p>
              Data Analytics Program
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Teks Academy
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-white/5 p-6">
            <h4 className="font-bold text-green-400 mb-3">
              EXPERIENCE
            </h4>

            <p>
              Infozit Internship
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Data Analytics Intern
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}