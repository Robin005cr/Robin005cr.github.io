import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfessionalExperience.css';

const ProfessionalExperience = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="prof-exp-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <h2>Work Experience Timeline</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>
            <a className="timeline-link" href="#job-ari" onClick={(e) => {
              e.preventDefault();
              scrollToSection('job-ari');
            }}>
              Autonomy Software Engineer, ARi, Chennai
            </a>
          </h3>
          <span>January 2025 – Present</span>
        </div>

        <div className="timeline-item">
          <h3>
            <a className="timeline-link" href="#job-bosch" onClick={(e) => {
              e.preventDefault();
              scrollToSection('job-bosch');
            }}>
              Embedded Software Developer, Bosch, Coimbatore
            </a>
          </h3>
          <span>August 2022 – December 2024</span>
        </div>

        <div className="timeline-item">
          <h3>
            <a className="timeline-link" href="#job-gadgeon" onClick={(e) => {
              e.preventDefault();
              scrollToSection('job-gadgeon');
            }}>
              Software Developer, Gadgeon Smart Systems, Kochi
            </a>
          </h3>
          <span>July 2021 – August 2022</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {/* ARi Job */}
        <header className="mb-10">
          <h1 id="job-ari" className="text-4xl font-bold text-teal-400">Autonomy Software Engineer – ARi</h1>
          <h3 id="job-ari" className="text-black">Client : Caterpillar</h3>
          <p className="text-black">January 2025 – Present</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Lidar Perception for Surface Hauling Truck</h2>
          <p className="mb-4">The project is to develop a lidar perception system for a surface hauling truck to detect moving obstacles, path planning, and sensor fusion.</p>
          <h2 className="text-2xl font-semibold text-black mb-2">My Contributions</h2>
          <ul className="list-disc ml-6 space-y-2 text-black">
            <li>Engineered moving obstacle detection solutions leveraging lidar sensors.</li>
            <li>Built and optimized range image-to-point-cloud converters, enabling support for multiple lidar types.</li>
            <li>Developed boundary and berm detection feature for minesite.</li>
            <li>Supported the development of the rut detection feature for haul trucks.</li>
            <li>Integrated open-source point cloud libraries(PCL) into C++ projects to accelerate development.</li>
            <li>Worked on path planning, sensor fusion, and SLAM algorithms.</li>
            <li>Drove KPI improvements by investigating and resolving root causes of KPI mismatches.</li>
            <li>Developed robust backend systems for a playback tool.</li>
          </ul>
        </section>

        {/* Bosch Job */}
        <header className="mb-10">
          <h1 id="job-bosch" className="text-4xl font-bold text-teal-400">Embedded Developer – Bosch</h1>
          <p className="text-black">October 2022 – December 2024</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Interior Monitoring System (IMS)</h2>
          <p className="mb-4">IMS project was initially introduced in order to detect the activities of driver
            and alert the driver in case of emergency.
            It will detects driver drowsiness, distraction, and impairment.
            The ECU utilizes camera, steering signals as input.
            Alerts via haptics, acoustics, or infotainment display.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
            <ul className="list-disc ml-6 space-y-2 text-black">
              <li><strong>Drowsiness:</strong> Yawning, eye blink, circadian/monotonous index</li>
              <li><strong>Microsleep:</strong> Blink-based short lapses</li>
              <li><strong>Impairment:</strong> Unfitness due to health, alcohol, or lack of response</li>
              <li><strong>Distraction:</strong> Phone usage, abnormal gaze</li>
              <li><strong>Child & Animal Presence Detection</strong></li>
              <li><strong>Seatbelt Detection</strong></li>
              <li><strong>Theft Detection</strong></li>
              <li><strong>Gesture Detection:</strong> Safety gestures (e.g., kidnap alert)</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">My Contributions</h2>
          <ul className="list-disc ml-6 space-y-2 text-black">
            <li>Precondition & Error Handler</li>
            <li>Interface handling(Inputs,Outputs,Parameters)</li>
            <li>Mathematical Computations (Head/Eye movements)</li>
            <li>Algorithm Development (Circadian rhythm)</li>
            <li>Timers, CAN Signal Handling</li>
            <li>Power & Sleep Cycle</li>
            <li>QAC Warning Fixes</li>
            <li>CMake integration</li>
            <li>Unit Testing (Google Test)</li>
          </ul>
        </section>

        {/* Gadgeon Job */}
        <header className="mb-10">
          <h1 id="job-gadgeon" className="text-4xl font-bold text-teal-400">Software Developer – Gadgeon Smart Systems</h1>
          <p className="text-black">July 2021 – September 2022</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">Gateway Programming</h2>
          <p className="mb-4">
            Gateways are actually devices like routers or modems, which are mostly used for IOT devices purposes.
            The data from lot of sensors are sent to cloud, their encoding, decoding, authentication etc.. all are handled by gateway.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-black">
            <li>Gateways are mostly installed in warehouses, farm houses, malls etc..</li>
            <li>Ware house - Interfaced GPS sensor for the movement of trucks.</li>
            <li>Farm house - Developed the encoder-decoder for temperature and humidity sensors.</li>
            <li>Malls - BLE sensors for sharing shop location</li>
          </ul>
        </section>
      </div>
    </div >
  );
};

export default ProfessionalExperience;

