import React, { useState } from "react";
import {
  Laptop,
  Users,
  MessageSquare,
  Search,
  Code,
  Palette,
  Phone,
  Mail,
  Globe,
  X,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-slide-up">
    <Icon className="w-12 h-12 mb-4 text-[#FFE461]" />
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  const itemsPerView = { md: 2, lg: 3 };

  const next = () => {
    setCurrentIndex((current) =>
      current + 1 >= items.length ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentIndex((current) =>
      current - 1 < 0 ? items.length - 1 : current - 1
    );
  };

  return (
    <div className="relative animate-fade-slide-up">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / itemsPerView.lg)
            }%)`,
          }}
        >
          {items}
        </div>
      </div>
      <button
        onClick={previous}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      >
        →
      </button>
    </div>
  );
};

const CarouselItem = ({ children }) => (
  <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-1">
    <div className="bg-white rounded-lg shadow p-6">{children}</div>
  </div>
);

const ContactPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-6 max-w-md animate-bounce-in z-50">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-4 rounded-t-lg -mt-6 -mx-6 mb-4">
        <h3 className="font-bold text-lg mb-2">
          Saw Our Digital Card and Thought, "Wow, I Want That!"?
        </h3>
        <p className="text-sm mb-2">Sick of Old, Boring Paper Cards?</p>
        <p className="font-medium">
          Give Us a Call! Your Dream Card is a Dial Away!
        </p>
      </div>
      <div className="flex items-center gap-2 text-gray-800">
        <Phone className="text-yellow-500" size={20} />
        <a href="tel:+919826050902" className="hover:text-yellow-600">
          Call/WhatsApp: +91 98260 50902
        </a>
      </div>
    </div>
  );
};

const ContactSection = () => (
  <div className="bg-gray-50 rounded-lg p-8 animate-fade-slide-up">
    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
      Get in Touch
    </h2>
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="text-yellow-500" size={24} />
        <a
          href="mailto:info@parallelpanda.in"
          className="hover:text-yellow-600"
        >
          info@parallelpanda.in
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="text-yellow-500" size={24} />
        <a href="tel:+919826050902" className="hover:text-yellow-600">
          Call/WhatsApp: +91 98260 50902
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Globe className="text-yellow-500" size={24} />
        <div className="flex flex-wrap gap-2">
          <a
            href="https://parallelpanda.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600"
          >
            parallelpanda.in
          </a>
          <span>|</span>
          <a
            href="https://theparallelpanda.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600"
          >
            theparallelpanda.com
          </a>
        </div>
      </div>
    </div>
  </div>
);

const DigitalCard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const services = [
    {
      icon: Laptop,
      title: "Digital Marketing Solutions",
      description:
        "Turn followers into fans—because who wouldn't want a cheering squad for their brand?",
    },
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "Turn chats into sales—let's turn those 'Hi, how are you?' into 'Where do I sign?'",
    },
    {
      icon: MessageSquare,
      title: "Lead Generation & WhatsApp Marketing",
      description:
        "Boost your sales—ads that don't just sit there but get people clicking!",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Get found on Google—because hiding online is not a good look!",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Easy-to-use websites that keep visitors coming back for more—just like a favorite show!",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Bold designs that catch the eye and clearly tell your story—like a great billboard!",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-slide-up {
            animation: fadeSlideUp 0.6s ease-out forwards;
          }
          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-bounce-in {
            animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-[#FFE461] rounded-lg p-8 mb-12 animate-fade-slide-up">
          <img
            src="/logo.png"
            alt="Parallel Panda Logo"
            className="h-16 mb-6 animate-fade-slide-up"
          />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-fade-slide-up">
            Welcome to Parallel Panda
          </h1>
          <p className="text-lg leading-relaxed text-gray-800 animate-fade-slide-up [animation-delay:200ms]">
            <span className="font-semibold text-xl">
              A digital marketing engine
            </span>{" "}
            fueled by
            <span className="font-bold text-yellow-600">
              {" "}
              27 years of mastery
            </span>
            . From driving
            <span className="italic"> targeted leads</span> through Google and
            Meta ads to igniting connections via email and WhatsApp marketing,
            we deliver a
            <span className="underline decoration-yellow-600">
              {" "}
              full suite of tailored solutions
            </span>
            .
            <br />
            <br />
            With <span className="font-semibold">
              bespoke SEO strategies
            </span>{" "}
            and a commitment to transparency, we guarantee growth without the
            guesswork. Let us handle the complexity while you focus on what
            matters most—
            <span className="font-bold text-yellow-600">
              elevating your business
            </span>
            .
          </p>
        </div>

        {/* First Carousel */}
        <div className="mb-12">
          <Carousel>
            {["a.png", "b.png", "c.png"].map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Second Carousel */}
        <Carousel>
          {[1, 2, 3, 4, 5].map((num) => (
            <CarouselItem key={num}>
              <img
                src={`${num}.png`}
                alt={`Portfolio ${num}`}
                className="w-full h-full object-cover rounded"
              />
            </CarouselItem>
          ))}
        </Carousel>

        {/* Contact Section */}
        <ContactSection />

        {/* Floating Contact Popup */}
        <ContactPopup
          isVisible={isPopupVisible}
          onClose={() => setIsPopupVisible(false)}
        />
      </div>
    </>
  );
};

export default DigitalCard;
