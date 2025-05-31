import AnimatedSection from "@/components/globals/molecules/animated-section";
import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import OverviewAbout from "@/components/locals/about/overview-about";
import PolicyAbout from "@/components/locals/about/policy-about";
import StoryAbout from "@/components/locals/about/story-about";

function AboutPage() {
  const breadcrumb = [{ title: "Home", href: "/home" }, { title: "About" }];

  return (
    <div className="space-y-10">
      <Breadcrumb data={breadcrumb} />

      <div className="space-y-20">
        <AnimatedSection>
          <StoryAbout />
        </AnimatedSection>

        <AnimatedSection>
          <OverviewAbout />
        </AnimatedSection>

        <AnimatedSection>
          <PolicyAbout />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default AboutPage;
