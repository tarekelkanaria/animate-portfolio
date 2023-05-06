import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import './index.scss';

const AboutCube = () => {
  return (
    <div className="cube-container">
      <div className="cube-spinner">
        <div className="face-1">
          <FaSass color="#dd0031" />
        </div>
        <div className="face-2">
          <FaHtml5 color="#f06529" />
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
