function Pricing() {
  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#FAF6F0' }}>
        <h1 style={{ color: '#B8D4C8', fontSize: '22px', letterSpacing: '4px', margin: 0, fontWeight: 'bold' }}>
          TRIBE GNOSIS
        </h1>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href="/" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: '14px', fontWeight: '500', letterSpacing: '1px' }}>Home</a>
          <a href="/about" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: '14px', fontWeight: '500', letterSpacing: '1px' }}>About</a>
          <a href="/offerings" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: '14px', fontWeight: '500', letterSpacing: '1px' }}>Offerings</a>
          <a href="/pricing" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: '14px', fontWeight: '500', letterSpacing: '1px' }}>Pricing</a>
          <a href="/contact" style={{ color: '#B8D4C8', textDecoration: 'none', fontSize: '14px', fontWeight: '500', letterSpacing: '1px' }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '80px 60px 40px' }}>
        <p style={{ color: '#F2C4CE', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
          Find Your Level
        </p>
        <h2 style={{ color: '#B8D4C8', fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0' }}>
          Start Free. Grow at Your Own Pace.
        </h2>
        <p style={{ color: '#C9B8E8', fontSize: '18px', lineHeight: '1.8', maxWidth: '560px', margin: '0 auto' }}>
          We'll be here at every step.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', padding: '40px 60px 80px' }}>

        {/* FREE */}
        <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: '4px solid #B8D4C8' }}>
          <p style={{ color: '#F2C4CE', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Tribe Curious</p>
          <h3 style={{ color: '#B8D4C8', fontSize: '42px', fontWeight: 'bold', margin: '0 0 4px 0' }}>$0</h3>
          <p style={{ color: '#C9B8E8', fontSize: '14px', marginBottom: '24px' }}>Always free</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
            {[
              'Weekly home workout video',
              '1 seasonal recipe per month',
              'Crystal of the month blog post',
              'Access to Tribe community feed',
            ].map(item => (
              <li key={item} style={{ color: '#C9B8E8', fontSize: '14px', lineHeight: '1.8', paddingBottom: '8px', borderBottom: '1px solid #FAF6F0', marginBottom: '8px' }}>
                ✓ {item}
              </li>
            ))}
          </ul>
          <a href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: 'transparent', color: '#B8D4C8', border: '2px solid #B8D4C8', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
            Join Free →
          </a>
        </div>

        {/* MEMBER - FEATURED */}
        <div style={{ backgroundColor: '#B8D4C8', borderRadius: '24px', padding: '40px', boxShadow: '0 12px 40px rgba(184,212,200,0.4)', transform: 'scale(1.04)' }}>
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
          <a href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#fff', color: '#B8D4C8', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>
            Get Started →
          </a>
        </div>

        {/* VIP */}
        <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: '4px solid #F2C4CE' }}>
          <p style={{ color: '#F2C4CE', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Tribe VIP</p>
          <h3 style={{ color: '#B8D4C8', fontSize: '42px', fontWeight: 'bold', margin: '0 0 4px 0' }}>$49</h3>
          <p style={{ color: '#C9B8E8', fontSize: '14px', marginBottom: '24px' }}>per month</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
            {[
              'Everything in Tribe Member',
              'Monthly 1:1 coaching call',
              'Personalized workout + nutrition plan',
              'Exclusive Crystal Reiki resource pack',
              'Early access to apparel drops',
            ].map(item => (
              <li key={item} style={{ color: '#C9B8E8', fontSize: '14px', lineHeight: '1.8', paddingBottom: '8px', borderBottom: '1px solid #FAF6F0', marginBottom: '8px' }}>
                ✓ {item}
              </li>
            ))}
          </ul>
          <a href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#F2C4CE', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
            Go VIP →
          </a>
        </div>

      </section>

      {/* TRUST SIGNAL */}
      <section style={{ backgroundColor: '#F2C4CE', padding: '40px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' }}>
          No contracts. No commitments. Cancel anytime.
        </p>
        <p style={{ color: '#fff', fontSize: '15px', margin: 0 }}>
          10,000+ women already in the Tribe. 💜
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#B8D4C8', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FAF6F0', fontSize: '13px', margin: 0 }}>© 2026 Tribe Gnosis · Cherina Montenique Scott · All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default Pricing