import { useEffect, useState } from "react";
import Bloomberg from "../components/experience/Bloomberg";
import FSA from "../components/experience/FSA";
import SIG from "../components/experience/SIG";
import "./Experience.css";

const Experience = () => {
  const [fsa, setFSA] = useState(true);
  const [bloomberg, setBloomberg] = useState(false);
  const [sig, setSIG] = useState(false);

  const handleFSAClick = () => {
    setFSA(true);
    setBloomberg(false);
    setSIG(false);
  };

  const handleBloombergClick = () => {
    setBloomberg(true);
    setFSA(false);
    setSIG(false);
  };

  const handleSIGClick = () => {
    setSIG(true);
    setFSA(false);
    setBloomberg(false);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="experience-container">
      <p className="experience-header">Experience</p>
      <div className="experience-terminal-container">
        <div className="experience-terminal-header">
          <div className="header-btns">
            <div className="header-btn header-btn1"></div>
            <div className="header-btn header-btn2"></div>
            <div className="header-btn header-btn3"></div>
          </div>
          <div className="header-text">
            <p>kalpesh-portfolio &#8212; -bash</p>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-bg-text">
            <p>kalpesh-MB:Experience kalpesh-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className={`experience-terminal-btn terminal-btn1 ${fsa ?
                'active-btn' : '' }`}
              >
                cat 18verticals.txt/ &#8594;
              </button>
              
              <button
                onClick={handleSIGClick}
                className={`experience-terminal-btn terminal-btn3 ${sig ?
                'active-btn' : '' }`}
              >
                cat iCoderz Solutions.txt/ &#8594;
              </button>
              
              <button
                onClick={handleBloombergClick}
                className={`experience-terminal-btn terminal-btn2 ${bloomberg ?
                'active-btn' : '' }`}
              >
                cat Contract Base.txt/ <span>&#8594;</span>
              </button>
              
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <FSA />}
              {bloomberg && <Bloomberg />}
              {sig && <SIG />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
