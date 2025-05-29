import { RefObject, useEffect, useState } from "react";

const useInView = (ref: RefObject<HTMLElement | null>): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (entry.boundingClientRect.top > window.innerHeight) {
          setIsInView(false);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref]);

  return isInView;
};

export default useInView;
