import { FaCss3, FaGitAlt, FaJsSquare, FaReact, FaNode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

import './index.scss';

const AboutCube = () => {
  return (
    <div className="cube-container">
      <div className="cube-spinner">
        <div className="face-1">
          <FaNode color="#404137" />
        </div>
        <div className="face-2">
          <SiMongodb color="#12924f" />
        </div>
        <div className="face-3">
          <FaCss3 color="#28a4d9" />
        </div>
        <div className="face-4">
          <FaReact color="#5ed4f4" />
        </div>
        <div className="face-5">
          <FaJsSquare color="#efd81d" />
        </div>
        <div className="face-6">
          <FaGitAlt color="#ec4d28" />
        </div>
      </div>
    </div>
  );
};

export default AboutCube;
