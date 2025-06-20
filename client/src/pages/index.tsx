import Navbar from "@/components/Navbar";
import { navbarLinks } from "@/config";


export default function Home() {
  return (
    <>
      <Navbar links = {navbarLinks} />
    </>
  );
}
