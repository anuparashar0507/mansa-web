import { useState, useEffect } from "react";
import Loader from "~/components/ui/Loader";
import Sidebar from "~/components/dashboard/Sidebar";
import Header from "~/components/dashboard/Header";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
export default function Authenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  // const router = useRouter();
  // if (session) {
  //   await router.push("/login");
  //   return null;
  // }
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="dark:bg-slate-700 bg-white">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen overflow-hidden bg-white">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className="mx-auto z-10 max-w-screen-2xl p-4 md:p-4 2xl:p-6 bg-gray-100">
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      )}
    </div>
  );
}
