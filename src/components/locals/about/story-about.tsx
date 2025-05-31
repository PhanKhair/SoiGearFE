interface StoryAboutProps {
  className?: string;
}

function StoryAbout({ className }: StoryAboutProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10">

        <div className="space-y-4">
          <p className="text-o-primary text-4xl font-bold">Our Story</p>

          <p className="text-primary mt-10 text-justify text-xl">
            Since 2015, our journey began with a passion for mechanical
            keyboards. We started with just 5 interest checks — small,
            community-driven projects to design unique keyboards tailored to
            enthusiasts’ needs. Each interest check brought together keyboard
            lovers, designers, and makers to create something truly special.
          </p>

          <p className="text-primary text-justify text-xl">
            Today, our community continues to thrive, driven by creativity and
            the spirit of craftsmanship, connecting keyboard enthusiasts
            everywhere with unique products that reflect their personality and
            typing experience.
          </p>
        </div>

        <div className="h-full w-full">
          <img
            src="https://i.ytimg.com/vi/xvE_loMisbI/maxresdefault.jpg"
            alt="our-story"
            className="h-full rounded-xl object-fill select-none"
          />
        </div>

      </div>
    </div>
  );
}

export default StoryAbout;
