import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Offerings', href: '/offerings' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

function Offerings() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPath = window.location.pathname

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href)

  const linkStyle = (href: string) => ({
    color: isActive(href) ? '#D4849A' : '#7BA898',
    textDecoration: 'none',
    fontSize: isMobile ? '13px' : '14px',
    fontWeight: isActive(href) ? 700 : 500,
    letterSpacing: '1px',
    borderBottom: isActive(href) ? '2px solid #D4849A' : '2px solid transparent',
    paddingBottom: '4px',
  } as const)

  const containerStyle = { maxWidth: '1200px', margin: '0 auto', width: '100%' }

  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* NAVBAR */}
      <nav style={{ backgroundColor: '#FAF6F0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: isMobile ? '16px 20px' : '20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: '#7BA898', fontSize: isMobile ? '16px' : '22px', letterSpacing: '4px', margin: 0, fontWeight: 'bold' }}>
            TRIBE GNOSIS
          </h1>

          {isMobile ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px' }}
            >
              <span style={{ width: '24px', height: '2px', backgroundColor: '#7BA898' }} />
              <span style={{ width: '24px', height: '2px', backgroundColor: '#7BA898' }} />
              <span style={{ width: '24px', height: '2px', backgroundColor: '#7BA898' }} />
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '32px' }}>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} style={linkStyle(link.href)}>{link.label}</a>
              ))}
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 20px 20px' }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} style={linkStyle(link.href)} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: isMobile ? '40px 24px 20px' : '80px 60px 40px' }}>
        <div style={containerStyle}>
          <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
            What We Offer
          </p>
          <h2 style={{ color: '#7BA898', fontSize: isMobile ? '32px' : '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>
            Everything You Need. Nothing You Don't.
          </h2>
          <p style={{ color: '#6B7B6E', fontSize: '18px', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
            Four pillars. One tribe. Your whole wellness life, covered.
          </p>
        </div>
      </section>

      {/* MOVE */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px', backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Pillar 01</p>
              <h3 style={{ color: '#7BA898', fontSize: isMobile ? '32px' : '40px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Move</h3>
              <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                Pilates, barre, yoga, and functional fitness you can do from your living room. Designed for women who want to feel strong, flexible, and energized — without the gym membership.
              </p>
              <a href="#" style={{ backgroundColor: '#7BA898', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                Start Moving →
              </a>
            </div>
            <div style={{ flex: 1, width: '100%', height: isMobile ? '280px' : '420px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
              <img src="/yoga.jpg" alt="Yoga and meditation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* GLOW */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px', backgroundColor: '#FAF6F0' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row-reverse', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Pillar 02</p>
              <h3 style={{ color: '#7BA898', fontSize: isMobile ? '32px' : '40px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Glow</h3>
              <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                Lip scrubs, face masks, and hair treatments made from ingredients already in your kitchen. Clean, simple, effective beauty the way nature intended.
              </p>
              <a href="#" style={{ backgroundColor: '#7BA898', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                Get the Recipes →
              </a>
            </div>
            <div style={{ flex: 1, width: '100%', height: isMobile ? '280px' : '420px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
              <img src="/glow.jpg" alt="Kitchen beauty skincare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* NOURISH */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px', backgroundColor: '#fff' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Pillar 03</p>
              <h3 style={{ color: '#7BA898', fontSize: isMobile ? '32px' : '40px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Nourish</h3>
              <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                Practical, real-world nutrition guidance built around your actual life — not a runway. Meal plans, ingredient swaps, and anti-inflammatory eating made approachable.
              </p>
              <a href="#" style={{ backgroundColor: '#7BA898', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                Explore Nutrition →
              </a>
            </div>
            <div style={{ flex: 1, width: '100%', height: isMobile ? '280px' : '420px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
              <img src="/nourish.jpg" alt="Fresh produce and nutrition" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ALIGN */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px', backgroundColor: '#FAF6F0' }}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row-reverse', alignItems: 'center', gap: '60px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Pillar 04</p>
              <h3 style={{ color: '#7BA898', fontSize: isMobile ? '32px' : '40px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Align</h3>
              <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', marginBottom: '32px' }}>
                Crystal healing isn't mystical — it's intentional. Learn how to use crystals for energy, clarity, stress relief, and everyday wellness. Guided by a certified Crystal Reiki practitioner.
              </p>
              <a href="#" style={{ backgroundColor: '#7BA898', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                Explore Crystals →
              </a>
            </div>
            <div style={{ flex: 1, width: '100%', height: isMobile ? '280px' : '420px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
              <img src="/crystals.jpg" alt="Crystal healing collection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#D4849A', padding: isMobile ? '40px 24px' : '60px', textAlign: 'center' }}>
        <div style={containerStyle}>
          <h3 style={{ color: '#fff', fontSize: isMobile ? '24px' : '32px', fontWeight: 'bold', margin: '0 0 16px 0' }}>Ready to Join the Tribe?</h3>
          <p style={{ color: '#fff', fontSize: '17px', marginBottom: '32px' }}>Start free. Grow at your own pace.</p>
          <a href="/pricing" style={{ backgroundColor: '#fff', color: '#7BA898', padding: '14px 36px', borderRadius: '50px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>
            See Pricing →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#7BA898', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FAF6F0', fontSize: '13px', margin: 0 }}>© 2026 Tribe Gnosis · Cherina Montenique Scott · All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default Offerings