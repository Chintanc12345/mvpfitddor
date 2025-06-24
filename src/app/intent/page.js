"use client";

import Image from "next/image";
import Navbar from "../_components/Navbar";

const springServices = [
  {
    id: 1,
    title: "Torsion Spring Replacement",
    description:
      "High-tension torsion springs for smooth lifting. Includes shaft balancing and safety tuning.",
    image: "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
  },
  {
    id: 2,
    title: "Extension Spring Repair",
    description:
      "Extend the life of your door with durable extension springs. Includes re-hooking and calibration.",
      image: "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
  },
  {
    id: 3,
    title: "Dual Spring Conversion",
    description:
      "Upgrade from single to dual spring for better balance and reliability. Includes full installation.",
      image: "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
  },
  {
    id: 4,
    title: "Spring Safety Inspection",
    description:
      "A 15-point spring inspection to prevent unexpected breakage or injury. Includes cycle rating.",
      image: "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
  },
  {
    id: 5,
    title: "Spring Tune-Up",
    description:
      "Lubrication, tension adjustment, and wear-check to maintain optimal spring performance.",
      image: "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
  },
];

export default function SpringIntentPage() {
  return (
   <>
   <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Garage Door Spring Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {springServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
}
