import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  autoplayDelay?: number;
  stopOnInteraction?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    autoplayDelay = 3000,
    stopOnInteraction = true,
  } = props;

  const [emblaRef] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: stopOnInteraction,
      stopOnMouseEnter: true,
      playOnInit: true,
    }),
  ]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="h-[550px] w-full rounded-xl object-fill select-none hover:cursor-pointer"
                src={img}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-2 flex items-center justify-between">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
