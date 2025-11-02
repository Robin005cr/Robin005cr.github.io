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
          <p className="text-gray-400">January 2025 – Present</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Lidar Perception</h2>
          <p className="mb-4">IMS project was initially introduced in order to detect the activities of driver and alert the driver in case of emergency.</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Engineered moving obstacle detection solutions leveraging lidar sensors.</li>
            <li>Built and optimized range image-to-point-cloud converters, enabling support for multiple lidar types.</li>
            <li>Created and maintained efficient parsers for ROS node communication.</li>
            <li>Integrated open-source point cloud libraries into C++ projects to accelerate development.</li>
            <li>Worked on path planning, sensor fusion, and SLAM algorithms.</li>
            <li>Drove KPI improvements by investigating and resolving root causes of KPI mismatches.</li>
            <li>Developed robust backend systems for a playback tool.</li>
          </ul>
        </section>

        {/* Bosch Job */}
        <header className="mb-10">
          <h1 id="job-bosch" className="text-4xl font-bold text-teal-400">Embedded Developer – Bosch</h1>
          <p className="text-gray-400">October 2022 – December 2024</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Interior Monitoring System (IMS)</h2>
          <p className="mb-4">IMS project was initially introduced in order to detect the activities of driver and alert the driver in case of emergency.</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Detects driver drowsiness, distraction, and impairment.</li>
            <li>Utilizes camera, steering signals, or both.</li>
            <li>IMS is also now expanded to monitor the occupant as well.</li>
            <li>Alerts via haptics, acoustics, or infotainment display.</li>
            <li>Combines Machine Learning with Embedded Systems.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
            <ul className="list-disc ml-6 space-y-2 text-gray-300">
              <li><strong>Drowsiness:</strong> Yawning, eye blink, circadian/monotonous index</li>
              <li><strong>Microsleep:</strong> Blink-based short lapses</li>
              <li><strong>Impairment:</strong> Unfitness due to health, alcohol, or lack of response</li>
              <li><strong>Distraction:</strong> Phone usage, abnormal gaze</li>
            </ul>
            <ul className="list-disc ml-6 space-y-2 text-gray-300">
              <li><strong>Child & Animal Presence Detection</strong></li>
              <li><strong>Seatbelt Detection</strong></li>
              <li><strong>Theft Detection</strong></li>
              <li><strong>Gesture Detection:</strong> Safety gestures (e.g., kidnap alert)</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Roles & Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Precondition & Error Handler</li>
            <li>Interface handling(Inputs,Outputs,Parameters)</li>
            <li>Mathematical Computations (Head/Eye movements)</li>
            <li>Algorithm Development (Circadian rhythm)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Technical Contributions</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl text-teal-300 mb-2">Embedded Tasks</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-300">
                <li>Timers, CAN Signal Handling</li>
                <li>Power & Sleep Cycle</li>
                <li>Camera Parameter Management</li>
                <li>Driver Authentication & Modes</li>
                <li>Warning Handlers (Haptics, Acoustics)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-teal-300 mb-2">Application Layer</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-300">
                <li>QAC Warning Fixes</li>
                <li>CMake integration</li>
                <li>Unit Testing (Google Test)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gadgeon Job */}
        <header className="mb-10">
          <h1 id="job-gadgeon" className="text-4xl font-bold text-teal-400">Software Developer – Gadgeon Smart Systems</h1>
          <p className="text-gray-400">July 2021 – September 2022</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Gateway Programming</h2>
          <p className="mb-4">
            Gateways are actually devices like routers or modems, which are mostly used for IOT devices purposes.
            The data from lot of sensors are sent to cloud, their encoding, decoding, authentication etc.. all are handled by gateway.
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Gateways are mostly installed in warehouses, farm houses, malls etc..</li>
            <li>Ware house - Interfaced GPS sensor for the movement of trucks.</li>
            <li>Farm house - Developed the encoder-decoder for temperature and humidity sensors.</li>
            <li>Malls - BLE sensors for sharing shop location</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProfessionalExperience;

