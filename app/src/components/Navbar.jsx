import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-500 justify-center text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>    
    </nav>
  );
}

// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <aside className="bg-green-500 text-white w-64 min-h-screen p-4 flex flex-col gap-4 fixed">
//         <h2 className="text-xl font-bold mb-6">Menu</h2>

//         <Link to="/" className="hover:bg-green-600 p-2 rounded">
//           Home
//         </Link>
//         <Link to="/about" className="hover:bg-green-600 p-2 rounded">
//           About
//         </Link>
//         <Link to="/contact" className="hover:bg-green-600 p-2 rounded">
//           Contact
//         </Link>
//       </aside>

//       {/* Main Content */}
//       <main className="ml-64 p-6 w-full">
//         {/* Your routed pages will render here */}
//       </main>
//     </div>
//   );
// }