import Authenticated from "./authenticated";
import LandingLayout from "./landingLayout";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

type LayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const mode = pathname.split("/").filter((e) => e)[0];

  return (
    <>
      {mode === "dashboard" && session?.user ? (
        <Authenticated>{children}</Authenticated>
      ) : (
        <LandingLayout>{children}</LandingLayout>
      )}
    </>
  );
};

export default DefaultLayout;
