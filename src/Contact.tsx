import { useState, useEffect } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
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
        <img src="/logo.png" alt="Tribe Gnosis" style={{ height: isMobile ? '40px' : '60px', width: 'auto' }} />
        <div style={{ display: 'flex', gap: isMobile ? '12px' : '32px', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Home</a>
          <a href="/about" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>About</a>
          <a href="/offerings" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Offerings</a>
          <a href="/pricing" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Pricing</a>
          <a href="/contact" style={{ color: '#7BA898', textDecoration: 'none', fontSize: isMobile ? '11px' : '14px', fontWeight: '500', letterSpacing: '1px' }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: isMobile ? '40px 24px 20px' : '80px 60px 40px' }}>
        <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Get In Touch
        </p>
        <h2 style={{ color: '#7BA898', fontSize: isMobile ? '36px' : '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>
          Let's Connect.
        </h2>
        <p style={{ color: '#6B7B6E', fontSize: '18px', lineHeight: '1.8', maxWidth: '560px', margin: '0 auto' }}>
          Whether you have a question, a collaboration idea, or just want to say hello — we'd love to hear from you.
        </p>
      </section>

      {/* FORM + INFO */}
      <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', padding: isMobile ? '24px 24px 60px' : '40px 60px 80px', alignItems: 'flex-start' }}>

        {/* FORM */}
        <div style={{ flex: 2, width: '100%', backgroundColor: '#fff', borderRadius: '24px', padding: isMobile ? '28px' : '48px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', boxSizing: 'border-box' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ fontSize: '48px', marginBottom: '16px' }}>💜</p>
              <h3 style={{ color: '#7BA898', fontSize: '28px', fontWeight: 'bold', margin: '0 0 12px 0' }}>Message Sent!</h3>
              <p style={{ color: '#6B7B6E', fontSize: '16px' }}>Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: '#7BA898', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Name</label>
                <input type="text" placeholder="Your name" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #D4849A', fontSize: '15px', color: '#6B7B6E', backgroundColor: '#FAF6F0', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: '#7BA898', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #D4849A', fontSize: '15px', color: '#6B7B6E', backgroundColor: '#FAF6F0', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', color: '#7BA898', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
                <textarea placeholder="What's on your mind?" rows={6} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #D4849A', fontSize: '15px', color: '#6B7B6E', backgroundColor: '#FAF6F0', boxSizing: 'border-box', outline: 'none', resize: 'vertical' }} />
              </div>
              <button
                onClick={() => setSubmitted(true)}
                style={{ width: '100%', backgroundColor: '#7BA898', color: '#fff', border: 'none', padding: '16px', borderRadius: '50px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px' }}>
                Send It →
              </button>
            </div>
          )}
        </div>

        {/* CONTACT INFO */}
        <div style={{ flex: 1, width: '100%' }}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Email</p>
            <p style={{ color: '#6B7B6E', fontSize: '16px', margin: 0 }}>hello@tribegnosis.org</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>Social</p>
            <p style={{ color: '#6B7B6E', fontSize: '16px', margin: '0 0 8px 0' }}>@tribegnosis</p>
            <p style={{ color: '#6B7B6E', fontSize: '16px', margin: '0 0 8px 0' }}>Instagram · TikTok · YouTube</p>
            <a href="https://www.linkedin.com/in/cherina-montenique-178630109" target="_blank" rel="noreferrer" style={{ color: '#7BA898', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>LinkedIn →</a>
          </div>
          <div>
            <p style={{ color: '#D4849A', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>A Note</p>
            <p style={{ color: '#6B7B6E', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
              You don't have to figure out wellness alone. That's what the Tribe is for. 💜
            </p>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#7BA898', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FAF6F0', fontSize: '13px', margin: 0 }}>© 2026 Tribe Gnosis · Cherina Montenique Scott · All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default Contact