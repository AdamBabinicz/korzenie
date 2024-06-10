// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (!storedScrollPosition) {
      window.scrollTo(0, 0);
    } else {
      localStorage.removeItem("scrollPosition");
    }
  }, [pathname]);

  return null;
}
