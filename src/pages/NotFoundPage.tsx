import { Link } from "react-router";
import { NotFoundPageProps } from "../types/NotFound";

export default function NotFoundPage({
  errorCode = "404",
  title = "Innovation Not Found!",
  message = "This page seems to be still in development. Our engineering team is probably working on something amazing here!",
  links = [
    {
      label: "Take Me Home",
      href: "/"
    },
    {
      label: "Go Back",
      href: "../"
    }
  ]
}: NotFoundPageProps) {
  return (
    <section>
      <h1>{errorCode}</h1>
      <h2>{title}</h2>
      <p>{message}</p>
      <div>
        {links.map((link) => (
          <Link key={link.href} to={link.href}>{link.label}</Link>
        ))}
      </div>
    </section>
  );
}

// import { Link } from "react-router";
// import { GoZap } from "react-icons/go";

// const notFoundPageData: NotFoundPageProps = {
//   errorCode: "404",
//   title: "Innovation Not Found!",
//   message: "This page seems to be still in development. Our engineering team is probably working on something amazing here!",
//   links: [
//     {
//       label: "Take Me Home",
//       href: "/"
//     },
//     {
//       label: "Go Back",
//       href: "../"
//     }
//   ]
// }

// export default function NotFoundPage(errorProps: NotFoundPageProps = notFoundPageData) {
//   const { errorCode, title, message, links } = errorProps;

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-800">
//       <div className="text-center max-w-2xl">
//         <div className="mb-8">
//           <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400">
//             <GoZap size={40} className="animate-pulse" />
//           </div>
//         </div>
//         <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{errorCode}</h1>
//         <h2 className="text-2xl font-semibold mb-6 text-white">{title}</h2>
//         <p className="text-xl text-blue-100 mb-8 leading-relaxed">{message}</p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           {links.map((link) => (
//             <Link
//               to={link.href}
//               key={link.href}
//               className="border cyan-gray-400 text-gray-300 py-3 px-6 rounded-lg"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
