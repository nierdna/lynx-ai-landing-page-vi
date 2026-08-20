// Server Component — root layout tổng hợp tất cả sections
// Chỉ CompetenciesSection, ContactSection, Header, FadeUpObserver là Client Components
import { AdvantagesSection, CertificationsSection, CtaSection } from "./BottomSections";
import { ClientsSection } from "./ClientsSection";
import { CompetenciesSection } from "./CompetenciesSection";
import { ContactSection } from "./ContactSection";
import { FadeUpObserver } from "./FadeUpObserver";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { OverviewSection } from "./OverviewSection";
import { ProcessSection } from "./ProcessSection";
import { ProjectsSection } from "./ProjectsSection";
import { ServicesSection } from "./ServicesSection";
import { TeamSection } from "./TeamSection";

export function LandingPage() {
  return (
    <>
      {/* Client: scroll detection + mobile menu */}
      <Header />

      <main>
        {/* Server: SSR full content */}
        <HeroSection />
        <OverviewSection />
        <ServicesSection />
        <CompetenciesSection /> {/* Client: tab switcher */}
        <ProcessSection />
        <ProjectsSection />
        <ClientsSection />
        <TeamSection />
        <AdvantagesSection />
        <CertificationsSection />
        <CtaSection />
        <ContactSection /> {/* Client: form submit */}
      </main>

      <Footer />

      {/* Client: IntersectionObserver cho scroll animations */}
      <FadeUpObserver />
    </>
  );
}
