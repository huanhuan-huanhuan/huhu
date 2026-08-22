const items = [
  { id: 1, title: 'Sunbeam Dreaming', tag: 'Nap Time', color: '#e5bfa5' },
  { id: 2, title: 'Tiny Paws', color: '#e5caff' },
  { id: 3, title: 'Golden Hour Zoomies', tag: 'Adventure', color: '#405960' },
  { id: 4, title: 'Favorite Toy', color: '#e9e1dd', isText: true },
  { id: 5, title: 'Watching the Rain', tag: 'Quiet Times', color: '#755843' },
]

export default function Pet() {
  return (
    <div style={{ maxWidth: 1140, margin: '0 auto', padding: '144px 20px 96px' }}>
      <header style={{ marginBottom: 64, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: 'var(--color-primary)', marginBottom: 16 }}>
          🐾 My Pet
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-on-surface-variant)', maxWidth: 768, margin: '0 auto' }}>
          Moments of joy, mischief, and quiet companionship. A small collection of memories with my favorite creature.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 24, gridAutoRows: 250 }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 12,
              backgroundColor: item.color,
              opacity: 0.8,
              boxShadow: '0 4px 20px rgba(107,79,58,0.08)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              ...(item.id === 1 || item.id === 3 ? { gridRow: 'span 2' } : {}),
              ...(item.id === 5 ? { gridColumn: 'span 2' } : {}),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            {item.isText ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 32, textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: '#ffdcc4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>🧸</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, color: 'var(--color-primary)', marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 16, color: 'var(--color-on-surface-variant)' }}>
                  The squeaky lamb, inevitably destroyed within minutes.
                </p>
              </div>
            ) : (
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: 24, color: '#ffffff', transform: 'translateY(8px)', transition: 'transform 0.3s' }}
                className="hover-translate"
              >
                {item.tag && (
                  <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)', marginBottom: 8 }}>
                    {item.tag}
                  </span>
                )}
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500 }}>
                  {item.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
