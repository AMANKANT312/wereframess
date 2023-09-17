import Image from "next/image";
import { Inter } from "next/font/google";
import Navcontainer from "@/components/Navcontainer";
import Navbar from "@/components/Navbar";
// Cardcontainer;
// import { Contact } from "@/components/Svg";
import Sidebar from "@/components/Sidebar";
import Cardcontainer from "@/components/Cardcontainer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="mainoutcontainer">
        <div>
          <Navbar />
        </div>
        <div>
          {" "}
          <Navcontainer />
        </div>
        <div>
          <Cardcontainer />
        </div>
      </div>
    </>
  );
}
