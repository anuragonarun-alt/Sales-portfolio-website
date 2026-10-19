import HeroSection from "./components/HeroSection";
import MetricsSection from "./components/MetricsSection";
import ExperienceSection from "./components/ExperienceSection";
import SalesProofSection from "./components/SalesProofSection";
import TargetRoleSection from "./components/TargetRoleSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="site-bg">
      <HeroSection />
      <MetricsSection />
      <ExperienceSection />
      <SalesProofSection />
      <TargetRoleSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
