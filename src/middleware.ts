export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };
// import { authOptions } from "pages/api/auth/[...nextauth]";

// export default withAuth({
//   jwt: { decode: authOptions.jwt?.decode },
//   callbacks: {
//     authorized: ({ token }) => !!token,
//   },
// });
