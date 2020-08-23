import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const el = ref;
    el.current.addEventListener("mouseenter", enter);
    el.current.addEventListener("mouseleave", leave);

    return () => {
      el.current.removeEventListener("mouseenter", enter);
      el.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
