import React from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useRef } from "react";
import { useDimensions } from "./use-dimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
function SideNavbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  console.log(containerRef);
  const { height } = useDimensions(containerRef);

  return (
    <React.Fragment>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className={isOpen ? "background" : "background-toggle background"}
          variants={sidebar}
        />
        <Navigation toggle={() => toggleOpen()} open={isOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </React.Fragment>
  );
}

export default SideNavbar;
