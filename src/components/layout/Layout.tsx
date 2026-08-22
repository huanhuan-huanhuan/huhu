import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  const [showBar, setShowBar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setShowBar(true)
    const timer = setTimeout(() => setShowBar(false), 1400)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showBar && <div className="cinematic-bar" />}
      
      {/* Logo */}
      <div style={{ position: 'fixed', top: 32, left: 60, zIndex: 40 }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, color: 'var(--color-primary)' }}>
          胡椒粉
        </span>
      </div>

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 32, right: 32, zIndex: 50, display: 'flex', gap: 24, padding: '12px 24px', background: 'rgba(255,248,245,0.8)', backdropFilter: 'blur(12px)', borderRadius: 9999, border: '1px solid var(--color-outline-variant)' }}>
        <NavLink to="/" end style={({ isActive }) => ({ fontSize: 14, fontWeight: 500, color: isActive ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)', textDecoration: 'none', borderBottom: isActive ? '2px solid var(--color-secondary)' : 'none', paddingBottom: isActive ? 2 : 0 })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ fontSize: 14, fontWeight: 500, color: isActive ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)', textDecoration: 'none', borderBottom: isActive ? '2px solid var(--color-secondary)' : 'none', paddingBottom: isActive ? 2 : 0 })}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ fontSize: 14, fontWeight: 500, color: isActive ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)', textDecoration: 'none', borderBottom: isActive ? '2px solid var(--color-secondary)' : 'none', paddingBottom: isActive ? 2 : 0 })}>
          Contact
        </NavLink>
        <NavLink to="/pet" style={({ isActive }) => ({ fontSize: 14, fontWeight: 500, color: isActive ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)', textDecoration: 'none', borderBottom: isActive ? '2px solid var(--color-secondary)' : 'none', paddingBottom: isActive ? 2 : 0 })}>
          Pet
        </NavLink>
      </nav>

      <main style={{ flex: 1 }}>{children}</main>

      {/* Footer */}
      <footer style={{ padding: 48, textAlign: 'center', borderTop: '1px solid rgba(211,196,186,0.3)' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
          © 缓缓. A quiet afternoon journal.
        </p>
      </footer>
    </div>
  )
}
