import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">SEAL CHALLENGE PARK</div>
          <nav className="nav-desktop">
            <a href="#activities">Activities</a>
            <a href="#programs">Programs</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="header-actions">
            <a href="tel:555-SEAL-FIT" className="phone-link">555-SEAL-FIT</a>
            <button className="btn-primary">Book Now</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-label">Navy SEAL Foundation Partner</span>
          <h1 className="hero-title">
            <span>Train Like A</span><br/>
            <span className="highlight">SEAL</span>
          </h1>
          <p className="hero-description">
            Conquer our Navy SEAL-inspired obstacle course suspended over water. 
            Perfect for families, fitness enthusiasts, and team events.
          </p>
          <button className="btn-hero">Reserve Your Spot →</button>
          <p className="hero-note">45-min sessions from $35 • Book online for best rates</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <p className="stat-value">60 min sessions</p>
            <p className="stat-label">Including safety briefing</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <p className="stat-value">From $35</p>
            <p className="stat-label">Book online for best rates</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <p className="stat-value">Ages 8+</p>
            <p className="stat-label">All fitness levels welcome</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <p className="stat-value">Year-round</p>
            <p className="stat-label">Climate-controlled facility</p>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-heading">What is SEAL Challenge Park?</h2>
          <p className="intro-text">
            SEAL Challenge Park is an indoor water adventure facility featuring authentic Navy SEAL training obstacles 
            suspended over a climate-controlled pool. Open year-round, the park features three difficulty levels 
            with obstacles including cargo nets, rope swings, balance beams, climbing walls, and The Gauntlet timed challenge. 
            The facility serves families with children ages 8 and up, birthday party groups, corporate team-building events, 
            and runs SEAL Bootcamp training programs. Sessions start at $35 for 60 minutes with veteran SEAL instructors 
            on duty and all equipment provided. 10% of all revenue supports the Navy SEAL Foundation.
          </p>
        </div>
      </section>

      {/* Activities - Card Grid */}
      <section id="activities" className="activities-section">
        <div className="container">
          <span className="section-label">Our Obstacles</span>
          <h2 className="section-heading">What Can You Do?</h2>
          <p className="section-intro">
            Authentic SEAL training obstacles adapted for all skill levels. Three difficulty levels 
            from beginner to elite.
          </p>

          <div className="activity-grid">
            <div className="activity-card">
              <div className="activity-image">
                <div className="placeholder-image">Cargo Net Traverse</div>
              </div>
              <div className="activity-content">
                <div className="activity-header">
                  <h3>Cargo Net Traverse</h3>
                  <div className="activity-arrow">→</div>
                </div>
                <p>Horizontal net crossing suspended over water. Upper body endurance challenge.</p>
                <div className="activity-meta">
                  <span>⏱️ Level 2-3</span>
                  <span>👥 Ages 10+</span>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-image">
                <div className="placeholder-image">Rope Swings</div>
              </div>
              <div className="activity-content">
                <div className="activity-header">
                  <h3>Rope Swing Stations</h3>
                  <div className="activity-arrow">→</div>
                </div>
                <p>Tarzan-style transitions. Grip strength and timing required.</p>
                <div className="activity-meta">
                  <span>⏱️ Level 1-2</span>
                  <span>👥 Ages 8+</span>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-image">
                <div className="placeholder-image">Balance Beams</div>
              </div>
              <div className="activity-content">
                <div className="activity-header">
                  <h3>Balance Beams</h3>
                  <div className="activity-arrow">→</div>
                </div>
                <p>Narrow crossings 10 feet above water. Focus and control.</p>
                <div className="activity-meta">
                  <span>⏱️ Level 2</span>
                  <span>👥 Ages 8+</span>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-image">
                <div className="placeholder-image">Climbing Wall</div>
              </div>
              <div className="activity-content">
                <div className="activity-header">
                  <h3>Climbing Wall</h3>
                  <div className="activity-arrow">→</div>
                </div>
                <p>Scale the wall, reach the platform, commit to the jump.</p>
                <div className="activity-meta">
                  <span>⏱️ Level 2-3</span>
                  <span>👥 Ages 10+</span>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-image">
                <div className="placeholder-image">Monkey Bars</div>
              </div>
              <div className="activity-content">
                <div className="activity-header">
                  <h3>Monkey Bars</h3>
                  <div className="activity-arrow">→</div>
                </div>
                <p>Overhead traverse. Miss a grip and you're swimming.</p>
                <div className="activity-meta">
                  <span>⏱️ Level 1-2</span>
                  <span>👥 Ages 8+</span>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-image">
                <div className="placeholder-image">The Gauntlet</div>
              </div>
              <div className="activity-content">
                <div className="activity-header">
                  <h3>The Gauntlet</h3>
                  <div className="activity-arrow">→</div>
                </div>
                <p>Full course timed challenge. Leaderboard rankings and prizes.</p>
                <div className="activity-meta">
                  <span>⏱️ Level 3</span>
                  <span>👥 All ages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="programs-section">
        <div className="container">
          <span className="section-label">For Everyone</span>
          <h2 className="section-heading">Programs & Events</h2>
          
          <div className="program-grid">
            <div className="program-card">
              <h3>🏊 Open Sessions</h3>
              <p>60-minute guided sessions. All skill levels. Just show up and train.</p>
              <div className="program-price">$35 per person</div>
            </div>

            <div className="program-card">
              <h3>💪 SEAL Bootcamp</h3>
              <p>8-week training program led by veteran SEAL instructors.</p>
              <div className="program-price">$399 for 8 weeks</div>
            </div>

            <div className="program-card">
              <h3>👶 Kids Challenge</h3>
              <p>Ages 8-14. Lower obstacles, skill progression, achievement system.</p>
              <div className="program-price">Birthday parties available</div>
            </div>

            <div className="program-card">
              <h3>🏢 Corporate Events</h3>
              <p>Private facility access. Team building challenges. Custom programming.</p>
              <div className="program-price">From $1,500</div>
            </div>

            <div className="program-card">
              <h3>☀️ Summer Camps</h3>
              <p>Week-long programs. Full facility access. Leadership development.</p>
              <div className="program-price">$499 per week</div>
            </div>

            <div className="program-card">
              <h3>🏆 Competitions</h3>
              <p>Monthly Gauntlet challenges. Leaderboard rankings. Cash prizes.</p>
              <div className="program-price">$50 entry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-heading">Memberships</h2>
          <p className="section-intro">Unlimited access. Train as much as you want.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Individual</h3>
              <div className="price-display">
                <span className="price">$99</span>
                <span className="period">/month</span>
              </div>
              <ul className="feature-list">
                <li>Unlimited sessions</li>
                <li>Bootcamp access</li>
                <li>Competition entry</li>
                <li>10% retail discount</li>
                <li>2 guest passes/month</li>
              </ul>
              <button className="btn-join">Join Now</button>
            </div>

            <div className="pricing-card featured">
              <div className="badge">BEST VALUE</div>
              <h3>Family</h3>
              <div className="price-display">
                <span className="price">$199</span>
                <span className="period">/month</span>
              </div>
              <ul className="feature-list">
                <li>Up to 4 family members</li>
                <li>Unlimited sessions</li>
                <li>Kids program access</li>
                <li>Priority camp registration</li>
                <li>15% retail discount</li>
              </ul>
              <button className="btn-join">Join Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="foundation-section">
        <div className="container">
          <h2 className="section-heading">Supporting Our Heroes</h2>
          <p className="foundation-intro">
            SEAL Challenge Park is proudly partnered with the <strong>Navy SEAL Foundation</strong>. 
            10% of all revenue directly supports Navy SEALs, veterans, and their families.
          </p>
          <div className="foundation-features">
            <div className="foundation-item">
              <div className="foundation-icon">🎖️</div>
              <div>
                <h4>Gold Star Family Scholarships</h4>
                <p>Free memberships for families of fallen SEALs</p>
              </div>
            </div>
            <div className="foundation-item">
              <div className="foundation-icon">💼</div>
              <div>
                <h4>Veteran Employment</h4>
                <p>All instructors are Navy SEAL veterans</p>
              </div>
            </div>
            <div className="foundation-item">
              <div className="foundation-icon">🧠</div>
              <div>
                <h4>Mental Health Support</h4>
                <p>Funding for SEAL community wellness programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container-narrow">
          <h2>Ready For The Challenge?</h2>
          <p>Book your first session or start your membership today.</p>
          <div className="cta-buttons">
            <button className="btn-cta-primary">Book A Session</button>
            <button className="btn-cta-secondary">Start Membership</button>
          </div>
          <div className="contact-info">
            <p>📍 [Your City], [State]</p>
            <p>📞 <a href="tel:555-SEAL-FIT">555-SEAL-FIT</a></p>
            <p>✉️ <a href="mailto:info@sealchallengepark.com">info@sealchallengepark.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h4>SEAL Challenge Park</h4>
              <p>Presented by the Navy SEAL Foundation</p>
            </div>
            <div>
              <a href="#">Instagram</a> • <a href="#">Facebook</a> • <a href="#">YouTube</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 SEAL Challenge Park. All rights reserved.</p>
            <p className="disclaimer">Not affiliated with the U.S. Navy or Department of Defense. Proudly partnered with the Navy SEAL Foundation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
