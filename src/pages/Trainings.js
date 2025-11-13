import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Trainings = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} font-sans leading-relaxed min-h-screen`}>
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: '#0d9488',
              color: 'white',
              fontWeight: 600,
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '1.5rem'
            }}
          >
            ← Back
          </button>
        </div>

        <header className="mb-10">
          <h1 className="text-4xl font-bold" style={{ color: '#0096FF' }}>Trainings</h1>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold" style={{ color: '#0096FF' }}>Embedded System Professional</h2>
          <p className="text-gray-400 mb-2">TIESYS (TransIOT), Kochi</p>
          <ul className="list-disc ml-6 space-y-2" style={{ color: isDark ? '#ddd' : '#000' }}>
            <li>Solid foundation on basics of embedded C programming.</li>
            <li>Completed the projects based on EEPROM and display systems.</li>
            <li>Working knowledge on resource utilization, shared memory, and schedulers.</li>
            <li>Proper understanding of Linux Fundamentals (System calls, Booting, file system) is gained.</li>
          </ul>
          <a
            href="assets/certificates/ESP-STU-2021-00012_Robin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            View Certificate
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold" style={{ color: '#0096FF' }}>Professional C++ and Clean code</h2>
          <p className="text-gray-400 mb-2">Bosch, Coimbatore</p>
          <ul className="list-disc ml-6 space-y-2" style={{ color: isDark ? '#ddd' : '#000' }}>
            <li>Leveraged the OOPs and SOLID principles with examples.</li>
            <li>Discussed common pitfalls in C++ for embedded software development.</li>
            <li>Covered Design Patterns explaining their roles in code reusability and scalability.</li>
            <li>Clean coding guidelines and common practices were addressed.</li>
          </ul>
        </section>

        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>© 2025. Embedded Developer Portfolio.</p>
        </footer>
      </div>
    </div>
  );
};

export default Trainings;

