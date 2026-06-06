import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (section) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">SEAL CHALLENGE PARK</span>
            <span className="logo-subtitle">Presented by the Navy SEAL Foundation</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('course')}>The Course</button>
            <button onClick={() => scrollToSection('programs')}>Programs</button>
            <button onClick={() => scrollToSection('pricing')}>Pricing</button>
            <button onClick={() => scrollToSection('foundation')}>Foundation</button>
            <button className="cta-nav" onClick={() => scrollToSection('booking')}>Book Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">TRAIN LIKE A SEAL</h1>
          <p className="hero-subtitle">America's First Navy SEAL Foundation-Endorsed Civilian Obstacle Course</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">25,000</span>
              <span className="stat-label">sq ft facility</span>
            </div>
            <div className="stat">
              <span className="stat-number">40+</span>
              <span className="stat-label">obstacles</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">authentic</span>
            </div>
          </div>
          <button className="cta-button" onClick={() => scrollToSection('booking')}>
            START YOUR CHALLENGE
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>THE MISSION</h2>
          <p className="mission-text">
            SEAL Challenge Park brings authentic Navy SEAL training obstacles to civilians. 
            Our climate-controlled facility features a regulation-size pool with suspended 
            obstacle courses inspired by BUD/S training. Every session supports the Navy SEAL 
            Foundation and employs veteran instructors.
          </p>
          <div className="mission-pillars">
            <div className="pillar">
              <div className="pillar-icon">💪</div>
              <h3>Physical Excellence</h3>
              <p>Train like the world's most elite warriors</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🧠</div>
              <h3>Mental Toughness</h3>
              <p>Build confidence through challenge</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🇺🇸</div>
              <h3>Service</h3>
              <p>Support veterans and Gold Star families</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Course Section */}
      <section id="course" className="course">
        <div className="container">
          <h2>THE COURSE</h2>
          <p className="section-intro">Authentic Navy SEAL obstacles. Safe water landings. Real challenge.</p>
          
          <div className="obstacle-grid">
            <div className="obstacle-card">
              <h3>🪢 Cargo Net Traverse</h3>
              <p>Horizontal net crossing suspended over deep water. Upper body endurance test.</p>
            </div>
            <div className="obstacle-card">
              <h3>🏃 Rope Swing Stations</h3>
              <p>Tarzan-style rope transitions. Grip strength and timing required.</p>
            </div>
            <div className="obstacle-card">
              <h3>🪵 Floating Log Rolls</h3>
              <p>Balance and agility challenge on rotating logs at water level.</p>
            </div>
            <div className="obstacle-card">
              <h3>🐵 Monkey Bars</h3>
              <p>Classic overhead traverse. Miss a grip, you're swimming.</p>
            </div>
            <div className="obstacle-card">
              <h3>⚖️ Balance Beams</h3>
              <p>Narrow beam crossings 10 feet above water. Focus and control.</p>
            </div>
            <div className="obstacle-card">
              <h3>🧗 Climbing Wall</h3>
              <p>Scale the wall, reach the platform, commit to the jump.</p>
            </div>
            <div className="obstacle-card">
              <h3>🪢 Rope Climb</h3>
              <p>15-foot ascent with pool landing. SEAL training staple.</p>
            </div>
            <div className="obstacle-card">
              <h3>⚡ The Gauntlet</h3>
              <p>Full course timed challenge. Leaderboard glory awaits.</p>
            </div>
          </div>

          <div className="course-levels">
            <div className="level">
              <h3>🟢 Level 1: Foundation</h3>
              <p>Introduction to obstacles. Build confidence and technique.</p>
            </div>
            <div className="level">
              <h3>🟡 Level 2: Challenge</h3>
              <p>Intermediate obstacles. Push your limits safely.</p>
            </div>
            <div className="level">
              <h3>🔴 Level 3: Elite</h3>
              <p>Advanced course. SEAL-level difficulty. Earn your place on the leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="container">
          <h2>PROGRAMS</h2>
          
          <div className="program-grid">
            <div className="program-card">
              <div className="program-header">
                <h3>Open Sessions</h3>
                <span className="program-tag">All Ages</span>
              </div>
              <p>60-minute guided sessions. Max 30 participants. All skill levels welcome.</p>
              <ul>
                <li>Safety briefing</li>
                <li>Obstacle coaching</li>
                <li>Lifeguard supervision</li>
                <li>Equipment provided</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <h3>SEAL Bootcamp</h3>
                <span className="program-tag">Adults</span>
              </div>
              <p>Structured 8-week training program led by veteran SEAL instructors.</p>
              <ul>
                <li>2x weekly sessions</li>
                <li>Progressive difficulty</li>
                <li>Strength & conditioning</li>
                <li>Mental toughness training</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <h3>Kids Challenge</h3>
                <span className="program-tag">Ages 8-14</span>
              </div>
              <p>Age-appropriate obstacles. Build confidence, discipline, and fitness.</p>
              <ul>
                <li>Lower obstacle heights</li>
                <li>Skill progression system</li>
                <li>Achievement badges</li>
                <li>Birthday party packages</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <h3>Corporate Challenge</h3>
                <span className="program-tag">Team Building</span>
              </div>
              <p>Private facility access for corporate teams. Custom challenges available.</p>
              <ul>
                <li>2-4 hour sessions</li>
                <li>Team competitions</li>
                <li>Leadership exercises</li>
                <li>Catering options</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <h3>Summer Camps</h3>
                <span className="program-tag">Ages 8-14</span>
              </div>
              <p>Week-long day camps. Full facility access plus land-based training.</p>
              <ul>
                <li>Monday-Friday, 9am-4pm</li>
                <li>Obstacle course + pool time</li>
                <li>Team challenges</li>
                <li>Leadership development</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <h3>Competition League</h3>
                <span className="program-tag">Monthly</span>
              </div>
              <p>Timed Gauntlet runs. Leaderboard rankings. Prizes for top performers.</p>
              <ul>
                <li>Age divisions</li>
                <li>Monthly championships</li>
                <li>Annual grand finals</li>
                <li>Cash prizes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>PRICING</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Drop-In Session</h3>
              <div className="price">
                <span className="price-amount">$35</span>
                <span className="price-period">per person</span>
              </div>
              <ul className="pricing-features">
                <li>60-minute session</li>
                <li>All obstacles access</li>
                <li>Equipment included</li>
                <li>Lifeguard supervision</li>
              </ul>
              <button className="pricing-button">Book Session</button>
            </div>

            <div className="pricing-card featured">
              <div className="featured-badge">MOST POPULAR</div>
              <h3>Individual Membership</h3>
              <div className="price">
                <span className="price-amount">$99</span>
                <span className="price-period">per month</span>
              </div>
              <ul className="pricing-features">
                <li>Unlimited sessions</li>
                <li>Bootcamp access</li>
                <li>Competition league entry</li>
                <li>10% retail discount</li>
                <li>Guest passes (2/month)</li>
              </ul>
              <button className="pricing-button">Join Now</button>
            </div>

            <div className="pricing-card">
              <h3>Family Membership</h3>
              <div className="price">
                <span className="price-amount">$199</span>
                <span className="price-period">per month</span>
              </div>
              <ul className="pricing-features">
                <li>Up to 4 family members</li>
                <li>Unlimited sessions</li>
                <li>Kids program access</li>
                <li>Priority camp registration</li>
                <li>15% retail discount</li>
              </ul>
              <button className="pricing-button">Join Now</button>
            </div>
          </div>

          <div className="special-programs-pricing">
            <h3>Special Programs</h3>
            <div className="special-pricing-list">
              <div className="special-item">
                <span className="special-name">Birthday Party Package</span>
                <span className="special-price">$499</span>
              </div>
              <div className="special-item">
                <span className="special-name">Summer Camp (1 week)</span>
                <span className="special-price">$499</span>
              </div>
              <div className="special-item">
                <span className="special-name">SEAL Bootcamp (8 weeks)</span>
                <span className="special-price">$399</span>
              </div>
              <div className="special-item">
                <span className="special-name">Corporate Team Building</span>
                <span className="special-price">From $1,500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="foundation" className="foundation">
        <div className="container">
          <h2>SUPPORTING THE NAVY SEAL FOUNDATION</h2>
          <div className="foundation-content">
            <div className="foundation-text">
              <p className="foundation-intro">
                SEAL Challenge Park is proud to partner with the Navy SEAL Foundation. 
                10% of all revenue directly supports Navy SEALs, veterans, and their families.
              </p>
              
              <div className="foundation-impact">
                <h3>How Your Participation Helps</h3>
                <ul>
                  <li><strong>Gold Star Family Scholarships</strong> - Free memberships for families of fallen SEALs</li>
                  <li><strong>Veteran Employment</strong> - All instructors are Navy SEAL veterans</li>
                  <li><strong>Mental Health Support</strong> - Funding for SEAL community wellness programs</li>
                  <li><strong>Educational Programs</strong> - Scholarships for SEAL children</li>
                </ul>
              </div>

              <div className="foundation-quote">
                <p className="quote-text">
                  "SEAL Challenge Park represents the warrior ethos in action - physical excellence, 
                  mental toughness, and service to others. We're honored to partner with them."
                </p>
                <p className="quote-author">— Navy SEAL Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking">
        <div className="container">
          <h2>READY FOR THE CHALLENGE?</h2>
          <p className="booking-intro">Book your first session or start your membership today.</p>
          
          <div className="booking-options">
            <div className="booking-card">
              <h3>First-Time Visitor</h3>
              <p>Try a single session. See if you have what it takes.</p>
              <button className="booking-button">Book Drop-In Session</button>
            </div>
            <div className="booking-card">
              <h3>Join the Team</h3>
              <p>Commit to the challenge. Unlimited access starts today.</p>
              <button className="booking-button primary">Start Membership</button>
            </div>
          </div>

          <div className="contact-info">
            <h3>Questions?</h3>
            <p>Email: <a href="mailto:info@sealchallengepark.com">info@sealchallengepark.com</a></p>
            <p>Phone: <a href="tel:555-SEAL-FIT">555-SEAL-FIT</a></p>
            <p>Location: [Your City], [State]</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>SEAL Challenge Park</h4>
              <p>Presented by the Navy SEAL Foundation</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#course">The Course</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#foundation">Foundation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 SEAL Challenge Park. All rights reserved.</p>
            <p className="disclaimer">Not affiliated with the U.S. Navy or Department of Defense. 
            Proudly partnered with the Navy SEAL Foundation, a 501(c)(3) nonprofit organization.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
