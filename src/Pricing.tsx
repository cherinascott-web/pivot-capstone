import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Offerings', href: '/offerings' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

function Pricing() {
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
            Find Your Level
          </p>
          <h2 style={{ color: '#7BA898', fontSize: isMobile ? '32px' : '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>
            Start Free. Grow at Your Own Pace.
          </h2>
          <p style={{ color: '#6B7B6E', fontSize: '18px', lineHeight: '1.8', maxWidth: '560px', margin: '0 auto' }}>
            We'll be here at every step.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section style={{ padding: isMobile ? '24px 24px 60px' : '40px 60px 80px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>

            {/* FREE */}
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: '4px solid #7BA898' }}>
              <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Tribe Curious</p>
              <h3 style={{ color: '#7BA898', fontSize: '42px', fontWeight: 'bold', margin: '0 0 4px 0' }}>$0</h3>
              <p style={{ color: '#6B7B6E', fontSize: '14px', marginBottom: '24px' }}>Always free</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {[
                  'Weekly home workout video',
                  '1 seasonal recipe per month',
                  'Crystal of the month blog post',
                  'Access to Tribe community feed',
                ].map(item => (
                  <li key={item} style={{ color: '#6B7B6E', fontSize: '14px', lineHeight: '1.8', paddingBottom: '8px', borderBottom: '1px solid #FAF6F0', marginBottom: '8px' }}>
                    ✓ {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: 'transparent', color: '#7BA898', border: '2px solid #7BA898', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                Join Free →
              </a>
            </div>

            {/* MEMBER - FEATURED */}
            <div style={{ backgroundColor: '#7BA898', borderRadius: '24px', padding: '40px', boxShadow: '0 12px 40px rgba(123,168,152,0.4)', transform: isMobile ? 'none' : 'scale(1.04)' }}>
              <p style={{ color: '#fff', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>⭐ Most Popular</p>
              <p style={{ color: '#fff', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Tribe Member</p>
              <h3 style={{ color: '#fff', fontSize: '42px', fontWeight: 'bold', margin: '0 0 4px 0' }}>$19</h3>
              <p style={{ color: '#FAF6F0', fontSize: '14px', marginBottom: '24px' }}>per month</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {[
                  'Full workout library',
                  'Monthly meal plan + nutrition guides',
                  'Complete kitchen beauty recipes',
                  'Full crystal healing guide',
                  'Private Tribe community access',
                ].map(item => (
                  <li key={item} style={{ color: '#FAF6F0', fontSize: '14px', lineHeight: '1.8', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.2)', marginBottom: '8px' }}>
                    ✓ {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#fff', color: '#7BA898', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>
                Get Started →
              </a>
            </div>

            {/* VIP */}
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: '4px solid #D4849A' }}>
              <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Tribe VIP</p>
              <h3 style={{ color: '#7BA898', fontSize: '42px', fontWeight: 'bold', margin: '0 0 4px 0' }}>$49</h3>
              <p style={{ color: '#6B7B6E', fontSize: '14px', marginBottom: '24px' }}>per month</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {[
                  'Everything in Tribe Member',
                  'Monthly 1:1 coaching call',
                  'Personalized workout + nutrition plan',
                  'Exclusive Crystal Reiki resource pack',
                  'Early access to apparel drops',
                ].map(item => (
                  <li key={item} style={{ color: '#6B7B6E', fontSize: '14px', lineHeight: '1.8', paddingBottom: '8px', borderBottom: '1px solid #FAF6F0', marginBottom: '8px' }}>
                    ✓ {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#D4849A', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                Go VIP →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST SIGNAL */}
      <section style={{ backgroundColor: '#D4849A', padding: '40px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' }}>
          No contracts. No commitments. Cancel anytime.
        </p>
        <p style={{ color: '#fff', fontSize: '15px', margin: 0 }}>
          10,000+ women already in the Tribe. 💜
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#7BA898', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FAF6F0', fontSize: '13px', margin: 0 }}>© 2026 Tribe Gnosis · Cherina Montenique Scott · All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default Pricing