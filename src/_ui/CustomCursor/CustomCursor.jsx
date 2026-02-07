import { useEffect, useState, useCallback } from "react";
import styles from "./CustomCursor.module.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isNameHover, setIsNameHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    const nameLink = target.closest("[data-cursor='name']");
    const interactive = target.closest("a, button, [role='button'], input, [onclick]");
    setIsNameHover(!!nameLink);
    setIsHovering(!!interactive);
  }, []);

  // Smooth trailing effect for outer ring
  useEffect(() => {
    if (!isVisible) return;
    const raf = requestAnimationFrame(() => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    });
    return () => cancelAnimationFrame(raf);
  }, [position, isVisible]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseLeave, handleMouseEnter]);

  // Don't show on touch devices - hide default cursor only when custom cursor is active
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = !touch && !reducedMotion;
    setShouldShow(show);
    if (show) {
      document.documentElement.classList.add("custom-cursor");
    }
    return () => {
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!shouldShow) return null;

  return (
    <>
      <div
        className={`${styles.cursor} ${isVisible ? styles.visible : ""} ${isHovering ? styles.hover : ""} ${isNameHover ? styles.name_hover : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        aria-hidden
      />
      <div
        className={`${styles.cursor_trail} ${isVisible ? styles.visible : ""} ${isHovering ? styles.hover : ""} ${isNameHover ? styles.name_hover : ""}`}
        style={{
          left: trailing.x,
          top: trailing.y,
        }}
        aria-hidden
      />
    </>
  );
}

export default CustomCursor;
