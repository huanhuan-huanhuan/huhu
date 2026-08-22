export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 20px 64px' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 56, textAlign: 'center', maxWidth: 420, width: '100%', boxShadow: '0 4px 20px rgba(107,79,58,0.08)', transition: 'transform 0.3s' }}>
        {/* Avatar */}
        <div style={{ width: 128, height: 128, margin: '0 auto 24px', borderRadius: '50%', backgroundColor: 'rgba(229,191,165,0.6)', border: '4px solid var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 52, color: 'var(--color-primary)' }}>👤</span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, color: 'var(--color-primary)', marginBottom: 8 }}>
          缓缓
        </h2>
        <p style={{ fontSize: 16, color: 'var(--color-on-surface-variant)', marginBottom: 32 }}>
          A quiet afternoon journal.
        </p>

        {/* Xiaohongshu Button */}
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '12px 24px', backgroundColor: '#ff2442', color: '#ffffff', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', borderRadius: 9999, textDecoration: 'none', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🔗 Xiaohongshu（小红书）
        </a>

        {/* Decorative dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(211,196,186,0.5)' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(211,196,186,0.3)' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(211,196,186,0.1)' }} />
        </div>
      </div>
    </div>
  )
}
