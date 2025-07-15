import { useState } from "react";

export function CreditInfo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ 
      maxWidth: '390px', 
      width: '100%', 
      margin: '0 auto 12px',
      borderRadius: '8px', 
      backgroundColor: 'white', 
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
      fontFamily: 'PP Fraktion Mono, monospace'
    }}>
      {/* Dropdown Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          padding: '0 16px',
          border: 'none',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderRadius: '0',
          fontFamily: 'PP Fraktion Mono, monospace'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/Credit Info.svg" alt="Credit Info" width={20} height={20} />
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Credit Info</span>
        </div>
        <span style={{ fontSize: '20px' }}>{open ? '▴' : '▾'}</span>
      </button>
      
      {open && (
        <div style={{ padding: '20px', paddingTop: '4px' }}>
          {/* Credit Score Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#8F9396', fontSize: '10px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'PP Fraktion Mono, monospace' }}>
              CREDIT SCORE <span style={{ fontSize: '10px' }}>ⓘ</span>
            </div>
            <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '4px' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* 3Jane icon */}
                <img src="/3Jane score.svg" alt="3Jane" width={20} height={20} />
                <span style={{ fontSize: '12px', fontFamily: 'PP Fraktion Mono, monospace' }}>3Jane Score <span style={{ fontSize: '10px' }}>ⓘ</span> <span style={{ color: '#FFD600' }}>⚠️</span></span>
              </div>
              <span style={{ fontSize: '12px', color: '#8F9396', fontFamily: 'PP Fraktion Mono, monospace' }}>640/732</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Credit Karma icon */}
                <img src="/Credit Karma.svg" alt="Credit Karma" width={20} height={20} />
                <span style={{ fontSize: '12px', fontFamily: 'PP Fraktion Mono, monospace' }}>Credit Karma <span style={{ fontSize: '10px' }}>ⓘ</span></span>
                <span style={{ backgroundColor: '#0029FF', color: 'white', fontSize: '10px', padding: '0 8px', fontWeight: 'bold', borderRadius: '1px', height: '12px', display: 'flex', alignItems: 'center', fontFamily: 'PP Fraktion Mono, monospace' }}>
                  1x-4.5x Boost
                </span>
              </div>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                padding: '0 8px',
                fontSize: '12px',
                color: '#8F9396',
                backgroundColor: 'white',
                height: '24px',
                cursor: 'pointer',
                fontFamily: 'PP Fraktion Mono, monospace'
              }}>
                <img src="/Credit Karma.svg" alt="Credit Karma" width={16} height={16} /> CONNECT
              </button>
            </div>
          </div>
          
          {/* Assets Section */}
          <div style={{ paddingTop: '4px', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#8F9396', fontSize: '10px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'PP Fraktion Mono, monospace' }}>
              ASSETS <span style={{ fontSize: '10px' }}>ⓘ</span>
            </div>
            <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '4px' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Onchain icon */}
                <img src="/Onchain.svg" alt="Onchain" width={20} height={20} />
                <span style={{ fontSize: '12px', fontFamily: 'PP Fraktion Mono, monospace' }}>Onchain</span>
              </div>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                padding: '0 8px',
                fontSize: '12px',
                color: '#8F9396',
                backgroundColor: 'white',
                height: '24px',
                cursor: 'pointer',
                fontFamily: 'PP Fraktion Mono, monospace'
              }}>
                <img src="/Onchain.svg" alt="Onchain" width={16} height={16} /> CONNECT
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Bank icon */}
                <img src="/Bank.svg" alt="Bank" width={20} height={20} />
                <span style={{ fontSize: '12px', fontFamily: 'PP Fraktion Mono, monospace' }}>Bank</span>
                <span style={{ backgroundColor: '#0029FF', color: 'white', fontSize: '10px', padding: '0 8px', borderRadius: '1px', fontWeight: 'bold', height: '12px', display: 'flex', alignItems: 'center', fontFamily: 'PP Fraktion Mono, monospace' }}>
                  1x-4.5x Boost
                </span>
              </div>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                padding: '0 8px',
                fontSize: '12px',
                color: '#8F9396',
                backgroundColor: 'white',
                height: '24px',
                cursor: 'pointer',
                fontFamily: 'PP Fraktion Mono, monospace'
              }}>
                <img src="/Bank.svg" alt="Bank" width={16} height={16} /> CONNECT
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Coinbase icon */}
                <img src="/Coinbase.svg" alt="Coinbase" width={20} height={20} />
                <span style={{ fontSize: '12px', fontFamily: 'PP Fraktion Mono, monospace' }}>Coinbase</span>
              </div>
              <button style={{
                padding: '0 8px',
                fontSize: '12px',
                color: '#8F9396',
                backgroundColor: 'white',
                height: '24px',
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'PP Fraktion Mono, monospace'
              }}>
                COMING SOON
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 