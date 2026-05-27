export default function VKOmarWebsite() {
  return (
    <div className="font-sans bg-white text-gray-800">

      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="VK Omar Logo"
              className="h-20 w-auto object-contain"
            />

            <div>
              <h1 className="text-3xl font-bold text-blue-900">
                VK Omar & Associates
              </h1>

              <p className="text-gray-500 text-sm">
                Chartered Accountants
              </p>
            </div>

          </div>

          {/* NAVBAR */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-blue-900">

            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>

            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>

            <a href="#team" className="hover:text-blue-600 transition">
              Team
            </a>

            <a href="#news" className="hover:text-blue-600 transition">
              News
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>

          </nav>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Trusted CA Services for Your Business Growth
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              GST Filing, Income Tax, Company Registration &
              Financial Consulting — all under one roof.
            </p>

            <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-100 transition">
              Contact Now
            </button>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
              alt="CA Office"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h3 className="text-4xl font-bold text-blue-900">
              Our Services
            </h3>

            <p className="text-gray-500 mt-3">
              Professional accounting & tax solutions.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Income Tax Filing",
                desc: "Accurate and timely corporate and individual tax return preparation."
              },

              {
                title: "GST Registration & Returns",
                desc: "Seamless GST compliance, filing, and advisory for businesses."
              },

              {
                title: "Company Registration",
                desc: "Private Limited, LLP & Startup registration services."
              },

              {
                title: "Audit & Assurance",
                desc: "Complete statutory and tax audit support."
              },

              {
                title: "Project Report Making",
                desc: "Professional DPR & bank project reports for loans and startups."
              },

              {
                title: "CM Yuva Form Filling",
                desc: "CM Yuva scheme form filling and documentation support."
              },

              {
                title: "MSME/Udyam Registration",
                desc: "MSME/Udyam registration assistance for businesses."
              },

              {
                title: "Business Advisory",
                desc: "Strategic consulting to optimize business operations."
              },

              {
                title: "Financial Planning",
                desc: "Financial projections and wealth management strategies."
              }

            ].map((service, index) => (

              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition"
              >

                <div className="w-14 h-14 bg-blue-100 rounded-2xl mb-5 flex items-center justify-center text-blue-900 font-bold text-xl">
                  📁
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  {service.title}
                </h4>

                <p className="text-gray-500 text-sm leading-6">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="Office"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h3 className="text-4xl font-bold text-blue-900 mb-6">
              Trusted Financial Guidance for Every Business
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              At VK Omar & Associates, we help businesses,
              startups, and individuals manage taxation,
              compliance, registrations, and financial planning
              with complete transparency and professional support.
            </p>

            <div className="space-y-4 text-lg">

              <p>✔ Fast and accurate filing support</p>

              <p>✔ Personalized consultation</p>

              <p>✔ Startup & MSME guidance</p>

              <p>✔ Complete confidentiality</p>

              <p>✔ Affordable professional services</p>

              <p>✔ Timely compliance management</p>

            </div>

          </div>

        </div>

      </section>


      {/* TEAM SECTION */}
      <section id="team" className="py-20 bg-gray-100">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase">
            Our Team
          </p>

          <h3 className="text-4xl font-bold text-blue-900">
            VK Omar & Associates Team
          </h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              role: "Founder",
              name: "CA Vatan Kumar Omar",
              icon: "👨‍💼",
              desc: "Founder of VK Omar & Associates with strong expertise in taxation, GST compliance, financial consulting, and business registrations."
            },

            {
              role: "Owner",
              name: "Adv. Rajesh Kumar Gupta",
              icon: "⚖️",
              desc: "Experienced legal professional dedicated to delivering reliable legal consultation and client support."
            },

            {
              role: "Organizer",
              name: "Divyans Omar",
              icon: "🎓",
              desc: "Focused on organization, coordination, and client communication."
            },

            {
              role: "Accountant",
              name: "Vijay Omar",
              icon: "📘",
              desc: "Experienced accountant managing bookkeeping and taxation records."
            },

            {
              role: "Senior Executive",
              name: "Uday Narayan",
              icon: "💼",
              desc: "Handles client coordination and compliance support professionally."
            },

            {
              role: "Junior Executive",
              name: "Raunak",
              icon: "📑",
              desc: "Assists with documentation and office operations efficiently."
            },

            {
              role: "Manager",
              name: "Navneet",
              icon: "🏢",
              desc: "Oversees workflow management and team coordination."
            },

            {
              role: "GST Expert",
              name: "Sandeep",
              icon: "🧾",
              desc: "Specialized in GST registration, filing, and consultancy."
            },

            {
              role: "Finance Associate",
              name: "Vinay",
              icon: "💰",
              desc: "Assists in financial planning, reporting, and budgeting."
            }

          ].map((member, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow p-8 text-center hover:shadow-xl transition"
            >

              <div className="text-5xl mb-4">
                {member.icon}
              </div>

              <h4 className="text-2xl font-bold text-blue-900">
                {member.role}
              </h4>

              <p className="font-semibold text-lg mt-2">
                {member.name}
              </p>

              <p className="text-gray-500 mt-4 leading-7">
                {member.desc}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* NEWS SECTION */}
      <section id="news" className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h3 className="text-4xl font-bold text-blue-900">
              Latest CA & GST News
            </h3>

            <p className="text-gray-500 mt-3">
              Latest updates related to GST, Income Tax & Legal News
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "New GST Return Update",
                desc: "Government released new GST filing guidelines for businesses.",
                link: "https://cleartax.in/s/gst-news-and-announcements#h1"
              },

              {
                title: "Income Tax Return Due Date",
                desc: "Latest update on ITR filing due date and penalties.",
                link: "https://cleartax.in/s/gst-news-and-announcements#h1"
              },

              {
                title: "MSME Benefits 2026",
                desc: "New MSME loan and subsidy benefits announced.",
                link: "https://cleartax.in/s/gst-news-and-announcements#h1"
              }

            ].map((news, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition"
              >

                <div className="text-4xl mb-4">
                  📰
                </div>

                <h4 className="text-2xl font-bold text-blue-900 mb-4">
                  {news.title}
                </h4>

                <p className="text-gray-600 leading-7 mb-6">
                  {news.desc}
                </p>

                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Read More
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h3 className="text-4xl font-bold text-blue-900">
              Contact Us
            </h3>

            <p className="text-gray-500 mt-3">
              Get in touch with VK Omar & Associates
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 max-w-4xl mx-auto">

            <div className="space-y-6 text-gray-700 text-lg">

              <div className="flex items-start gap-4">

                <div className="text-2xl">📍</div>

                <p>
                  SHOP Number 09, Jila Parishad Market,
                  Hamirpur, Uttar Pradesh - 210301
                </p>

              </div>

              <div className="flex items-start gap-4">

                <div className="text-2xl">📞</div>

                <div className="space-y-1">

                  <p>+91 9451324635</p>
                  <p>+91 8840806143</p>
                  <p>+91 9936434100</p>
                  <p>+91 7355915554</p>
                  <p>+91 8840821082</p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="text-2xl">✉</div>

                <p>
                  vkomarandassociates@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-6 text-center">

        <p>
          © 2026 VK Omar & Associates. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}
