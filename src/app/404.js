import { useEffect, useState } from "react";
import Image from "next/image";

function UnderConstruction() {
  const [showMarquee, setShowMarquee] = useState(false);

  useEffect(() => {
    setShowMarquee(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center flex items-center flex-col">
        <Image
          src="/logo1.png"
          alt="Garage Door"
          width={300}
          height={300}
          className="rounded-md"
        />
        {showMarquee && (
          <marquee
            behavior="scroll"
            direction="left"
            scrollAmount="10"
            className="text-[#093630] text-2xl font-semibold mt-4"
          >
            🚧 UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧 UNDER CONSTRUCTION 🚧
          </marquee>
        )}
      </div>
    </div>
  );
}

export default UnderConstruction;
