"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Spring Replacement",
    subtitle: "Torsion or extension spring replacement",
    price: 150,
    eta: "1–2 hours",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garage-door-spring-replacement-aWMhGxKOPFg7LqhLyRrWWxJnUoh0i0.webp",
    features: [
      "High-Cycle Torsion Springs",
      "Precision Installation",
      "Certified Technicians"
    ],
    description:
      "We specialize in professional replacement of torsion and extension springs to ensure safe and smooth garage door operation. Our high-cycle springs are engineered for durability and long-term performance.",
    details: [
      "Accurate spring calibration based on door weight",
      "High-cycle torsion springs rated for 20,000+ cycles",
      "Includes system balance and tension testing",
      "Safe removal and disposal of old springs",
      "Lubrication and full safety inspection post-installation",
      "Workmanship and parts warranty included"
    ]
  }
  ,
  {
    id: 2,
    title: "Annual Maintenance",
    subtitle: "Complete garage door tune-up and inspection",
    price: 89,
    eta: "2–3 hours",
    image:
      "https://fixdoor.com/wp-content/uploads/2025/03/commercial-garage-door-replacement-marble-falls-texas.jpg",
    features: [
      "Safety Inspection",
      "Full Lubrication",
      "Performance Optimization",
    ],
    description:
      "Includes safety checks, lubrication, and part adjustments for long-term performance and reliability.",
    details: [
      "Comprehensive 25-point safety inspection",
      "Lubrication of all moving parts",
      "Spring tension adjustment and testing",
      "Track alignment and cleaning",
      "Opener calibration and safety feature testing",
      "Weather seal inspection and replacement if needed",
    ],
  },
  {
    id: 3,
    title: "Opener Installation",
    subtitle: "Professional garage door opener installation",
    price: 299,
    eta: "3–4 hours",
    image:
      "https://fixdoor.com/wp-content/uploads/2025/03/commercial-garage-door-replacement-marble-falls-texas.jpg",
    features: ["Premium Brands", "Full Warranty", "Smart Integration"],
    description:
      "Our team installs and configures openers from top brands with full warranty and smart home integration.",
    details: [
      "Installation of LiftMaster, Chamberlain, or Genie openers",
      "Complete wiring and electrical setup",
      "Remote programming and testing",
      "Smart home integration available",
      "3-year warranty on installation",
      "Old opener removal and disposal included",
    ],
  },
  {
    id: 4,
    title: "Spring Replacement",
    subtitle: "Torsion or extension spring replacement",
    price: 199,
    eta: "1–2 hours",
    image:
      "https://fixdoor.com/wp-content/uploads/2025/03/commercial-garage-door-replacement-marble-falls-texas.jpg",
    features: ["High-Quality Springs", "Safe Installation", "Certified Techs"],
    description:
      "Includes high-quality springs and safe installation by certified technicians with proper tools and expertise.",
    details: [
      "Professional spring tension calculation",
      "High-cycle rated springs for longevity",
      "Safe installation with proper tools",
      "Complete system balance testing",
      "Warranty on parts and labor",
    ],
  },
];

export default function AccordionServices() {
  const [expandedCard, setExpandedCard] = useState(null);
  const emergencyRef = useRef(null);
  const router=useRouter()
  const toggleAccordion = (e,serviceId) => {
    e.stopPropagation();
    setExpandedCard((prev) => (prev === serviceId ? null : serviceId));
  };
  const scrollToEmergency = (e) =>{
    e.stopPropagation();

    emergencyRef.current?.scrollIntoView({ behavior: "smooth",  block: "center"});
   
  }
  const navigateIntentHandler=(value)=>{
    const path=value?.toLowerCase()?.replaceAll(" ", "-")
    router.push(`/${path}`)
  }
  const goToPurchase = () => {
    router.push("/purchase");
  };
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex items-center flex-col justify-center text-center py-12 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to FixDoor LLC
        </h1>
        <p className="text-lg font-semibold text-gray-600 max-w-2xl">
          Your trusted partner for high-quality garage door services with
          professional expertise
        </p>
        <p className="text-gray-600 text-sm font-semibold max-w-6xl mx-auto p-6 ">
          FixDoor LLC is your premier garage door service provider in Marble
          Falls, TX. With years of experience and a commitment to excellence, we
          provide comprehensive garage door solutions for residential and
          commercial properties.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {services.map((service) => (
          <div
          onClick={()=>{navigateIntentHandler(service.title)}}
            key={service.id}
            className="bg-white cursor-pointer rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className={`lg:w-72 relative rounded-tl-lg overflow-hidden flex-shrink-0 ${expandedCard === service.id? "":"duration-300 rounded-bl-lg" }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{service.subtitle}</p>
                    </div>
                    <button
                      onClick={(e) => toggleAccordion(e,service.id)}
                      className="ml-4 p-3 rounded-lg bg-white text-[#093630] cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0 border border-gray-100"
                      aria-label={`Toggle details for ${service.title}`}
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedCard === service.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-white bg-[#093630] text-sm rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-[#093630]">
                        ${service.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-[20px]">⏱</span>
                      <span className="text-sm">
                        ETA:{" "}
                        <span className="font-semibold">{service.eta}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === service.id
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                    Service Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                  <button
                    className="flex-1 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 bg-[linear-gradient(235deg,_#093630.69%,_#FFF_100%)]"
                    onClick={goToPurchase}
                  >
                    Book Now - ${service.price}
                  </button>
                  <button
                    className="flex-1 bg-white text-[#FFF] py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg bg-[linear-gradient(135deg,_#093630.69%,_#FFF_100%)] cursor-pointer"
                    onClick={scrollToEmergency}
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-[#093630] pt-12 pb-16 font-bold" ref={emergencyRef}>
  <div className="max-w-4xl mx-auto text-center px-6 flex flex-col  items-center">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      Need Emergency Service?
    </h3>
    <p className="text-lg mb-6 opacity-90">
      Garage door issues can happen any time—day or night. That's why we're available 24/7 to respond quickly and get your door back on track.
    </p>

    <ul className="text-left text-sm relative left-[-15px] font-medium mb-8 space-y-4">
      {[
        '24/7 availability—even on weekends and holidays',
        'Fast response times to minimize downtime',
        'Expert technicians equipped for on-the-spot repairs',
        'All types of garage door emergencies handled',
        'No hidden charges—clear, upfront pricing'
      ].map((text, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#093630] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#093630]"></span>
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>

    <button className="bg-white relative left-[-40px] w-fit text-[#093630] px-8 py-3 rounded-lg font-semibold text-lg  hover:bg-[linear-gradient(235deg,_#093630.69%,_#FFF_100%)] hover:text-white border-2 border-[#093630] transition-colors duration-200">
      Call Now: (555) 123-4567
    </button>
  </div>
</div>

    </div>
  );
}
