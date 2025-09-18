import { useState, useEffect } from "react";

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onScroll() {
      // Position from top plus some offset (e.g., 1/3 viewport height)
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Loop through section IDs from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      // If no section found, clear active
      setActiveSection("");
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // check on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return activeSection;
}
