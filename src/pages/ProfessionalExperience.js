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
         {/* Surface Haul Image */}
        <div className="flex justify-center mb-10">
          <img src="/assets/img/haulTrek.jpg" alt="Surface Hauling: Lidar Perception" style={{ maxWidth: '400px', width: '100%', borderRadius: '8px' }} />
        </div>
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
            <li>	Configured and managed ROS TF tree, defining coordinate frames and static transforms via YAML.</li>
            <li>	Developed a utility to visualize vehicle movement with the help of plotly library.</li>
            <li>Performed core dump analysis to identify root causes of system crashes and runtime failures.</li>

          </ul>
        </section>

        {/* Bosch Job */}
        <header className="mb-10">
          <h1 id="job-bosch" className="text-4xl font-bold text-teal-400">Embedded Developer – Bosch</h1>
          <p className="text-black">October 2022 – December 2024</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">1. Interior Monitoring System (IMS)</h2>
          <h3 id="job-bosch" className="text-black">Client : Ford, Stellantis</h3>
          <p className="mb-4">IMS project was initially introduced in order to detect the activities of driver
            and alert the driver in case of emergency.
            It will detects driver drowsiness, distraction, and impairment.
            The ECU utilizes camera, steering signals as input.
            Alerts via haptics, acoustics, or infotainment display.</p>
        </section>

        {/* IMS Project Image */}
        <div className="flex justify-center mb-10">
          <img src="/assets/img/dms.png" alt="Interior Monitoring System" style={{ maxWidth: '400px', width: '100%', borderRadius: '8px' }} />
        </div>
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
            <li>  Developed algorithms for driver drowsiness module in C++.</li>
            <li>	Developed playback tool for simulating driver behavior.</li>
            <li>	Implemented a module to monitor facial features of driver.</li>
            <li>	Developed an algorithm for circadian rhythm to handle drowsiness in drivers.</li>
            <li>	Contributed to the development of hardware and software reset for camera.</li>
            <li>	Modules implementations such as interfaces, precondition handlers, error handlers, schedulers etc. </li>
            <li>	Successfully addressed and resolved Level 8 and 9 QAC++ warnings in the codebase.</li>
            <li>	Worked in the project migration on virtual machine to docker.</li>

          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">2. Digital Instrument Cluster</h2>
          <h3 id="job-bosch" className="text-black">Client : Volvo </h3>
          <p className="mb-4">DIC is a digital display that will show the necessary measurements like speed,fuel-level,time,indications to the driver.</p>
        </section>

        {/* Digital Instrument Cluster Image */}
        <div className="flex justify-center mb-10">
          <img src="/assets/img/cluster.jpg" alt="Digital Instrument Cluster" style={{ maxWidth: '400px', width: '100%', borderRadius: '8px' }} />
        </div>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
            <ul className="list-disc ml-6 space-y-2 text-black">
              <li><strong>Trip Computer:</strong> Trip distance for multiple trips</li>
              <li><strong>Tell tale:</strong>  Warning indicators and alerts for driver</li>
              <li><strong>Head Up display:</strong> Projects the navigation to the windshield</li>
              <li><strong>Connected car indicators:</strong> Display the phone and key connectivity</li>
            </ul>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">My Contributions</h2>
          <ul className="list-disc ml-6 space-y-2 text-black">
            <li>	Worked in all phases of Agile Scrum methodology (Requirement - Design - Coding - Testing). </li>
            <li>Contributed to the development and integration of the Trip Computer module.</li>
            <li>Identified and resolved a critical tell-tale toggling issue.</li>
            <li>Investigated, raised, and fixed a bootloader timeout issue in the ECU.</li>
            <li>Writing unit tests and performs functionality testing to ensure software functionality.</li>
            <li>Implemented an algorithm that will modify the fixed parameters in RTE layer into a configurable in application layer.</li>
            <li>Base level knowledge on Diagnostics, Bootloader and RTE layer is gained.</li>


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

