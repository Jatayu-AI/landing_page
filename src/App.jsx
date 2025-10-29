import React from "react";
import Navbar from "./Navbar";

const destinations = [
  { title: "Bali", img: "/images/bali.jpg" },
  { title: "Varanasi", img: "/images/varanasi.jpg" },
  { title: "Shillong", img: "/images/shillong.jpg" },
  { title: "Ooty", img: "/images/ooty.jpg" },
  { title: "Paris", img: "/images/paris.jpg" },
  { title: "Maldives", img: "/images/maldives.jpg" },
  { title: "Kodaikanal", img: "/images/kodaikanal.jpg" },
];

export default function App() {
  const [dark, setDark] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const next = () => setIndex((i) => (i + 4) % destinations.length);
  const prev = () => setIndex((i) => (i - 4 + destinations.length) % destinations.length);

  const visible = [];
  for (let i = 0; i < 4; i++) visible.push(destinations[(index + i) % destinations.length]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar dark={dark} setDark={setDark} />

      {/* Hero Section - only background image */}
      <header className="pt-20">
        <div className="relative">
          <img
            src="/images/compass.jpg"
            alt="hero"
            className="w-full h-[560px] object-cover"
          />
        </div>

        {/* Search Section below the image */}
        <div className="bg-white dark:bg-gray-900 py-8 flex justify-center">
          <div className="w-full max-w-3xl px-6">
            <div className="search-card bg-white dark:bg-gray-800 rounded-full p-3 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Location
                  </div>
                  <input
                    className="mt-1 p-3 rounded border w-full bg-transparent dark:border-gray-700"
                    placeholder="Where do you want to go?"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Date
                  </div>
                  <input
                    className="mt-1 p-3 rounded border w-full bg-transparent dark:border-gray-700"
                    placeholder="Choose Date"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Pricing
                  </div>
                  <input
                    className="mt-1 p-3 rounded border w-full bg-transparent dark:border-gray-700"
                    placeholder="Choose your budget"
                  />
                </div>
                <div className="flex items-center">
                  <button className="ml-auto bg-brandPurple text-white px-5 py-3 rounded-full">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dream Places */}
      <section className="py-12 bg-white dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Travel to your dream place</h2>
            <div className="flex items-center gap-3">
              <button onClick={prev} className="bg-white/10 dark:bg-gray-800 px-3 py-2 rounded">
                ←
              </button>
              <button onClick={next} className="bg-white/10 dark:bg-gray-800 px-3 py-2 rounded">
                →
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((d, idx) => (
              <div key={idx} className="bg-white/5 dark:bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-12 bg-white dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">About us</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-2xl">
            Driven by innovation, we simplify how travelers discover and plan their adventures.
            With AI at the core, we make travel decisions faster, smarter, and stress-free.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-purple-600 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Why Choose Us?</h4>
              <p className="text-sm text-gray-400">
                We make trip planning effortless with AI powered personalization. Discover destinations,
                itineraries, and bookings tailored just for you.
              </p>
            </div>

            <div className="p-6 border border-purple-600 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-sm text-gray-400">
                To make travel simple, smart, and accessible for everyone.
              </p>
            </div>

            <div className="p-6 border border-purple-600 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
              <p className="text-sm text-gray-400">
                Our vision is to be the world’s most trusted AI travel companion.
              </p>
            </div>

            <div className="p-6 border border-purple-600 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Our Values</h4>
              <p className="text-sm text-gray-400">
                Innovation - We harness AI to make travel smarter and simpler

Trust - We prioritize transparency, security and reliable experiences

Customer first _ Every journey we create begins with your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-400">
              Have questions or need help planning your trip? Our team is here to assist you anytime.
            </p>
          </div>
          <div>
            <div
              className="p-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(99,102,241,0.85))",
              }}
            >
              <input
                placeholder="Your Name"
                className="w-full p-3 rounded mb-3 text-black"
              />
              <input
                placeholder="Your Email"
                className="w-full p-3 rounded mb-3 text-black"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded mb-3 h-28 text-black"
              ></textarea>
              <button className="px-6 py-2 bg-white text-black rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-[#0b0b0b] text-gray-700 dark:text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                className="w-10 h-10 rounded-full"
                alt="logo"
              />
              <span className="font-semibold">Jatayu AI</span>
            </div>
            <p className="mt-3 text-sm">Smart travel planning with AI.</p>
          </div>

          <div>
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 text-sm space-y-2">
              <li>Destinations</li>
              <li>Bookings</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 text-sm space-y-2">
              <li>FAQ</li>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <input
              placeholder="Enter your email"
              className="p-2 mt-3 rounded bg-black/20 dark:bg-white/10 w-full"
            />
            <button className="px-3 py-2 mt-2 bg-brandPurple text-white rounded">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-sm">
          © 2025 Greelogix. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
