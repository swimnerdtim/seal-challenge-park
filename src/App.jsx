import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Simple Top Bar */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="logo">SEAL CHALLENGE PARK</div>
          <div className="nav-right">
            <a href="tel:555-SEAL-FIT" className="phone">555-SEAL-FIT</a>
            <button className="book-button">BOOK NOW</button>
          </div>
        </div>
      </nav>

      {/* Big Hero Image Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>TRAIN LIKE A SEAL</h1>
          <p className="hero-subtitle">Navy SEAL-Inspired Obstacle Course Over Water</p>
          <button className="hero-cta">GET STARTED</button>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">40+</div>
          <div className="stat-label">Obstacles</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Difficulty Levels</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">All Ages</div>
          <div className="stat-label">Welcome</div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="intro-section">
        <div className="content-width">
          <h2>THE ULTIMATE CHALLENGE</h2>
          <p className="big-text">
            SEAL Challenge Park brings authentic Navy SEAL training obstacles to everyone. 
            Suspended over a climate-controlled pool, our course features cargo nets, rope swings, 
            balance beams, climbing walls, and more. Fall? You land in water. Safe, fun, and seriously challenging.
          </p>
          <p className="big-text">
            Every visit supports the <strong>Navy SEAL Foundation</strong> and employs veteran instructors.
          </p>
        </div>
      </section>

      {/* Big Photo Grid Section (like Charleston) */}
      <section className="photo-grid-section">
        <div className="grid-2col">
          <div className="photo-card">
            <div className="photo-placeholder">🪢</div>
            <h3>Cargo Net Traverse</h3>
            <p>Suspended horizontal net. Upper body endurance test.</p>
          </div>
          <div className="photo-card">
            <div className="photo-placeholder">🏃</div>
            <h3>Rope Swing Stations</h3>
            <p>Tarzan-style transitions. Grip and timing required.</p>
          </div>
        </div>

        <div className="grid-2col">
          <div className="photo-card">
            <div className="photo-placeholder">⚖️</div>
            <h3>Balance Beams</h3>
            <p>10 feet above water. Focus and control.</p>
          </div>
          <div className="photo-card">
            <div className="photo-placeholder">🧗</div>
            <h3>Climbing Wall</h3>
            <p>Scale the wall, commit to the jump.</p>
          </div>
        </div>

        <div className="grid-2col">
          <div className="photo-card">
            <div className="photo-placeholder">🐵</div>
            <h3>Monkey Bars</h3>
            <p>Miss a grip? You're swimming.</p>
          </div>
          <div className="photo-card">
            <div className="photo-placeholder">⚡</div>
            <h3>The Gauntlet</h3>
            <p>Full course timed run. Leaderboard glory.</p>
          </div>
        </div>
      </section>

      {/* Programs Section - Simple Cards */}
      <section className="programs-section">
        <div className="content-width">
          <h2>PROGRAMS FOR EVERYONE</h2>
          
          <div className="program-cards">
            <div className="program-card">
              <h3>🏊 OPEN SESSIONS</h3>
              <p>60-minute sessions. All skill levels. Just show up and challenge yourself.</p>
              <div className="price-tag">$35 per person</div>
            </div>

            <div className="program-card">
              <h3>💪 SEAL BOOTCAMP</h3>
              <p>8-week training program with veteran SEAL instructors. Get serious.</p>
              <div className="price-tag">$399 for 8 weeks</div>
            </div>

            <div className="program-card">
              <h3>👶 KIDS PROGRAM</h3>
              <p>Ages 8-14. Lower obstacles, skill progression, achievement badges.</p>
              <div className="price-tag">Birthday parties available</div>
            </div>

            <div className="program-card">
              <h3>🏢 CORPORATE EVENTS</h3>
              <p>Private facility access. Team building challenges. Custom programming.</p>
              <div className="price-tag">From $1,500</div>
            </div>

            <div className="program-card">
              <h3>☀️ SUMMER CAMPS</h3>
              <p>Week-long day camps. Full facility access. Leadership development.</p>
              <div className="price-tag">$499 per week</div>
            </div>

            <div className="program-card">
              <h3>🏆 COMPETITIONS</h3>
              <p>Monthly timed Gauntlet runs. Leaderboard rankings. Cash prizes.</p>
              <div className="price-tag">$50 entry fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships - Big Simple Section */}
      <section className="membership-section">
        <div className="content-width">
          <h2>MEMBERSHIPS</h2>
          <p className="section-intro">Unlimited access. Train as much as you want.</p>

          <div className="membership-cards">
            <div className="membership-card">
              <h3>Individual</h3>
              <div className="membership-price">
                <span className="price">$99</span>
                <span className="period">/month</span>
              </div>
              <ul>
                <li>Unlimited sessions</li>
                <li>Bootcamp access</li>
                <li>Competition league entry</li>
                <li>10% retail discount</li>
                <li>2 guest passes/month</li>
              </ul>
              <button className="join-button">JOIN NOW</button>
            </div>

            <div className="membership-card featured">
              <div className="best-value">BEST VALUE</div>
              <h3>Family</h3>
              <div className="membership-price">
                <span className="price">$199</span>
                <span className="period">/month</span>
              </div>
              <ul>
                <li>Up to 4 family members</li>
                <li>Unlimited sessions</li>
                <li>Kids program access</li>
                <li>Priority camp registration</li>
                <li>15% retail discount</li>
              </ul>
              <button className="join-button">JOIN NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* Navy SEAL Foundation Section */}
      <section className="foundation-section">
        <div className="content-width">
          <h2>SUPPORTING OUR HEROES</h2>
          <p className="big-text">
            SEAL Challenge Park is proudly partnered with the <strong>Navy SEAL Foundation</strong>. 
            10% of all revenue directly supports Navy SEALs, veterans, and their families.
          </p>
          <div className="foundation-bullets">
            <div className="bullet-item">
              <div className="bullet-icon">🎖️</div>
              <div>
                <h4>Gold Star Family Scholarships</h4>
                <p>Free memberships for families of fallen SEALs</p>
              </div>
            </div>
            <div className="bullet-item">
              <div className="bullet-icon">💼</div>
              <div>
                <h4>Veteran Employment</h4>
                <p>All instructors are Navy SEAL veterans</p>
              </div>
            </div>
            <div className="bullet-item">
              <div className="bullet-icon">🧠</div>
              <div>
                <h4>Mental Health Support</h4>
                <p>Funding for SEAL community wellness programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact/Book Section */}
      <section className="book-section">
        <div className="content-width center">
          <h2>READY FOR THE CHALLENGE?</h2>
          <p className="big-text">Book your first session or start your membership today.</p>
          <div className="cta-buttons">
            <button className="cta-primary">BOOK A SESSION</button>
            <button className="cta-secondary">START MEMBERSHIP</button>
          </div>
          <div className="contact-info">
            <p>📍 [Your City], [State]</p>
            <p>📞 <a href="tel:555-SEAL-FIT">555-SEAL-FIT</a></p>
            <p>✉️ <a href="mailto:info@sealchallengepark.com">info@sealchallengepark.com</a></p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="footer">
        <div className="content-width">
          <div className="footer-content">
            <div>
              <h4>SEAL Challenge Park</h4>
              <p>Presented by the Navy SEAL Foundation</p>
            </div>
            <div>
              <p><a href="#">Instagram</a> • <a href="#">Facebook</a> • <a href="#">YouTube</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 SEAL Challenge Park. All rights reserved.</p>
            <p className="disclaimer">Not affiliated with the U.S. Navy or Department of Defense. Proudly partnered with the Navy SEAL Foundation, a 501(c)(3) nonprofit.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
