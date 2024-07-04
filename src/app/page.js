import Image from "next/image";
import Headerbottom from "./components/general/Headerbottom";
import Header from "./components/general/Header";
import QuickAccess from "./components/quickaccess/QuickAccess";

export default function Home() {
  return (
    <div>
      <Header />
      <Headerbottom />
      <QuickAccess />
    </div>
  );
}
