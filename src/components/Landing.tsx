import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NATHANIEL
              <br />
              <span>CHRISTIAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Computer Science Student</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Dev</div>
              <div className="landing-h2-2">Full Stack</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Product Builder</div>
              <div className="landing-h2-info-1">Problem Solver</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
