import { useState, useEffect } from 'react'

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: isMobile ? '16px 20px' : '20px 60px', backgroundColor: '#FAF6F0', flexWrap: 'wrap', gap: '8px' }}>
        <h1 style={{ color: '#7BA898', fontSize: isMobile ? '16px' : '22px', letterSpacing: '4px', margin: 0, fontWeight: 'bold' }}>
          TRIBE GNOSIS
        </h1>
        <div style={{ display: 'flex', gap: isMobile ? '12px' : '32px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Home</a>
          <a href="/about" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>About</a>
          <a href="/offerings" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Offerings</a>
          <a href="/pricing" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Pricing</a>
          <a href="/contact" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '40px 24px' : '60px 60px', gap: '40px' }}>
        <div style={{ width: isMobile ? '100%' : '420px', height: isMobile ? '320px' : '540px', borderRadius: '24px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
          <img src="/mirror.jpg" alt="Cherina Montenique" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div style={{ maxWidth: isMobile ? '100%' : '520px' }}>
          <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
            The Story
          </p>
          <h2 style={{ color: '#7BA898', fontSize: isMobile ? '36px' : '48px', fontWeight: 'bold', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            Beauty Takes Time.
          </h2>
          <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
            My mother used to say, "Beauty takes time." I was a tomboy who never wanted to sit still for Sunday curlers. I didn't understand it then.
          </p>
          <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
            After a decade of professional modeling, Muay Thai training, triathlon prep, and more workout styles than I can count — and after sitting beside my mother as she navigated kidney disease with more grace than I thought possible — I finally do.
          </p>
          <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8' }}>
            Beauty takes time. So does strength. So does healing. Tribe Gnosis exists because my mother taught me that, and I'm not keeping that lesson to myself.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ backgroundColor: '#fff', padding: isMobile ? '40px 24px' : '60px', textAlign: 'center' }}>
        <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Cherina Montenique Scott
        </p>
        <h3 style={{ color: '#7BA898', fontSize: isMobile ? '20px' : '32px', fontWeight: 'bold', margin: '0 0 24px 0' }}>
          Professional Model · Certified Yoga Instructor · Crystal Reiki Practitioner
        </h3>
        <p style={{ color: '#6B7B6E', fontSize: '17px', lineHeight: '1.8', maxWidth: '680px', margin: '0 auto 40px' }}>
          What started as career necessity became a genuine calling. I've worked with nutritionists, trained at elite levels, and spent years learning what it actually takes to feel good in your body — not just look good for the camera.
        </p>
      </section>

      {/* MISSION */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px', backgroundColor: '#FAF6F0', textAlign: 'center' }}>
        <h3 style={{ color: '#7BA898', fontSize: '28px', fontWeight: 'bold', margin: '0 0 20px 0' }}>Our Mission</h3>
        <p style={{ color: '#6B7B6E', fontSize: '18px', lineHeight: '1.9', maxWidth: '700px', margin: '0 auto 48px' }}>
          Tribe Gnosis exists to make holistic wellness accessible, affordable, and real. No perfection required. No expensive equipment. No gatekeeping. Just movement, nourishment, beauty, and intention — simplified for the woman who is ready to invest in herself.
        </p>
        <a href="/pricing" style={{ backgroundColor: '#7BA898', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
          Join the Tribe
        </a>
      </section>

      {/* DEDICATION */}
      <section style={{ backgroundColor: '#D4849A', padding: '40px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '18px', fontStyle: 'italic', margin: 0 }}>
          💜 This brand is dedicated to my mother. Her strength, her wisdom, and her words live in everything I build.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#7BA898', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FAF6F0', fontSize: '13px', margin: 0 }}>© 2026 Tribe Gnosis · Cherina Montenique Scott · All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default About