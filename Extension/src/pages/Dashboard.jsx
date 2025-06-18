import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import { ExternalLink, ShieldCheck, XCircle, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [consents, setConsents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/consent/my-consents');
        setConsents(data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load consents');
      }
    })();
  }, []);

  const renderPermissions = (consent) =>
    consent.dataShared.map(({ permission, granted }) => (
      <motion.div
        key={permission}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex justify-between items-center mb-2 px-3 py-2 rounded-md hover:bg-indigo-50"
      >
        <p className="text-gray-700 text-sm">
          <span className="font-medium">{permission}:</span>{' '}
          <span className={granted ? 'text-green-600' : 'text-red-600'}>
            {granted ? 'Granted' : 'Denied'}
          </span>
        </p>
      </motion.div>
    ));

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 flex items-center">
            <ShieldCheck className="mr-2 text-indigo-600" /> Permission Dashboard
          </h2>
          <CalendarDays className="text-gray-400" />
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-md flex items-center space-x-2"
          >
            <XCircle className="w-5 h-5" />
            <span>{error}</span>
          </motion.div>
        )}

        {consents.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg text-center mt-20"
          >
            No consents logged yet.
          </motion.p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consents.map((consent) => (
              <motion.div
                key={consent._id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-indigo-700 truncate">
                    {consent.service}
                  </h3>
                  <ExternalLink
                    className="text-gray-400 hover:text-indigo-600 cursor-pointer"
                    onClick={() => window.open(consent.service, '_blank')}
                  />
                </div>
                {renderPermissions(consent)}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}