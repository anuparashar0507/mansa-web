import { SEO } from "~/components/SEO";
// import { useEffect, useState } from "react";
// import { GetServerSideProps } from "next";
// import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
// import Image from "next/image";
export default function Gallery() {
  // const [folders, setFolders] = useState([]);
  // const [images, setImages] = useState([]);
  // const [selectedFolder, setSelectedFolder] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const router = useRouter();

  // const handleFolderClick = (folderId: string) => {
  //   router.push(`/gallery/${folderId}`);
  // };
  // const handleFolderClick = async (folderId) => {
  //   setSelectedFolder(folderId);
  //   setShowModal(true);

  //   const response = await fetch(`/api/fetchDriveImages/${folderId}`);
  //   const data = await response.json();

  //   setImages(data);
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("/api/fetchDriveImages");
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //       const data = await res.json();
  //       if (res.ok) {
  //         const folders = data;
  //         console.log("DRIVE DATA :- ", data);
  //         setFolders(folders);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //   fetchData();
  // }, []);
  return (
    <>
      <SEO
        title={"Gallery - MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />

      <main className="flex min-h-screen flex-col gap-4">
        {/* <div
          className="hero min-h-full"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="sm:max-w-xl py-4 px-2">
              <h1 className="md:mb-5 mb-2 md:text-5xl sm:text-4xl text-3xl font-bold">
                Our Moments Together
              </h1>
              <p className="mb-5 text-sm sm:text-md">
                Glimpses of pa st events organized. We cherish unity, social
                welfare,{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="h-full min-w-screen bg-white flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl md:gap-4 gap-2">
            {folders?.map((folder) => (
              <div
                key={folder?.id}
                className="card bg-base-100 shadow-xl image-full"
              > */}
        {/* <figure>
                  <Image
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    width={200}
                    height={200}
                  />
                </figure> */}
        {/* <div className="card-body">
                  <h2 className="card-title">{folder?.name}</h2>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-ghost"
                      onClick={() => handleFolderClick(folder?.id)}
                    >
                      Checkout &gt;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* {showModal && (
          <Modal
            images={images}
            onClose={() => {
              setShowModal(false);
              setSelectedFolder(null);
              setImages([]);
            }}
          />
        )} */}
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const auth = await googleAuth.getClient();
//   const drive = google.drive({ version: DRIVE_API_VERSION, auth });

//   const { data } = await drive.files.list({
//     q: `mimeType='${FOLDER_MIME_TYPE}'`,
//     fields: "files(id, name)",
//   });

//   const folders = data.files;

//   return {
//     props: {
//       folders,
//     },
//   };
// };

// export const apiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const auth = await googleAuth.getClient();
//   const drive = google.drive({ version: DRIVE_API_VERSION, auth });

//   const { folderId } = req.query;

//   const { data } = await drive.files.list({
//     q: `'${folderId}' in parents`,
//     fields: "files(id, name, thumbnailLink)",
//   });

//   res.status(200).json(data.files);
// };
