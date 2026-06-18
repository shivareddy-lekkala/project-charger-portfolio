import Hero from "../sections/Hero";
import PlayerStats from "../sections/PlayerStats";
import MissionCenter from "../sections/MissionCenter";
import RecruiterBriefing from "../sections/RecruiterBriefing";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlayerStats />
      <MissionCenter />
      <RecruiterBriefing />
      <Contact />
    </main>
  );
}