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
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
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
          gap: '24px', 
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 'normal'
        }}>
          <li><a href="/dashboard" style={active === 'dashboard' ? { ...linkStyles.base, ...linkStyles.active } : linkStyles.base}>Borrow</a></li>
          <li><a href="/lend" style={active === 'lend' ? { ...linkStyles.base, ...linkStyles.active } : linkStyles.base}>Lend</a></li>
          <li><a href="/info" style={active === 'info' ? { ...linkStyles.base, ...linkStyles.active } : linkStyles.base}>info</a></li>
        </ul>
        <div style={{ flex: 1 }} />
        <button style={{ 
          background: '#0029FF', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
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