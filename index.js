import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const services = [
  {
    id: 1,
    title: "Emergency Repair",
    description: "24/7 emergency garage door repair service",
    price: 150,
    eta: "1–2 hours",
    details:
      "We offer fast and reliable emergency garage door repairs anytime, anywhere.",
  },
  {
    id: 2,
    title: "Annual Maintenance",
    description: "Complete garage door tune-up and inspection",
    price: 89,
    eta: "2–3 hours",
    details:
      "Includes safety checks, lubrication, and part adjustments for long-term performance.",
  },
  {
    id: 3,
    title: "Opener Installation",
    description: "Professional garage door opener installation",
    price: 299,
    eta: "3–4 hours",
    details:
      "Our team installs and configures openers from top brands with full warranty.",
  },
  {
    id: 4,
    title: "Spring Replacement",
    description: "Torsion or extension spring replacement",
    price: 199,
    eta: "1–2 hours",
    details:
      "Includes high-quality springs and safe installation by certified techs.",
  },
  {
    id: 5,
    title: "Cable Repair",
    description: "Garage door cable repair or replacement",
    price: 120,
    eta: "2 hours",
    details:
      "We replace frayed or broken cables to ensure smooth door operation.",
  },
  {
    id: 6,
    title: "Sensor Alignment",
    description: "Garage door safety sensor adjustment",
    price: 70,
    eta: "1 hour",
    details: "Fixes misaligned sensors to restore automatic functionality.",
  },
  {
    id: 7,
    title: "Track Adjustment",
    description: "Realignment of bent or misaligned tracks",
    price: 130,
    eta: "1–2 hours",
    details: "Ensures smooth rolling and prevents further damage.",
  },
  {
    id: 8,
    title: "Panel Replacement",
    description: "Damaged garage door panel replacement",
    price: 250,
    eta: "3 hours",
    details:
      "Swap out cracked or dented panels with manufacturer-approved replacements.",
  },
  {
    id: 9,
    title: "Roller Replacement",
    description: "Replace noisy or worn-out rollers",
    price: 100,
    eta: "1 hour",
    details: "Upgrades your rollers to ensure quiet, smooth operation.",
  },
  {
    id: 10,
    title: "Remote Setup",
    description: "Garage door remote pairing & setup",
    price: 60,
    eta: "30 mins",
    details: "We help configure remotes with your opener or replace them.",
  },
  {
    id: 11,
    title: "Insulation Upgrade",
    description: "Improve garage energy efficiency",
    price: 200,
    eta: "2–3 hours",
    details: "Add insulation to your door for better thermal performance.",
  },
  {
    id: 12,
    title: "Smart Opener Setup",
    description: "Connect smart opener to app",
    price: 175,
    eta: "2 hours",
    details: "WiFi integration and app setup for remote access and control.",
  },
  {
    id: 13,
    title: "Weather Seal Replacement",
    description: "New bottom seal installation",
    price: 85,
    eta: "1 hour",
    details: "Keeps out water, dust, and pests by replacing worn seals.",
  },
  {
    id: 14,
    title: "Full System Tune-Up",
    description: "Full diagnostics and system lubrication",
    price: 99,
    eta: "2 hours",
    details: "Comprehensive checkup of door, opener, and safety components.",
  },
  {
    id: 15,
    title: "Keypad Programming",
    description: "Set up or reset access keypads",
    price: 65,
    eta: "30–45 mins",
    details: "Secure and reprogram your wall-mounted or wireless keypads.",
  },
];

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (serviceId) => {
    setExpandedCard((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <>
      <Navbar />
      <div
        className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] p-6`}
      >
        <div className="flex item-center flex-col justify-center text-center py-8">
          <h3 className="text-4xl font-bold mb-4 fit-content">
            Welcome to FixDoor LLC
          </h3>
          <p className="fit-content text-xl">
            Your trusted partner for high-quality garage door services
          </p>
        </div>

        <div className="w-[95%] mx-auto my-8">
          <div
            className="overflow-x-auto cursor-pointer"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-4 p-[20px]">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-[280px] bg-white border border-gray-200 rounded-lg p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105"
                  style={{
                    height: expandedCard === service.id ? "auto" : "400px",
                    boxShadow: "0px 5px 8px rgba(9, 54, 48, 0.5)",
                  }}
                >
                  <div className="relative w-full h-40 mb-3 rounded overflow-hidden">
                    <Image
                      src="https://fixdoor.com/wp-content/uploads/2025/03/commercial-garage-door-replacement-marble-falls-texas.jpg"
                      alt="Garage Door"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    {service.description}
                  </p>
                  <p className="text-[#093630] font-bold mt-2">
                    ${service.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="text-[20px] relative top-[3px]">⏱</span>{" "}
                    <span className="text-[14px]">Estimated arrival: </span>
                    <span className="font-semibold">{service.eta}</span>
                  </p>

                  <button
                    className="text-sm flex justify-between w-full text-gray-800 font-semibold mt-2 hover:cursor-pointer items-center"
                    onClick={() => toggleDetails(service.id)}
                  >
                    View Details
                    <span className="ml-1 text-[10px]">
                      {expandedCard === service.id ? "▲" : "▼"}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-700 overflow-hidden ${
                      expandedCard === service.id
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className="text-sm rounded"
                      style={{ opacity: expandedCard === service.id ? 1 : 0 }}
                    >
                      {service.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

