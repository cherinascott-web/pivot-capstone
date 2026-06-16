import { useState, useEffect } from 'react'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', fontFamily: 'Georgia, serif', margin: 0, padding: 0 }}>

      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: isMobile ? '16px 20px' : '20px 60px', backgroundColor: '#FAF6F0', flexWrap: 'wrap', gap: '8px' }}>
        <h1 style={{ color: '#B8D4C8', fontSize: isMobile ? '16px' : '22px', letterSpacing: '4px', margin: 0, fontWeight: 'bold' }}>
          TRIBE GNOSIS
        </h1>
        <div style={{ display: 'flex', gap: isMobile ? '12px' : '32px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Home</a>
          <a href="/about" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>About</a>
          <a href="/offerings" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Offerings</a>
          <a href="/pricing" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Pricing</a>
          <a href="/contact" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '40px 24px' : '60px 60px', gap: '40px' }}>
        <div style={{ maxWidth: isMobile ? '100%' : '520px' }}>
          <p style={{ color: '#F2C4CE', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Move. Nourish. Glow.
          </p>
          <h2 style={{ color: '#B8D4C8', fontSize: isMobile ? '36px' : '52px', fontWeight: 'bold', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            Beauty Meets Simplicity.
          </h2>
          <p style={{ color: '#6B7B6E', fontSize: '18px', lineHeight: '1.7', marginBottom: '16px' }}>
            Home workouts, kitchen beauty, nourishing nutrition, and crystal healing — everything you need to feel good in your body, all in one place.
          </p>
          <p style={{ color: '#7A6B8A', fontSize: '15px', fontStyle: 'italic', marginBottom: '36px' }}>
            Built by a woman who has lived it. For women who are ready to start.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/pricing" style={{ backgroundColor: '#B8D4C8', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
              Join the Tribe
            </a>
            <a href="/offerings" style={{ backgroundColor: 'transparent', color: '#B8D4C8', border: '2px solid #B8D4C8', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
              Explore Offerings
            </a>
          </div>
        </div>
        <div style={{ width: isMobile ? '100%' : '420px', height: isMobile ? '320px' : '520px', borderRadius: '24px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
          <img src="/cherina.jpg" alt="Cherina Montenique" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* TRUST SIGNAL */}
      <section style={{ backgroundColor: '#F2C4CE', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600', margin: 0 }}>
          10,000+ women moving, glowing, and growing — join us.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ padding: isMobile ? '40px 24px' : '80px 60px' }}>
        <h3 style={{ color: '#B8D4C8', fontSize: isMobile ? '24px' : '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' }}>
          Everything You Need. Nothing You Don't.
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
          {[
            { title: 'Move', desc: 'Pilates, barre, yoga, and functional fitness from your living room.', cta: 'Start Moving →' },
            { title: 'Glow', desc: 'Kitchen beauty — lip scrubs, face masks, and hair treatments from ingredients you already have.', cta: 'Get the Recipes →' },
            { title: 'Nourish', desc: 'Real-world nutrition guidance built around your actual life.', cta: 'Explore Nutrition →' },
            { title: 'Align', desc: 'Crystal healing for energy, clarity, and everyday wellness.', cta: 'Explore Crystals →' },
          ].map((item) => (
            <div key={item.title} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: '4px solid #B8D4C8' }}>
              <h4 style={{ color: '#B8D4C8', fontSize: '20px', fontWeight: 'bold', margin: '0 0 12px 0' }}>{item.title}</h4>
              <p style={{ color: '#6B7B6E', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{item.desc}</p>
              <a href="#" style={{ color: '#F2C4CE', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>{item.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* APPAREL */}
      <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '40px 24px' : '80px 60px', gap: '60px', backgroundColor: '#fff' }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: '#F2C4CE', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Coming Soon
          </p>
          <h3 style={{ color: '#B8D4C8', fontSize: isMobile ? '32px' : '42px', fontWeight: 'bold', lineHeight: '1.1', margin: '0 0 20px 0' }}>
            Dress the Part.
          </h3>
          <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>
            Move-to-night athleisure that goes from your morning yoga mat to your evening plans without missing a beat. Comfortable, affordable, and effortlessly chic.
          </p>
          <button style={{ backgroundColor: 'transparent', color: '#B8D4C8', border: '2px solid #B8D4C8', padding: '14px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px' }}>
            Join the Waitlist
          </button>
        </div>
        <div style={{ flex: 1, width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
          <img src="/IMG_6391.jpg" alt="Tribe Gnosis Apparel" style={{ width: '100%', height: isMobile ? '300px' : '600px', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#B8D4C8', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FAF6F0', fontSize: '13px', margin: 0 }}>© 2026 Tribe Gnosis · Cherina Montenique Scott · All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default App