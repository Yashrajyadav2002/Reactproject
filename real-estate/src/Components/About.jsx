import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-black-700 mb-8">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
          Welcome to <span className="font-semibold text-black-600">DreamHomes</span>, 
          your trusted partner in finding the perfect property. With years of experience 
          in real estate, we connect buyers, sellers, and renters with their dream homes 
          across India. Our mission is to make property search transparent, easy, and reliable.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-black-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To simplify property transactions and empower people with trusted insights, 
              personalized solutions, and professional guidance at every step of their 
              real estate journey.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-black-700 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become India’s most reliable and customer-centric real estate platform, 
              where every person can find a property they proudly call home or a profitable 
              investment.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-black-700 mb-8">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Trust", desc: "We build relationships based on honesty and transparency." },
              { title: "Innovation", desc: "We leverage technology to make property searches easier." },
              { title: "Customer First", desc: "We prioritize client satisfaction above everything." },
              { title: "Integrity", desc: "We act ethically and responsibly in all dealings." },
              { title: "Excellence", desc: "We aim to exceed expectations in every project." },
              { title: "Sustainability", desc: "We promote eco-friendly and sustainable living spaces." },
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold text-black-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-black-700 mb-8">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { name: "Yashraj Yadav", role: "Founder & CEO" },
              { name: "Vijay Mandal", role: "Head of Sales" },
              { name: "Prabash kumar", role: "Marketing Manager" },
              { name: "Nitish kumar ", role: "Customer Relations" },
            ].map((member, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-black-200 flex items-center justify-center text-2xl font-bold text-black-700">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-yellow-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">📍 Office: M.P. Nagar bhopal, India</p>
          <p className="mb-2">📞 Phone: +91 98765 43210</p>
          <p className="mb-4">📧 Email:  yyash9631@gamil.com</p>
          <button className="px-6 py-2 bg-orange text-black-600 font-semibold rounded-lg shadow ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;