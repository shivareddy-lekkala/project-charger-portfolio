export default function PlayerStats() {
  const skills = [
    { name: "SQL", value: 90 },
    { name: "Power BI", value: 85 },
    { name: "Python", value: 75 },
    { name: "Excel", value: 90 },
    { name: "Pandas", value: 70 },
    { name: "Data Visualization", value: 85 },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto border border-cyan-500/20 rounded-2xl p-8">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          PLAYER STATS
        </h2>

        {skills.map((skill) => (
          <div key={skill.name} className="mb-8">

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                style={{ width: `${skill.value}%` }}
              />

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}