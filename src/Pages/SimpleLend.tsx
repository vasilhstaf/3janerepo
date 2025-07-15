

function SimpleNavbar() {
  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 50, 
      background: 'white', 
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
          <div style={{ 
            height: '32px', 
            width: '32px', 
            borderRadius: '4px',
            backgroundColor: '#0029FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            3J
          </div>
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
          <li><a href="/dashboard" style={{ color: '#374151', cursor: 'pointer', textDecoration: 'none' }}>Borrow</a></li>
          <li><a href="/lend" style={{ color: '#0029FF', cursor: 'pointer', textDecoration: 'none' }}>Lend</a></li>
          <li><a href="/info" style={{ color: '#374151', cursor: 'pointer', textDecoration: 'none' }}>info</a></li>
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

export default function SimpleLend() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Background image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          background: "url('/image.png') center center / cover no-repeat",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
      <SimpleNavbar />
      <main style={{ 
        maxWidth: '1200px', 
        margin: '104px auto 0', 
        padding: '24px',
        fontFamily: 'PPFraktionMono, monospace'
      }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
          padding: '32px', 
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: '#111827'
          }}>
            Lend Page
          </h1>
          <p style={{ 
            color: '#6b7280',
            fontSize: '16px'
          }}>
            Welcome to the Lend page! This feature is coming soon.
          </p>
        </div>
      </main>
      </div>
    </div>
  );
} 