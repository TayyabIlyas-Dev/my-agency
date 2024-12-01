import Image from "next/image";
import HeroOne from "./components/HeroOne";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeeroThree";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
   <main>
    {/* Hero Section one */}
 <div className="py-10">
<HeroOne/>
 </div>
    {/* Hero Section Two */}
 <div className="bg-slate-200 py-14">
<HeroTwo/>
 </div>
    {/* Hero Section OurTeam  */}
 <div className="py-12">
<OurTeam/>
 </div>
    {/* Hero Section Three */}
 <div className=" py-14">
<HeroThree/>
 </div>
    {/* Hero Section ContactUs */}
 <div className="pt-6 pb-14">
<ContactUs/>
 </div>

   </main>
  );
}
