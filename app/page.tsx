"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const services = [
    "Customer Support (Chat / Email / Voice)",
    "Order & Ticket Management",
    "Technical Troubleshooting",
    "CRM / Admin Assistance",
    "Email & Inbox Management",
    "Data Entry Support",
  ];

  const skills = [
    "Customer Support (Chat / Email / Voice)",
    "Technical Troubleshooting",
    "CRM Tools",
    "Problem Solving",
    "Communication",
    "Attention to Detail",
  ];

  return (
    <div className="bg-white text-black scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-semibold text-lg">Ezekiel Vince Eleserio</h1>

          <nav className="flex gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-black transition">Services</a>
            <a href="#skills" className="hover:text-black transition">Skills</a>
            <a href="#experience" className="hover:text-black transition">Experience</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>

        </div>
      </header>

      <main className="pt-28">

        {/* HERO */}
        <section className="min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">

            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-3xl"
            >

              <motion.p variants={fadeUp} className="text-sm text-gray-500 mb-4">
                Customer Support • Virtual Assistant • Remote Ready
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl font-semibold leading-tight"
              >
                Helping businesses deliver better customer experiences.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-600">
                Customer Support Specialist and aspiring Virtual Assistant with 5+ years of experience in
                financial transactions, technical support, and customer service operations.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex gap-4">
                <a
                  href="#contact"
                  className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
                >
                  Hire Me
                </a>

                <a
                  href="#experience"
                  className="border border-black px-6 py-3 rounded-full hover:scale-105 transition"
                >
                  View Experience
                </a>
              </motion.div>

            </motion.div>

          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-12"
            >
              Services I Offer
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-12"
            >
              Core Skills
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* EXPERIENCE (RETAINED, NO CASE STUDY) */}
        <section id="experience" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-12"
            >
              Experience
            </motion.h2>

            {/* BAYVIEW */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-8 mb-8"
            >
              <h3 className="text-xl font-semibold">
                Customer Support Specialist
              </h3>

              <p className="text-gray-500 mt-1">
                Bayview Technologies Inc. • 2019 – 2025
              </p>

              <ul className="mt-6 space-y-2 text-gray-600 list-disc ml-5">
                <li>Handled customer deposits, withdrawals, and payment-related concerns</li>
                <li>Resolved failed, delayed, and disputed transactions with finance coordination</li>
                <li>Assisted with account recovery, login, and verification issues</li>
                <li>Maintained accurate CRM records and case documentation</li>
                <li>Identified and escalated suspicious or fraudulent activity</li>
                <li>Consistently met KPIs for accuracy, resolution rate, and satisfaction</li>
              </ul>
            </motion.div>

            {/* NETL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold">
                Customer Support Specialist (Chat & Email)
              </h3>

              <p className="text-gray-500 mt-1">
                NETL • May 2025 – Oct 2025
              </p>

              <ul className="mt-6 space-y-2 text-gray-600 list-disc ml-5">
                <li>Provided real-time chat and email support for payment and account issues</li>
                <li>Resolved transactional discrepancies with finance and technical teams</li>
                <li>Supported login, authentication, and verification troubleshooting</li>
                <li>Maintained detailed CRM logs for tracking and escalation</li>
                <li>Identified recurring system issues and reported bugs</li>
                <li>Exceeded performance metrics for resolution time and satisfaction</li>
              </ul>
            </motion.div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-12"
            >
              Let’s Work Together
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-2xl p-10"
            >

              <p className="text-lg">
                Available for Virtual Assistant and Customer Support roles.
              </p>

              <div className="mt-6 space-y-2">
                <p>Email: eleserioezekiel@yahoo.com</p>
                <p>Location: Dasmariñas, Cavite, Philippines</p>
              </div>

              <a
                href="mailto:eleserioezekiel@yahoo.com"
                className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition"
              >
                Send Email
              </a>

            </motion.div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ezekiel Vince Eleserio. All rights reserved.
        </footer>

      </main>
    </div>
  );
}
