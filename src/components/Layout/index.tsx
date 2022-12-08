import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ThemeSwitch from "./ThemeSwitch";

const Layout = () => {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />
    </>
  );
};

export default Layout;
