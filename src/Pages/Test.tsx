

export default function Test() {
  return (
    <div style={{ 
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        margin: '20px',
        borderRadius: '8px',
        fontFamily: 'PP Fraktion Mono, monospace',
        maxWidth: '600px',
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          Test Page - Routing is Working!
        </h1>
        <p style={{ marginBottom: '8px' }}>
          If you can see this, the routing is working correctly.
        </p>
        <p style={{ color: '#6b7280' }}>
          Current URL: {window.location.pathname}
        </p>
      </div>
    </div>
  );
} 