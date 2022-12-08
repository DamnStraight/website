import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ParallaxProps {
  children?: ReactNode;
  offset?: number;
}

// Credit to https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
const Parallax = ({ children, offset = 50 }: ParallaxProps) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 350, damping: 50 });

  useEffect(() => {
    const element = ref.current;

    const onResize = () => {
      if (!element) return;
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
