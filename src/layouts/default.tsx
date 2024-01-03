import Authenticated from "./authenticated";
import LandingLayout from "./landingLayout";
import { usePathname } from "next/navigation";
// import { getServerSession } from "next-auth";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  // const session = getServerSession();

  const pathname = usePathname();
  const mode = pathname.split("/").filter((e) => e)[0];
  console.log("Pathname :", mode);
  return (
    <>
      {mode === "dashboard" ? (
        <Authenticated>{children}</Authenticated>
      ) : (
        <LandingLayout>{children}</LandingLayout>
      )}
    </>
  );
};

export default DefaultLayout;
