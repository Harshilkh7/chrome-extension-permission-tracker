import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Globe, Zap, ToggleRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
          <motion.h1
            className="text-6xl font-extrabold text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Real-Time Permission Tracker
          </motion.h1>
          <motion.p
            className="text-lg text-indigo-100 max-w-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A powerful Chrome extension and centralized dashboard working in harmony to monitor and display your site permissions live. Turn tracking on or off with a single click.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
          >
            <a
              href="/signup"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="inline-block bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg"
              whileHover={{ y: -5, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
            >
              <Globe className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Instantly monitor permissions across all sites with our lightweight Chrome extension.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg"
              whileHover={{ y: -5, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
            >
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Dashboard</h3>
              <p className="text-gray-600">
                View real-time permission changes on a central website with intuitive analytics.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg"
              whileHover={{ y: -5, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
            >
              <ToggleRight className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Control</h3>
              <p className="text-gray-600">
                Enable or disable tracking on demand—give you full control of your data flow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-6 text-center">
          &copy; {new Date().getFullYear()} Permission Tracker. All rights reserved.
        </footer>
      </motion.div>
    </>
  );
}
