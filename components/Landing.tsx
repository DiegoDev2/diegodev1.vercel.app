import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContactButton from "./ui/contac-botom";

export default function Landing() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      
      <div className="relative z-10 flex flex-col items-center text-center gap-6 pt-20">
        <p className="text-gray-300 font-extralight text-lg">
          Hello 👋🏻! I'm DiegoDev1, a Software Developer
        </p>
        
        <h1 className="text-5xl font-normal leading-tight">
          Designing with <span className="italic" style={{fontFamily: "Noto Sans"}}>Precision</span>, <br />  Delivering with <span className="italic" style={{fontFamily: "Noto Sans"}}>Impact</span>.
        </h1>
        
        <ContactButton />
        <p className="text-gray-300 font-extralight text-lg py-3">
        where I have collaborated
        </p>
        <div className="flex flex-wrap gap-20 justify-center">
          <Image src="/companies/Google.svg" alt="Google" width={40} height={40} />
          <Image src="/companies/Microsoft.svg" alt="Microsoft" width={40} height={40} />
          <Image src="/companies/Kubernetes.svg" alt="Kubernetes" width={40} height={40} />
          <Image src="/companies/v-logo.svg" alt="V" width={40} height={40} />
          <Image src="/companies/CorpRangel.png" alt="CorpRangel" width={40} height={40} />
          <Image src="/companies/VaultyWhite.png" alt="Vaulty" width={110} height={110} />
  
        </div>
      </div>
    </div>
  );
}

