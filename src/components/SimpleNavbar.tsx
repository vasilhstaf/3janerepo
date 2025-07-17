interface SimpleNavbarProps {
  active?: 'dashboard' | 'lend' | 'info';
  color?: string;
}

const linkStyles = {
  base: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#374151',
  },
  active: {
    color: '#0029FF',
    fontWeight: 700,
  },
};

export default function SimpleNavbar({ active = 'dashboard', color }: SimpleNavbarProps) {
  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 50, 
      background: color || 'white', 
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '64px',
      fontFamily: 'PPFraktionMono, monospace'
    }}>
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 32px',
        boxSizing: 'border-box'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '32px' }}>
          <img 
            src="/3Jane score.svg" 
            alt="3Jane Logo" 
            style={{ height: '32px', width: '32px', borderRadius: '4px', objectFit: 'contain' }} 
          />
        </div>
        {/* Navigation Links */}
        <ul style={{ 
          display: 'flex', 
          gap: '12px', 
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 'normal'
        }}>
          <li>
            <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', fontFamily: 'PPFraktionMono, monospace', color: active === 'dashboard' ? '#0029FF' : '#374151', fontWeight: active === 'dashboard' ? 700 : 400 }}>
              <span style={{ color: '#0029FF', fontSize: 24, fontWeight: 400, opacity: active === 'dashboard' ? 1 : 0 }}>[</span>
              <span style={{ color: active === 'dashboard' ? '#0029FF' : '#374151', fontWeight: active === 'dashboard' ? 700 : 400 }}>Borrow</span>
              <span style={{ color: '#0029FF', fontSize: 24, fontWeight: 400, opacity: active === 'dashboard' ? 1 : 0 }}>]</span>
            </a>
          </li>
          <li>
            <a href="/lend" style={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', fontFamily: 'PPFraktionMono, monospace', color: active === 'lend' ? '#0029FF' : '#374151', fontWeight: active === 'lend' ? 700 : 400 }}>
              <span style={{ color: '#0029FF', fontSize: 24, fontWeight: 400, opacity: active === 'lend' ? 1 : 0 }}>[</span>
              <span style={{ color: active === 'lend' ? '#0029FF' : '#374151', fontWeight: active === 'lend' ? 700 : 400 }}>Lend</span>
              <span style={{ color: '#0029FF', fontSize: 24, fontWeight: 400, opacity: active === 'lend' ? 1 : 0 }}>]</span>
            </a>
          </li>
          <li>
            <a href="/info" style={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', fontFamily: 'PPFraktionMono, monospace', color: active === 'info' ? '#0029FF' : '#374151', fontWeight: active === 'info' ? 700 : 400 }}>
              <span style={{ color: '#0029FF', fontSize: 24, fontWeight: 400, opacity: active === 'info' ? 1 : 0 }}>[</span>
              <span style={{ color: active === 'info' ? '#0029FF' : '#374151', fontWeight: active === 'info' ? 700 : 400 }}>info</span>
              <span style={{ color: '#0029FF', fontSize: 24, fontWeight: 400, opacity: active === 'info' ? 1 : 0 }}>]</span>
            </a>
          </li>
        </ul>
        <div style={{ flex: 1 }} />
        <button style={{ 
          background: '#0029FF', 
          color: 'white', 
          border: 'none', 
          borderRadius: '2px', 
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'normal',
          fontFamily: 'PPFraktionMono, monospace',
          whiteSpace: 'nowrap'
        }}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
} 