import { useState } from 'react';
import { CreditInfo } from "@/components/CreditInfo";
import SimpleNavbar from "@/components/SimpleNavbar";
import { TermsModal } from "@/components/borrow/TermsModal";
import Banner from "@/components/Banner";
import CreditLineBanner from "@/components/ui/credit line";

export default function SimpleDashboard() {
  const [mode, setMode] = useState<'borrow' | 'repay'>('borrow');
  const [showTerms, setShowTerms] = useState(false);
  const [inputAmount, setInputAmount] = useState('0');
  const handleBorrowClick = () => setShowTerms(true);
  const handleAgree = () => setShowTerms(false);
  const handleClose = () => setShowTerms(false);

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
      <SimpleNavbar active="dashboard" />
      <div style={{ position: 'fixed', top: 110, right: 20, zIndex: 100 }}>
        <CreditLineBanner />
      </div>
      <div style={{ height: '64px' }} /> {/* Spacer for fixed navbar */}
      <Banner />
      <main style={{ 
        maxWidth: '1200px', 
        margin: '40px auto 0', 
        padding: '24px',
        fontFamily: 'PPFraktionMono, monospace',
        boxSizing: 'border-box',
        position: 'relative',
      }}>
        

        
        {/* Original BorrowStats Component */}
        <div style={{ 
          maxWidth: '390px', 
          width: '100%', 
          margin: '0 auto 12px',
          borderRadius: '4px', 
          backgroundColor: 'white', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
          padding: '4px',
          height: '76px',
          fontFamily: 'PP Fraktion Mono, monospace',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', textAlign: 'center', alignItems: 'start', width: '100%' }}>
            {/* Borrowed */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '1px' }}>
                <span style={{ color: '#8F9396', fontSize: '12px', fontWeight: '400', letterSpacing: '-0.28px' }}>
                  Borrowed
                </span>
                <span style={{ color: '#8F9396', fontSize: '12px' }}>ⓘ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <img src="/Frame 2.svg" alt="JANE" width={16} height={16} />
                <span style={{ 
                  color: '#111827', 
                  fontSize: '16px', 
                  fontWeight: '400', 
                  letterSpacing: '-0.8px',
                  WebkitTextStrokeWidth: '0.1px',
                  WebkitTextStrokeColor: '#111827'
                }}>
                  59,000.45
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '-2px' }}>
                <div style={{ width: '60%', height: '3px', backgroundColor: '#e5e7eb', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ width: '60%', height: '3px', backgroundColor: '#0029FF', borderRadius: '2px', position: 'absolute', top: 0, left: 0 }}></div>
                </div>
                <span style={{ color: '#8F9396', fontSize: '10px', marginLeft: '4px', letterSpacing: '-0.28px' }}>
                  100K
                </span>
              </div>
            </div>
            
            {/* Borrow APY */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '1px' }}>
                <span style={{ color: '#8F9396', fontSize: '12px', fontWeight: '400', letterSpacing: '-0.8px' }}>
                  Borrow APY
                </span>
                <span style={{ color: '#8F9396', fontSize: '12px' }}>ⓘ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ 
                  color: '#111827', 
                  fontSize: '16px', 
                  fontWeight: '400', 
                  letterSpacing: '-0.8px',
                  WebkitTextStrokeWidth: '0.1px',
                  WebkitTextStrokeColor: '#111827'
                }}>
                  0%
                </span>
              </div>
            </div>
            
            {/* Rewards */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '1px' }}>
                <span style={{ color: '#8F9396', fontSize: '12px', fontWeight: '400', letterSpacing: '-0.28px' }}>
                  Rewards
                </span>
                <span style={{ color: '#8F9396', fontSize: '12px' }}>ⓘ</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <img src="/Frame 1.svg" alt="USDC" width={16} height={16} />
                <span style={{ 
                  color: '#111827', 
                  fontSize: '16px', 
                  fontWeight: '400', 
                  letterSpacing: '-0.28px',
                  WebkitTextStrokeWidth: '0.1px',
                  WebkitTextStrokeColor: '#111827'
                }}>
                  1000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CreditCard Component */}
        <div style={{ 
          maxWidth: '390px', 
          width: '100%', 
          margin: '0 auto 12px',
          borderRadius: '4px', 
          backgroundColor: 'white', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
          padding: '18px',
          fontFamily: 'PP Fraktion Mono, monospace',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'normal', color: 'black' }}>//ACCESS MONEY MARKET</div>
            <div style={{ display: 'flex', gap: '6px', backgroundColor: '#F5F6F7', borderRadius: '1.546px', padding: '2px', height: '24px' }}>
              <button 
                onClick={() => setMode('borrow')}
                style={{
                  padding: '0 4px',
                  height: '100%',
                  borderRadius: '1.546px',
                  fontSize: '12px',
                  fontWeight: 'normal',
                  border: 'none',
                  backgroundColor: mode === 'borrow' ? 'white' : 'transparent',
                  color: mode === 'borrow' ? '#181C23' : '#A3A7AD',
                  cursor: 'pointer',
                  fontFamily: 'PPFraktionMono, monospace',
                }}
              >
                Borrow
              </button>
              <button 
                onClick={() => setMode('repay')}
                style={{
                  padding: '0 4px',
                  height: '100%',
                  borderRadius: '1.546px',
                  fontSize: '12px',
                  fontWeight: 'normal',
                  border: 'none',
                  backgroundColor: mode === 'repay' ? 'white' : 'transparent',
                  color: mode === 'repay' ? '#181C23' : '#A3A7AD',
                  cursor: 'pointer',
                  fontFamily: 'PPFraktionMono, monospace',
                }}
              >
                Repay
              </button>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '8px',
  width: '100%',
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    fontSize: '70px',
    fontWeight: 400,
    color: '#0029FF',
    letterSpacing: '-2px',
    fontFamily: 'PP Fraktion Mono, monospace',
  }}>
    <span>$</span>
    <input
      type="number"
      min="0"
      value={inputAmount}
      onChange={e => {
        let val = e.target.value.replace(/^0+(?!$)/, '');
        if (val.length > 6) val = val.slice(0, 6);
        if (/^\d*$/.test(val)) setInputAmount(val);
      }}
      maxLength={6}
      placeholder="0"
      style={{
        minWidth: '60px',
        width: `${Math.max(1, inputAmount.length) * 42}px`, // auto-grow with digits
        fontSize: '70px',
        fontWeight: 400,
        color: '#0029FF',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        textAlign: 'left',
        letterSpacing: '-2px',
        fontFamily: 'PP Fraktion Mono, monospace',
        appearance: 'textfield',
        MozAppearance: 'textfield',
        WebkitAppearance: 'none',
        padding: 0,
        margin: 0,
        overflowX: 'hidden',
      }}
      inputMode="numeric"
    />
  </div>
</div>
            <div style={{ fontSize: '12px', color: '#8F9396', marginBottom: '48px' }}>
              Max Borrow 8.23K
            </div>
            <button
              style={{
                width: '100%',
                backgroundColor: '#0029FF',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'normal',
                padding: '12px',
                borderRadius: '4px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.1px',
                fontFamily: 'PPFraktionMono, monospace'
              }}
              onClick={mode === 'borrow' ? handleBorrowClick : undefined}
            >
              {mode === 'borrow' ? (
                <>Borrow <img src="/Frame 1.svg" alt="USDC" width={16} height={16} /> {inputAmount} USDC</>
              ) : (
                <>Repay <img src="/Frame 1.svg" alt="USDC" width={16} height={16} /> 59,000.45 USDC</>
              )}
            </button>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#8F9396', fontSize: '12px', fontWeight: 'normal' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Credit Line Utilization <span style={{ fontSize: '10px' }}>ⓘ</span>
                </span>
                <span style={{ color: 'black', fontSize: '12px' }}>25.0% → 28.0%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#8F9396', fontSize: '12px', fontWeight: 'normal' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  TX Fee <span style={{ fontSize: '10px' }}>ⓘ</span>
                </span>
                <span style={{ color: 'black', fontSize: '12px' }}>$10</span>
              </div>
            </div>
          </div>
        </div>

        {/* CreditInfo Component */}
        <CreditInfo />
      </main>
      
      {/* Footer Component */}
      <footer style={{
        width: '100%',
        background: '#fff',
        borderTop: '1px solid #e5e7eb',
        padding: '0',
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 100,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'PP Fraktion Mono, monospace',
        fontSize: 14
      }}>
        <div style={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}>
          {/* APY blocks */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <img src="/USD3.svg" alt="USD3" style={{ width: 24, height: 24 }} />
              <span>USD3 APY</span>
              <span style={{ color: '#16a34a', fontWeight: 600 }}>9.52%</span>
            </div>
            <div style={{ width: 1, height: 24, background: '#E4E7EA' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
              <img src="/sUSD3.svg" alt="sUSD3" style={{ width: 24, height: 24 }} />
              <span>sUSD3 APY</span>
              <span style={{ color: '#16a34a', fontWeight: 600 }}>22.72%</span>
            </div>
          </div>
          {/* Social media icons */}
          <div style={{ display: 'flex', gap: 20, fontSize: 14 }}>
            <a href="https://discord.gg/3jane" target="_blank" rel="noopener noreferrer">
              <img src="/discord.svg" alt="Discord" style={{ color: '#8F9396', width: 20, height: 20, filter: 'invert(54%) sepia(2%) saturate(0%) hue-rotate(169deg) brightness(92%) contrast(88%)' }} />
            </a>
            <a href="https://github.com/vasilhstaf/3Jane" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" style={{ color: '#8F9396', width: 20, height: 20, filter: 'invert(54%) sepia(2%) saturate(0%) hue-rotate(169deg) brightness(92%) contrast(88%)' }} />
            </a>
            <a href="https://twitter.com/3Jane_xyz" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" alt="Twitter" style={{ color: '#8F9396', width: 20, height: 20, filter: 'invert(54%) sepia(2%) saturate(0%) hue-rotate(169deg) brightness(92%) contrast(88%)' }} />
            </a>
            <a href="https://mirror.xyz/" target="_blank" rel="noopener noreferrer">
              <img src="/mirror.svg" alt="Mirror" style={{ color: '#8F9396', width: 20, height: 20, filter: 'invert(54%) sepia(2%) saturate(0%) hue-rotate(169deg) brightness(92%) contrast(88%)' }} />
            </a>
            <a href="https://docs.3jane.xyz/" target="_blank" rel="noopener noreferrer">
              <img src="/docs.svg" alt="Docs" style={{ color: '#8F9396', width: 20, height: 20, filter: 'invert(54%) sepia(2%) saturate(0%) hue-rotate(169deg) brightness(92%) contrast(88%)' }} />
            </a>
          </div>
        </div>
      </footer>
      <TermsModal open={showTerms} onClose={handleClose} onAgree={handleAgree} inputAmount={inputAmount} />
      </div>
    </div>
  );
} 