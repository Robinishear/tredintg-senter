import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";

const WorkerCard = ({ name, email, role, coins, photoURL, index }) => {
  return (
    <motion.article
      className="rounded-3xl shadow-lg p-6 w-full max-w-xs text-center 
                 transition-transform duration-500 transform 
                 hover:-translate-y-2 hover:scale-105 
                 hover:shadow-[0_20px_40px_rgba(118,75,162,0.4)] 
                 cursor-pointer bg-gray-900/40 backdrop-blur-lg border border-gray-700"
      role="region"
      tabIndex="0"
      aria-labelledby={name}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-32 h-32 mx-auto mb-5"
        whileHover={{ rotate: 6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={photoURL}
          alt={`Portrait of ${name}`}
          className="w-32 h-32 rounded-full border-4 border-lime-300/20 
                     object-cover shadow-lg 
                     transition-all duration-500 hover:border-lime-300"
          loading="lazy"
        />
      </motion.div>

      <h2
        id={name}
        className="text-2xl font-bold text-lime-300 mb-1 select-text"
      >
        {name}
      </h2>
      <p className="text-lime-200 mb-3 select-text">
        Role: {role || "Worker"}
      </p>
      <a
        href={`mailto:${email}`}
        className="text-lime-300 font-medium break-words inline-block mb-4 
                   hover:text-lime-400 hover:underline transition duration-300 select-text"
      >
        {email}
      </a>
      <div
        className="flex items-center justify-center space-x-2 
                   text-lime-300 font-semibold text-lg select-text"
        aria-label={`Coins: ${coins}`}
      >
        <FaCoins className="text-yellow-400" />
        <span>{coins} Coins</span>
      </div>
    </motion.article>
  );
};

const StudentsList = () => {
  const [workers, setWorkers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 8;

  useEffect(() => {
    axios
      .get("https://taskninja-alpha.vercel.app/buyers")
      .then((res) => setWorkers(res.data))
      .catch((err) => console.error(err));
  }, []);

  // pagination calculations
  const totalPages = Math.ceil(workers.length / workersPerPage);
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <motion.h2
        className="text-4xl font-extrabold text-lime-300 mb-10 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🌟 Students List 🌟
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {currentWorkers.map((worker, i) => (
          <WorkerCard
            key={worker._id}
            index={i}
            name={worker.name}
            email={worker.email}
            role={worker.role}
            coins={worker.coins}
            photoURL={worker.photoURL}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-xl font-semibold ${
            currentPage === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-lime-400 text-gray-900 hover:bg-lime-500"
          } transition`}
        >
          ◀ Prev
        </button>

        <span className="text-lime-300 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-xl font-semibold ${
            currentPage === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-lime-400 text-gray-900 hover:bg-lime-500"
          } transition`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default StudentsList;
