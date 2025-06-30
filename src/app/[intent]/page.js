"use client"
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import Dots from "../_components/BlinkDots";
import Link from "next/link";

export default function GarageDoorSpringPage() {
    const router=useRouter();
    const pathname=usePathname();
    const navigateHandler=(value)=>{
        const path=value?.toLowerCase()?.replaceAll(" ", "-")
        router.push(path)
    }
  return (
    <main className="bg-white text-[#093630] font-sans">
      <Link className="text-center py-12 px-4" href={`${pathname}/extension-springs`}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#093630] tracking-tight">
          Garage Door Spring Replacement
        </h1>
        <p className="text-lg md:text-2xl mb-2">
          Expert Service, Fast Solutions – Starting at $89 Per Spring
        </p>
        <p className="text-sm mb-6 text-[#093630]/80">
          Estimated arrival: 1–2 hours
        </p>
        <div
         
          className="bg-[#093630] text-white py-3 px-8 rounded-full hover:bg-[#062b24] transition duration-300 inline-block shadow-lg"
        >
          Call Now: 830-362-2763
        </div>
      </Link>

      <Link className="py-12 px-4 max-w-6xl mx-auto" href={`${pathname}/torsion-springs`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Type of Garage Door Spring Do You Need?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className=" p-6 rounded-xl hover:scale-105 shadow-2xl text-[#093630]  transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">Extension Springs</h3>
            <p className="mb-4">
              These springs are located above the horizontal tracks and extend
              when the door closes. They are typically found on older or lighter
              garage doors.
            </p>
            <p className="font-semibold mb-2">Characteristics:</p>
            <ul className="space-y-2 text-sm">
              {[
                "Common on older garage doors",
                "Located above horizontal tracks",
                "More affordable option",
                "Suitable for lighter doors",
                "Easier to install and replace",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                 <Dots/>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#093630]/70 font-bold">
              Best For: Single-car garages, lighter doors, budget-conscious
              repairs
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg text-[#093630] hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">Torsion Springs</h3>
            <p className="mb-4">
              These springs are mounted above the door opening on a metal shaft.
              They are more common on newer and heavier doors due to their
              increased lifting power.
            </p>
            <p className="font-semibold mb-2">Characteristics:</p>
            <ul className="space-y-2 text-sm">
              {[
                "More durable and longer-lasting",
                "Better for heavier doors",
                "Safer operation",
                "Smoother door movement",
                "25+ year lifespan when properly maintained",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                 <Dots/>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#093630]/70 font-bold">
              Best For: Double-car garages, heavier doors, long-term investment
            </p>
          </div>
        </div>
      </Link>

      <section className="py-12 px-4 grid md:grid-cols-2 gap-8 ">
        <div className="relative w-full h-[400px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garage-door-spring-replacement-aWMhGxKOPFg7LqhLyRrWWxJnUoh0i0.webp"
            alt="Garage Spring Image"
            className="rounded-xl shadow-xl object-cover"
            fill
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Professional Spring Replacement Services
          </h2>
          <p className="mb-4">
            Is your garage door struggling to open or making concerning noises?
            A broken spring is often the culprit. We offer expert garage door
            spring replacement services for all types of doors and spring
            systems.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#093630">
            <li>
              <span className="text-[#093630] font-medium">
                Same Day Service
              </span>{" "}
              – Most standard steel doors replaced same day
            </li>
            <li>
              <span className="text-[#093630] font-medium">Safety First</span> –
              Installed with proper safety equipment and procedures
            </li>
            <li>
              <span className="text-[#093630] font-medium">
                Quality Springs
              </span>{" "}
              – Extended lifespan and warranty
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Garage Door Types We Service
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory max-w-6xl mx-auto" style={{
    overflow: 'auto',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE 10+
  }}>
  {[
    "Steel Doors",
    "Insulated Steel Doors",
    "Wood Cedar Overlay Doors",
    "Glass Doors",
    "Commercial Doors",
    "Wayne Dalton Doors",
  ].map((type, idx) => (
    <div
      key={idx}
      className="min-w-[250px] max-w-[300px] flex flex-col justify-between p-6 cursor-pointer rounded-xl shadow-lg text-[#093630] transition duration-300 snap-center"
      style={{ minHeight: "260px" ,}} 
    >
      <div>
        <h3 className="text-lg font-semibold mb-2 min-h-[40px]">
          {type}
        </h3>
        <p className="text-sm mb-4 min-h-[56px] leading-relaxed">
          {type.includes("Wayne")
            ? "Torsion conversions for extended spring life"
            : "Learn more about spring options for " + type.toLowerCase()}
        </p>
      </div>

      <button className="bg-[#093630] text-white py-1.5 px-5 rounded-full hover:bg-[#062b24] text-sm self-start">
        Learn More
      </button>
    </div>
  ))}
</div>


      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Wayne Dalton Torsion Conversions
        </h2>
        <p className="mb-2">
          If you have a Wayne Dalton garage door, we highly recommend a torsion
          spring conversion. Wayne Dalton doors are known for having shorter
          spring lifespans (4–5 years).
        </p>
        <p>
          By converting to a torsion spring system, we can significantly
          increase the lifespan of your springs to 25+ years, saving you money
          and hassle in the long run.
        </p>
      </section>

      <section className="pb-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Spring Replacement?</h2>
        <p className="mb-6">
          Don't let a broken spring keep you stuck. Contact us today for fast,
          professional service.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div
           
            className="bg-[#093630] text-white py-2 px-6 rounded-full hover:bg-[#062b24] shadow-md"
          >
            Call Now
          </div>
          <button className="border border-[#093630] text-[#093630] py-2 px-6 rounded-full hover:bg-[#093630]/10">
            Schedule Service
          </button>
        </div>
      </section>
    </main>
  );
}
