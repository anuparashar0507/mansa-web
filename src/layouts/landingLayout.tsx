import React, { useState } from "react";
// import { AuthContext } from './AuthContext';

// import { usePathname } from "next/navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "~/components/Banner";
type LayoutProps = {
  children: React.ReactNode;
};

const LandingLayout: React.FC<LayoutProps> = ({ children }) => {
  const [close, setClose] = useState(false);
  //   const pathname = usePathname();
  //   const mode = pathname.split("/")[0];
  //   console.log("Pathname :", mode);
  //   const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {!close && <Banner setClose={setClose} />}
      <Header />
      {/* {isAuthenticated ? <Dashboard /> : children} */}
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
