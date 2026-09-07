import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Certifications = () => {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} font-sans leading-relaxed min-h-screen`}>
      <div className="max-w-5xl mx-auto p-6">

        <header className="mb-10">
          <h1 className="text-4xl font-bold" style={{ color: '#0096FF' }}>Certifications</h1>
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
          <button
            type="button"
            onClick={() => window.open('/assets/certificates/ESP-STU-2021-00012_Robin.pdf', '_blank', 'noopener,noreferrer')}
            className="button button--primary mt-4"
          >
            View Certificate
          </button>
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
        <section className="mb-10">
          <h2 className="text-2xl font-semibold" style={{ color: '#0096FF' }}>Anthropic Agentic AI</h2>
          <p className="text-gray-400 mb-2">Anthropic Academy</p>
          <ul className="list-disc ml-6 space-y-2" style={{ color: isDark ? '#ddd' : '#000' }}>
            <li>Skills, prompts, agents</li>
            <li>MCP</li>
            <li>AI Fluency</li>
            <li>Customs prompts and Agents</li>
          </ul>
          <button
            type="button"
            onClick={() => window.open('/assets/certificates/Anthropic_claude_101.pdf', '_blank', 'noopener,noreferrer')}
            className="button button--primary mt-4"
          >
            View Certificate
          </button>
        </section>
      </div>
    </div>
  );
};

export default Certifications;

