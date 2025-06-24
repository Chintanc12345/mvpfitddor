"use client";
import Link from "next/link";
import Image from "next/image";



function CardList({ services }) {


  return (
    <div className="w-[95%] mx-auto my-8">
      <div
        className="overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-4 p-[20px]">
          {services.map((service) => {
            return (
                <Link href={`/${service.id}`} key={service.id}>
                <div
                  className="w-[280px] bg-white  flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-full h-[250px] mb-3 shadow-xl rounded-xl overflow-hidden">
                    <Image
                      src="https://fixdoor.com/wp-content/uploads/2025/03/commercial-garage-door-replacement-marble-falls-texas.jpg"
                      alt="Garage Door"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3
                    className="font-bold text-[13px] leading-4
"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[11px] leading-[13px] font-bold text-gray-500 mt-2"
                  >
                    Price: ${service.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardList;
