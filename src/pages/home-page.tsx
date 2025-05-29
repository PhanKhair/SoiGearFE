import AnimatedSection from "@/components/globals/molecules/animated-section";
import KeyboardHome from "@/components/locals/home/keyboard-home";
import KeycapHome from "@/components/locals/home/keycap-home";
import NavHome from "@/components/locals/home/nav-home";

function HomePage() {
  return (
    <div className="space-y-10">
      <NavHome />

      <AnimatedSection>
        <KeyboardHome />
      </AnimatedSection>

      <AnimatedSection>
        <KeycapHome />
      </AnimatedSection>
    </div>
  );
}

export default HomePage;
