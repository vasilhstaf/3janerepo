import SimpleNavbar from "@/components/SimpleNavbar";
import { useState } from "react";
import Backing from "./Info/Backing";
import Auction from "./Info/Auction";
import Thisapy from "./Info/Thisapy";

const tabs = [
  { label: "USD3 Backing", value: "backing" },
  { label: "APY", value: "apy" },
  { label: "NPL Auction", value: "auction" },
];

export default function Info() {
  const [tab, setTab] = useState("backing");
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
        <SimpleNavbar active="info" />
        <div style={{ maxWidth: 1200, margin: '104px auto 0', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 0, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {tabs.map((t, i) => (
                <button
                  key={t.value}
                  onClick={() => setTab(t.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: tab === t.value ? '3px solid #0029FF' : '3px solid transparent',
                    color: tab === t.value ? '#0029FF' : '#222',
                    fontWeight: tab === t.value ? 600 : 400,
                    fontSize: 14,
                    padding: '0 0 8px 0',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'color 0.2s, border-bottom 0.2s',
                    fontFamily: 'PP Fraktion Mono, monospace',
                    letterSpacing: 0.5,
                    marginRight: i !== tabs.length - 1 ? 32 : 0,
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <span style={{ color: '#8F9396', fontSize: 14, marginLeft: 32, whiteSpace: 'nowrap' }}>
              Updated Mar. 22, 2025 11:20 AM UTC
            </span>
          </div>
          <div style={{ borderBottom: '1.5px solid #D3D6D9', width: '100%', marginBottom: 24 }} />
          {tab === "backing" && <Backing />}
          {tab === "apy" && <Thisapy />}
          {tab === "auction" && <Auction />}
        </div>
        {/* Footer Component */}
        <footer style={{
          width: '100%',
          background: '#fff',
          borderTop: '1px solid #D3D6D9',
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
      </div>
    </div>
  );
}