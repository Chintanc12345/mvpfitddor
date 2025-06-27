"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../_components/Navbar";

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(
    "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e"
  );

  const thumbnails = [
 "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e"
    ,"https://www.mwcomponents.com/uploads/Products/Greer-Springs/torsion-springs.png",
 "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
    "https://www.mwcomponents.com/uploads/Products/Greer-Springs/torsion-springs.png",
    "https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e",
    "https://www.mwcomponents.com/uploads/Products/Greer-Springs/torsion-springs.png",
  ];

  return (
  <>
  <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">High-Quality Torsion Springs</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="flex justify-center">
            <Image
              src={mainImage}
              alt="Torsion Spring"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            {thumbnails.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumb ${idx + 1}`}
                width={80}
                height={60}
                onMouseEnter={() => setMainImage(img)}
                className="border shadow-xl rounded cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium shadow">Multi-layer Fire Safety</div>
            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium shadow">Enhanced AC Life</div>
            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium shadow">Enhanced Safety</div>
            <div className="bg-gray-100 p-4 rounded-lg text-center font-medium shadow">Swing Compressor</div>
          </div>

          <div className="text-center mt-8 font-semibold">
            <p>Width: 84.5 cm &nbsp; | &nbsp; Height: 59.5 cm &nbsp; | &nbsp; Depth: 30 cm</p>
            <p className="mt-2">100% Copper Coil &nbsp; | &nbsp; Anti-Corrosion Coating</p>
          </div>
        </div>


        <div className="w-full lg:w-1/3 border rounded-lg p-6 shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-4">Purchase Options</h2>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-600">₹37,489</div>
            <div className="text-sm text-gray-500 line-through">₹58,400</div>
            <div className="text-sm text-red-600 font-medium">36% OFF</div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">Add to Cart</button>
            <p className="text-sm text-gray-500 mt-3">Inclusive of all taxes. Free delivery available. EMI starts at ₹1,818.</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
