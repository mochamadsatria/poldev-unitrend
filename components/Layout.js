import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
        <button title="Contact Sale"
        className="fixed z-90 bottom-10 right-10 bg-blue-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-3xl hover:bg-blue-700 hover:drop-shadow-2xl duration-300">&#9993;</button>
      <Footer />
    </>
  );
}
