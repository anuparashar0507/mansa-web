import React, { useState } from 'react';
// import { AuthContext } from './AuthContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '~/components/Banner';
type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);
const [close, setClose] = useState(false)

  return (
    <>
     {!close && <Banner setClose={setClose}  />}
      <Header  />
      {/* {isAuthenticated ? <Dashboard /> : children} */}
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;