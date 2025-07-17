
export default function CreditLineBanner() {
  return (
    <div
      style={{
        background: '#0029FF',
        borderRadius: '2px',
        padding: '12px',
        color: 'white',
        fontFamily: 'PPFraktionMono, monospace',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
        maxWidth: 320,
      }}
    >
      <div style={{ fontSize: '10px', letterSpacing: '0px', marginBottom: '8px' }}>
        YOUR CREDIT LINE
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <img src="/USDC white.png" alt="USDC" style={{ width: 20, height: 20,  }} />
          <span style={{ fontSize: '18px', fontWeight: 700, fontStyle: 'italic', color: 'white', letterSpacing: '0.5px' }}>
            200,000 USDC
          </span>
        </div>
        <div
          style={{
            background: 'white',
            color: '#0029FF',
            borderRadius: '1px',
            fontSize: '12px',
            fontWeight: 400,
            padding: '1px 4px',
            fontFamily: 'PPFraktionMono, monospace',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,0.04)',
          }}
        >
          @ 32% APR
        </div>
      </div>
    </div>
  );
}
