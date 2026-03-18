import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Event Management Coordinator</h4>
                <h5>AI Student Club, SSN</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Coordinated technical events and student initiatives while driving
              participation in AI-focused workshops and collaborative build sessions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing & Social Media Associate</h4>
                <h5>GeeksforGeeks Student Chapter</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led outreach and social communication for student developer programs,
              helping improve visibility and engagement across chapter activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Finalist</h4>
                <h5>Neurathon'26</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Selected as a Top 10 finalist out of 200-300 teams for building
              SpellFolio, an AI-powered ATS resume builder and analyzer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
