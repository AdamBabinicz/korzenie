// src/hooks/ScrollManager.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scrolling to top for path:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollManager;
