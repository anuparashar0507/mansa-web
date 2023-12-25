// import Authenticated from "./authenticated";
import LandingLayout from "./landingLayout";
import { usePathname } from "next/navigation";
type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const mode = pathname.split("/").filter((e) => e)[0];
  console.log("Pathname :", mode);
  //   const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {/* {mode === "dashboard" ? (
        <Authenticated>{children}</Authenticated>
      ) : (
        <LandingLayout>{children}</LandingLayout>
      )} */}
      <LandingLayout>{children}</LandingLayout>
    </>
  );
};

export default DefaultLayout;
