"use client";
import React, { useState, useEffect } from "react";
import {
  FaTools,
  FaShieldAlt,
  FaClock,
  FaHome,
  FaExclamationTriangle,
  FaEye,
  FaArrowsAltV,
  FaVolumeUp,
  FaPhone,
  FaCalendarAlt,
  FaCheckCircle,
  FaDollarSign,
  FaRocket,
  FaArrowLeft,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";

const ExtensionSpringPage = () => {
  const [activeSpring, setActiveSpring] = useState(0);
  const [activeSign, setActiveSign] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const springData = [
    {
      id: 0,
      weight: "90 LB",
      title: "90 LB Extension Spring",
      description: "Standard spring for light garage doors",
      details:
        "Perfect for single-car garages and lightweight doors. Provides reliable operation with smooth lifting action.",
      icon: FaTools,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 1,
      weight: "100 LB",
      title: "100 LB Extension Spring",
      description: "Most common residential size",
      details:
        "The industry standard for most residential garage doors. Balanced performance and durability.",
      icon: FaHome,
      color: "from-green-400 to-green-600",
    },
    {
      id: 2,
      weight: "110 LB",
      title: "110 LB Extension Spring",
      description: "Heavy-duty spring for heavier doors",
      details:
        "Designed for heavier residential doors and commercial applications. Enhanced strength and longevity.",
      icon: FaShieldAlt,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      weight: "120 LB",
      title: "120 LB Extension Spring",
      description: "For insulated and commercial doors",
      details:
        "Maximum strength for insulated doors and commercial installations. Professional-grade performance.",
      icon: FaCog,
      color: "from-red-400 to-red-600",
    },
  ];

  const signData = [
    {
      id: 0,
      title: "Door Won't Open",
      description: "Garage door is stuck or hard to lift",
      details:
        "If your garage door refuses to open or requires excessive force, this indicates spring failure.",
      icon: FaExclamationTriangle,
      color: "from-red-400 to-red-600",
    },
    {
      id: 1,
      title: "Visible Damage",
      description: "Springs look stretched or broken",
      details:
        "Visible gaps, stretching, or complete breaks in the spring coils are clear indicators of failure.",
      icon: FaEye,
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 2,
      title: "Uneven Movement",
      description: "Door tilts or opens unevenly",
      details:
        "When one spring fails, the door will tilt to one side during operation, creating dangerous imbalance.",
      icon: FaArrowsAltV,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 3,
      title: "Loud Noises",
      description: "Banging or grinding during operation",
      details:
        "Unusual sounds during door operation often indicate worn or failing spring components.",
      icon: FaVolumeUp,
      color: "from-purple-400 to-purple-600",
    },
  ];

  const benefits = [
    {
      icon: FaDollarSign,
      title: "Cost-Effective Solution",
      description:
        "Extension springs are generally more affordable than torsion springs",
    },
    {
      icon: FaRocket,
      title: "Quick Installation",
      description:
        "They install faster than torsion systems, reducing service time",
    },
    {
      icon: FaHome,
      title: "Great for Lighter Doors",
      description: "Perfect for single-car and lighter residential doors",
    },
  ];

  // Auto-rotate spring data
  useEffect(() => {
    const interval = setInterval(() => {
       setActiveSpring((prev) => (prev + 1) % springData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate sign data
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSign((prev) => (prev + 1) % signData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const CircularIconMenu = ({
    data,
    activeIndex,
    setActiveIndex,
    size = "large",
  }) => {
    const radius = size === "large" ? 100 : 70;
    const centerSize = size === "large" ? "w-20 h-20" : "w-16 h-16";
    const iconSize = size === "large" ? "w-14 h-14" : "w-12 h-12";

    // Only allow 4 items for a diamond layout
    const directions = ["top", "right", "bottom", "left"];
    const positions = {
      top: { x: 0, y: -radius },
      right: { x: radius, y: 0 },
      bottom: { x: 0, y: radius },
      left: { x: -radius, y: 0 },
    };

    return (
      <div
        className="relative flex items-center justify-center"
        style={{ width: radius * 3, height: radius * 3 }}
      >
        {/* Center Active Icon */}
        <div
          className={`absolute ${centerSize} rounded-full bg-gradient-to-r ${data[activeIndex]?.color} flex items-center justify-center shadow-2xl z-10 transition-all duration-500 hover:scale-110 right-[45%] top-[28%]`}
        >
          {React.createElement(data[activeIndex]?.icon, {
            className: "text-white text-2xl",
          })}
        </div>

        {/* Diamond Icons */}
        {data.slice(0, 4).map((item, index) => {
          const dir = directions[index]; // top, right, bottom, left
          const { x, y } = positions[dir];
          const offset = size === "large" ? 28 : 24;

          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute ${iconSize} flex justify-center items-center rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg"
                  : "bg-gradient-to-r from-gray-100 to-gray-200 shadow-md hover:shadow-lg"
              }`}
              style={{
                transform: `translate(${x - offset}px, ${y - offset}px)`,
              }}
            >
              {React.createElement(item.icon, {
                className: `${
                  index === activeIndex ? "text-[#093630]" : "text-gray-600"
                } text-xl`,
              })}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="py-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#093630] transition-colors duration-300">
            <FaArrowLeft className="text-sm" />
            <span>Back to Spring Replacement</span>
          </button>
        </div>

        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className={`text-center py-16 transition-all duration-1000 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-[#093630] mb-6 leading-tight">
              Extension Spring
              <span className="block bg-gradient-to-r from-[#093630] to-[#0a4a42] bg-clip-text text-transparent">
                Replacement
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Affordable and reliable extension-spring services — starting at
            <span className="text-[#093630] font-bold"> $89</span>
          </p>

          <div className="flex items-center justify-center gap-3 text-gray-600 mb-12">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <FaClock className="text-white text-xs" />
            </div>
            <span className="text-lg">Same-day service available</span>
          </div>

          <button className="bg-gradient-to-r from-[#093630] to-[#0a4a42] text-white px-10 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <FaPhone className="text-lg" />
            Call Now: 830-362-2763
          </button>
        </section>

        {/* Spring Options with Circular Menu */}
        <section
          id="springs"
          data-animate
          className={`py-20 transition-all duration-1000 delay-200 ${
            isVisible.springs
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#093630] mb-6">
              Extension-Spring Weight Options
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Extension springs are color-coded by weight capacity. We stock the
              most common sizes for rapid replacements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Circular Menu */}
            <div className="flex justify-center">
              <CircularIconMenu
                data={springData}
                activeIndex={activeSpring}
                setActiveIndex={setActiveSpring}
                size="large"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="transform transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#093630]">
                    {springData[activeSpring].weight}
                  </span>
                  <div className="flex items-center gap-2 text-green-600">
                    <FaClock className="text-sm" />
                    <span className="text-sm font-medium">Same Day Start</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {springData[activeSpring].title}
                </h3>

                <p className="text-gray-600 mb-4 text-lg">
                  {springData[activeSpring].description}
                </p>

                <p className="text-gray-700 mb-6">
                  {springData[activeSpring].details}
                </p>

                <button className="bg-gradient-to-r from-[#093630] to-[#0a4a42] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Extension Springs */}
        <section
          id="about"
          data-animate
          className={`py-20 transition-all duration-1000 delay-300 ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#093630]/10 to-transparent"></div>
                <div className="relative z-10">
                  <FaCog className="text-8xl text-[#093630] animate-spin-slow" />
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#093630] mb-6">
                What Are Extension Springs?
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Extension springs are mounted above the horizontal tracks on
                either side of your garage door. They stretch and contract to
                lift and lower the door. These springs are common on older
                systems and single-car garages.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      {React.createElement(benefit.icon, {
                        className: "text-white text-xl",
                      })}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signs You Need Replacement */}
        <section
          id="signs"
          data-animate
          className={`py-20 transition-all duration-1000 delay-400 ${
            isVisible.signs
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#093630] mb-6">
              Signs You Need Replacement
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Watch for these warning signs that indicate your extension springs
              need professional attention.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="transform transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${signData[activeSign].color} rounded-full flex items-center justify-center`}
                  >
                    {React.createElement(signData[activeSign].icon, {
                      className: "text-white text-2xl",
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {signData[activeSign].title}
                    </h3>
                    <p className="text-gray-600">
                      {signData[activeSign].description}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg ml-20">
                  {signData[activeSign].details}
                </p>
              </div>
            </div>

            {/* Circular Menu */}
            <div className="flex justify-center">
              <CircularIconMenu
                data={signData}
                activeIndex={activeSign}
                setActiveIndex={setActiveSign}
                size="medium"
              />
            </div>
          </div>

          {/* Safety Warning */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-red-100 border-l-8 border-red-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaExclamationTriangle className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-red-800 mb-3 text-xl">
                  Safety Warning
                </h3>
                <p className="text-red-700 mb-4 text-lg">
                  Extension springs store high tension and can cause serious
                  injury if mishandled. Never attempt replacement without proper
                  training.
                </p>
                <p className="text-red-700 text-lg">
                  Our certified technicians have the tools and expertise to
                  replace springs safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-animate
          className={`py-20 transition-all duration-1000 delay-500 ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-8 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#093630]/5 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#093630] mb-6">
                Need Extension-Spring Replacement?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Don't risk injury—call the professionals for fast, reliable
                service today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-[#093630] to-[#0a4a42] text-white px-10 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center">
                  <FaPhone className="text-lg" />
                  Call Now
                </button>
                <button className="border-2 border-[#093630] text-[#093630] px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#093630] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center">
                  <FaCalendarAlt className="text-lg" />
                  Schedule Service
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
};

export default ExtensionSpringPage;
