import { useState } from 'react';

interface LendPanelProps {
  usd3Balance?: number;
  susd3Balance?: number;
  janeBalance?: number;
  usd3Apy?: number;
  available?: number;
  pricePerShare?: number;
  txFee?: number;
}

export default function LendPanel({
  usd3Balance = 312000,
  susd3Balance = 32000,
  janeBalance = 32000,
  usd3Apy = 3.8,
  available = 8.23,
  pricePerShare = 1.03,
  txFee = 10,
}: LendPanelProps) {
  const [tab, setTab] = useState<'lend' | 'stake'>('lend');
  const [amount, setAmount] = useState('');

  // Format numbers with commas
  const format = (n: number) => n.toLocaleString();
  const formatK = (n: number) => `${String(n)[0]}K`;

  return (
    <div className="dashboard-panel" style={{ fontFamily: 'PPFraktionMono, monospace', width: '100%', maxWidth: 390, margin: '40px auto 0' }}>
      {/* Top balances bar */}
      <div className="dashboard-balance-bar" style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white',
        borderRadius: 4,
        boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
        padding: '16px 20px',
        marginBottom: 12,
        gap: 16,
      }}>
        {[{
          label: 'USD3 Balance',
          icon: '/USD3.svg',
          value: usd3Balance,
        }, {
          label: 'sUSD3 Balance',
          icon: '/sUSD3.svg',
          value: susd3Balance,
        }, {
          label: '$JANE Balance',
          icon: '/Logo.png',
          value: janeBalance,
        }].map(({ label, icon, value }) => (
          <div className="dashboard-balance-item" key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div className="dashboard-balance-label" style={{ fontSize: 12, color: '#8F9396', marginBottom: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, whiteSpace: 'nowrap' }}>
              {label} <span style={{ fontSize: 12 }}>ⓘ</span>
            </div>
            <div className="dashboard-balance-main" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, whiteSpace: 'nowrap' }}>
              <img src={icon} alt={label} style={{ width: 16, height: 16 }} />
              <span style={{ fontSize: 14, color: '#111827', fontWeight: 700 }}>{format(value)}</span>
              {label !== '$JANE Balance' && (
                <span style={{ fontSize: 12, color: '#8F9396', marginLeft: 4, background: '#F5F6F7', borderRadius: 2, padding: '2px 6px', fontWeight: 500 }}>{formatK(value)}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Main card */}
      <div className="dashboard-card" style={{
        background: 'white',
        borderRadius: 4,
        boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
        padding: 0,
        overflow: 'hidden',
      }}>
        {/* Tabs and APY */}
        <div className="dashboard-card-header" style={{ display: 'flex', alignItems: 'center', marginTop:20, marginRight:20, marginLeft:20 }}>
          <div style={{ display: 'flex', gap: '6px', backgroundColor: '#F5F6F7', borderRadius: '1.546px', padding: '2px', height: '28px' }}>
            <button
              onClick={() => setTab('lend')}
              style={{
                padding: '0 8px',
                height: '100%',
                borderRadius: '1.546px',
                fontSize: '12px',
                fontWeight: 'normal',
                border: 'none',
                backgroundColor: tab === 'lend' ? 'white' : 'transparent',
                color: tab === 'lend' ? '#181C23' : '#A3A7AD',
                cursor: 'pointer'
              }}
            >
              Lend
            </button>
            <button
              onClick={() => setTab('stake')}
              style={{
                padding: '0 8px',
                height: '100%',
                borderRadius: '1.546px',
                fontSize: '12px',
                fontWeight: 'normal',
                border: 'none',
                backgroundColor: tab === 'stake' ? 'white' : 'transparent',
                color: tab === 'stake' ? '#181C23' : '#A3A7AD',
                cursor: 'pointer'
              }}
            >
              Stake
            </button>
          </div>
          <div style={{ flex: 1 }} />
          <div className="dashboard-apy-badge" style={{
            background: '#0029FF',
            color: 'white',
            borderRadius: 2,
            fontSize: 14,
            fontWeight: 600,
            padding: '6px 18px',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}>
            USD3 APY <span style={{ color: '#ffffff', fontWeight: 700 }}>{usd3Apy}%</span>
          </div>
        </div>

        {/* Deposit/Withdraw section */}
        <div className="dashboard-card-body" style={{ padding: 0, background: 'transparent' }}>
          <div
            style={{
              background: 'white',
              border: '1px solid #E4E7EA',
              borderRadius: 4,
              margin: 20,
              marginBottom: 0,
              padding: 0,
              boxShadow: 'none',
              overflow: 'hidden',
              position: 'relative', // Make parent relative for absolute arrow
            }}
          >
            {/* Top section: Deposit */}
            <div style={{ padding: '12px 12px 12px 12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ whiteSpace: 'nowrap' }}>
                  <span style={{ fontWeight: 700, color: '#111827', fontSize: 14, letterSpacing: '0.01em' }}>Deposit</span>
                  <span style={{ color: '#8F9396', fontWeight: 400, fontSize: 14, marginLeft: 8 }}>// Withdraw</span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <input
                      className="dashboard-amount-input"
                      type="number"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      placeholder="0.00"
                      style={{
                        fontSize: 20,
                        color: '#0029FF',
                        fontWeight: 700,
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        width: 120,
                        textAlign: 'left',
                        fontFamily: 'PPFraktionMono, monospace',
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img src="/USD3.svg" alt="USDC" style={{ width: 24, height: 24, display: 'block' }} />
                      <span style={{ fontSize: 14, color: '#111827', fontWeight: 700 }}>USDC</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 12 }}>
                    <span style={{ fontSize: 12, color: '#8F9396' }}>$32,019</span>
                    <span style={{ fontSize: 12, color: '#8F9396' }}>Available <span style={{ color: '#111827', fontWeight: 700, marginLeft: 2 }}>{available}K</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with arrow */}
            <div style={{ position: 'absolute', left: 0, top: '50%', width: '100%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <hr style={{ border: 0, borderTop: '1px solid #E4E7EA', margin: 0, position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', zIndex: 1 }} />
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'white', borderRadius: 2, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #E4E7EA', zIndex: 2 }}>
                <span style={{ fontSize: 14, color: '#181C23', fontWeight: 500 }}>↓</span>
              </div>
            </div>

            {/* Bottom section: You receive */}
            <div style={{ padding: '12px 12px 12px 12px', }}>
              <div style={{ color: '#8F9396', fontSize: 14, marginBottom: 12 }}>You receive</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <input
                    className="dashboard-amount-input"
                    type="number"
                    value={amount}
                    readOnly
                    placeholder="0.00"
                    style={{
                      fontSize: 20,
                      color: '#0029FF',
                      fontWeight: 700,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      width: 120,
                      textAlign: 'left',
                      fontFamily: 'PPFraktionMono, monospace',
                    }}
                  />
                  <span style={{ fontSize: 14, color: '#8F9396', marginTop: 8 }}>$32,019</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src="/sUSD3.svg" alt="USD3" style={{ width: 28, height: 28 }} />
                  <span style={{ fontSize: 14, color: '#111827', fontWeight: 700 }}>USD3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deposit button */}
        <div style={{ padding: ' 20px 20px 20px 20px' }}>
        <button
            className="dashboard-deposit-btn "
          style={{
            width: '100%',
            background: '#0029FF',
            color: 'white',
            fontSize: 12,
            fontWeight: 700,
            padding: '12px 0',
            borderRadius: 2,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'PPFraktionMono, monospace',
            letterSpacing: '0.02em',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          Deposit
        </button>
        </div>

        {/* Price per share and TX Fee */}
        <div className="dashboard-card-footer" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: '#8F9396',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          marginBottom: 20,
          marginRight: 20,
          marginLeft: 20,


        }}>
          <div>
            <div>Price per share <span style={{ fontSize: 12 }}>ⓘ</span></div>
            <div>TX Fee <span style={{ fontSize: 12 }}>ⓘ</span></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div>USDC/USD3 {pricePerShare}</div>
            <div>${txFee}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 