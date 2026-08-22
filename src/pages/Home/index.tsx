import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(80vw, 800px)', height: 'min(80vw, 800px)', background: 'rgba(229,191,165,0.2)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }} />

      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', zIndex: 10 }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 500, color: 'var(--color-primary-container)', margin: 0, lineHeight: 1 }}>
          hi
        </h1>
        
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--color-on-surface-variant)', marginTop: 24, fontWeight: 300, letterSpacing: '0.02em', opacity: 0.9 }}>
          welcome to my little corner
        </p>
        
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 32, padding: '16px 32px', backgroundColor: 'var(--color-inverse-primary)', color: 'var(--color-on-primary-fixed)', fontSize: 14, fontWeight: 600, borderRadius: 9999, textDecoration: 'none', border: '1px solid rgba(211,196,186,0.3)', transition: 'transform 0.2s', cursor: 'pointer' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Contact Me
        </Link>
      </div>

      {/* Decorative blocks */}
      <div style={{ position: 'absolute', bottom: 80, left: 40, width: 192, height: 256, backgroundColor: 'rgba(229,191,165,0.15)', borderRadius: 16, transform: 'rotate(-6deg)' }} className="hidden lg:block" />
      <div style={{ position: 'absolute', top: 128, right: 80, width: 128, height: 128, backgroundColor: 'rgba(107,85,130,0.12)', borderRadius: '50%', transform: 'rotate(12deg)', display: 'none' }} className="hidden lg:block" />
    </div>
  )
}
