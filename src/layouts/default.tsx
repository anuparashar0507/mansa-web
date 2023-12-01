import React, { useState } from 'react';
// import { AuthContext } from './AuthContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);
const [open, setOpen] = useState(false)

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      {/* {isAuthenticated ? <Dashboard /> : children} */}
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;