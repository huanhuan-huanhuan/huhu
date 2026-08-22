export default function About() {
  return (
    <div style={{ maxWidth: 1140, margin: '0 auto', padding: '144px 20px 96px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: 'var(--color-primary-container)', marginBottom: 16 }}>
        About Me
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-on-surface-variant)', maxWidth: 768, marginBottom: 48 }}>
        A quiet space for contemplation, capturing the essence of slow living through fragmented thoughts and warm moments.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="md:grid-cols-[2fr_1fr]">
        {/* Bio */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 40, boxShadow: '0 4px 20px rgba(107,79,58,0.08)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, color: 'var(--color-primary)', marginBottom: 24 }}>
            Navigating the Quiet
          </h2>
          <div style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--color-on-surface-variant)' }}>
            <p style={{ marginBottom: 16 }}>
              I find solace in the subtle textures of everyday life. The rustle of paper, the warmth of a morning cup, the fleeting shadows cast by afternoon light—these are the anchors of my journal.
            </p>
            <p>
              Through this digital space, I aim to preserve the tactile essence of memories, translating fleeting thoughts into lingering words.
            </p>
          </div>
        </div>

        {/* Pet Card */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 40, boxShadow: '0 4px 20px rgba(107,79,58,0.08)', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, color: 'var(--color-primary-container)', marginBottom: 24 }}>
            My Pet 🐾
          </h3>
          <div style={{ width: 144, height: 144, margin: '0 auto 24px', borderRadius: '50%', backgroundColor: 'rgba(229,191,165,0.3)', border: '4px solid var(--color-surface)' }} />
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--color-primary)', marginBottom: 8 }}>Bao</h4>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-secondary)', textTransform: 'uppercase', marginBottom: 16 }}>
            Chief Nap Officer
          </p>
          <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--color-on-surface-variant)', opacity: 0.8 }}>
            "Specializes in finding the sunniest spot in any room and demanding belly rubs with a single glance."
          </p>
        </div>
      </div>
    </div>
  )
}
