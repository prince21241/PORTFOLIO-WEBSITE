import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "left":
        return "reveal-left";
      case "right":
        return "reveal-right";
      case "down":
        return "reveal-down";
      case "scale":
        return "reveal-scale";
      default:
        return "reveal";
    }
  };

  return (
    <div 
      ref={ref} 
      className={getDirectionClass()}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
