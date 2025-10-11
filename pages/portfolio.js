import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #ffffff;
          color: #2c2c2c;
          line-height: 1.6;
        }

        .portfolio-wrapper {
          min-height: 100vh;
        }

        /* Header */
        .portfolio-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          border-bottom: 1px solid #eee;
        }

        .header-logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c2c2c;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .header-nav {
          display: flex;
          gap: 35px;
          align-items: center;
        }

        .header-nav a {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .header-nav a:hover {
          color: #2c2c2c;
        }

        .header-nav a.active {
          color: #2c2c2c;
          font-weight: 600;
        }

        /* Main Content */
        .main-content {
          max-width: 1100px;
          margin: 100px auto 0;
          padding: 80px 40px 100px;
        }

        /* Back Button */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #666;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 50px;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .back-button:hover {
          color: #2c2c2c;
          gap: 12px;
        }

        /* Project Header */
        .project-header {
          margin-bottom: 70px;
        }

        .project-category {
          color: #999;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 2.5px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .project-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 25px;
          color: #2c2c2c;
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .project-subtitle {
          font-size: 1.4rem;
          color: #666;
          font-weight: 400;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .project-meta {
          display: flex;
          gap: 50px;
          padding: 30px 0;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .meta-label {
          font-size: 0.75rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .meta-value {
          font-size: 1rem;
          color: #2c2c2c;
          font-weight: 500;
        }

        /* Video Section */
        .video-section {
          margin: 70px 0;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 30px;
          color: #2c2c2c;
          letter-spacing: -0.5px;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Description */
        .description-section {
          margin: 70px 0;
        }

        .description-text {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #555;
          max-width: 800px;
        }

        .description-text p {
          margin-bottom: 25px;
        }

        /* Image Gallery */
        .gallery-section {
          margin: 70px 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-top: 30px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          aspect-ratio: 16/10;
          background: #f5f5f5;
          cursor: pointer;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover {
          transform: scale(1.03);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Skills */
        .skills-section {
          margin: 70px 0;
          padding: 50px;
          background: #fafafa;
          border-radius: 16px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 15px;
          margin-top: 25px;
        }

        .skill-tag {
          background: white;
          padding: 14px 20px;
          border-radius: 30px;
          text-align: center;
          font-weight: 500;
          color: #2c2c2c;
          border: 2px solid #e5e5e5;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .skill-tag:hover {
          border-color: #2c2c2c;
          transform: translateY(-2px);
        }

        /* Footer */
        .portfolio-footer {
          background: #fafafa;
          padding: 80px 40px 60px;
          text-align: center;
          border-top: 1px solid #e5e5e5;
        }

        .footer-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #2c2c2c;
          letter-spacing: -0.5px;
        }

        .footer-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 35px;
        }

        .footer-contact {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c2c2c;
          text-decoration: none;
          font-weight: 500;
          padding: 12px 24px;
          background: white;
          border-radius: 30px;
          border: 2px solid #e5e5e5;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .contact-item:hover {
          border-color: #2c2c2c;
          transform: translateY(-2px);
        }

        .footer-copyright {
          color: #999;
          font-size: 0.85rem;
          padding-top: 30px;
          border-top: 1px solid #e5e5e5;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .portfolio-header {
            padding: 15px 25px;
          }

          .header-nav {
            gap: 20px;
          }

          .main-content {
            padding: 50px 25px 80px;
            margin-top: 80px;
          }

          .project-title {
            font-size: 2.5rem;
          }

          .project-subtitle {
            font-size: 1.2rem;
          }

          .project-meta {
            flex-direction: column;
            gap: 25px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .skills-section {
            padding: 35px 25px;
          }
        }

        @media (max-width: 640px) {
          .project-title {
            font-size: 2rem;
          }

          .header-nav {
            display: none;
          }
        }
      `}</style>

      {/* Header */}
      <header className="portfolio-header">
        <Link href="/" className="header-logo">
          Joohyung Park
        </Link>
        <nav className="header-nav">
          <Link href="/">Blog</Link>
          <Link href="/portfolio" className="active">Portfolio</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Link href="/" className="back-button">
          ← Back to Home
        </Link>

        {/* Project Header */}
        <div className="project-header">
          <div className="project-category">Broadcast Journalism</div>
          <h1 className="project-title">Voice of America Korean Service</h1>
          <p className="project-subtitle">
            Multimedia journalism and broadcasting for VOA Korean Service
          </p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Producer / Editor</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Client</span>
              <span className="meta-value">Voice of America</span>
            </div>
          </div>
        </div>

        {/* Main Video */}
        <section className="video-section">
          <div className="video-wrapper">
            {/* 여기에 YouTube URL을 넣으세요 */}
            <iframe 
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="VOA Korean Service Project">
            </iframe>
          </div>
        </section>

        {/* Description */}
        <section className="description-section">
          <h2 className="section-title">About the Project</h2>
          <div className="description-text">
            <p>
              As a multimedia journalist for Voice of America's Korean Service, I produced 
              and edited content covering major news stories, cultural events, and 
              investigative pieces for Korean-speaking audiences worldwide.
            </p>
            <p>
              This work included field reporting, video production, editing, and 
              broadcasting across multiple platforms including television, radio, 
              and digital media.
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="gallery-section">
          <h2 className="section-title">Project Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/800x500/667eea/ffffff?text=VOA+Project+1" alt="VOA Project 1" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/800x500/764ba2/ffffff?text=VOA+Project+2" alt="VOA Project 2" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/800x500/667eea/ffffff?text=VOA+Project+3" alt="VOA Project 3" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/800x500/764ba2/ffffff?text=VOA+Project+4" alt="VOA Project 4" />
            </div>
          </div>
        </section>

        {/* Skills/Tools */}
        <section className="skills-section">
          <h2 className="section-title">Tools & Skills</h2>
          <div className="skills-grid">
            <div className="skill-tag">Adobe Premiere</div>
            <div className="skill-tag">Final Cut Pro</div>
            <div className="skill-tag">After Effects</div>
            <div className="skill-tag">Video Production</div>
            <div className="skill-tag">Broadcasting</div>
            <div className="skill-tag">Journalism</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-subtitle">Interested in working together?</p>
        
        <div className="footer-contact">
          <a href="mailto:thelp486@gmail.com" className="contact-item">
            📧 Email Me
          </a>
          <a href="https://linkedin.com/in/joohyungpark" className="contact-item" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
        </div>

        <div className="footer-copyright">
          © 2025 Joohyung Park. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
