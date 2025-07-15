// @ts-nocheck
import React from "react";

const socialIconFilter = 'invert(54%) sepia(2%) saturate(0%) hue-rotate(169deg) brightness(92%) contrast(88%)';

const Footer: React.FC = () => {
  return (
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
            <img src="/discord.svg" alt="Discord" style={{ color: '#8F9396', width: 20, height: 20, filter: socialIconFilter }} />
          </a>
          <a href="https://github.com/vasilhstaf/3Jane" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" style={{ color: '#8F9396', width: 20, height: 20, filter: socialIconFilter }} />
          </a>
          <a href="https://twitter.com/3Jane_xyz" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="Twitter" style={{ color: '#8F9396', width: 20, height: 20, filter: socialIconFilter }} />
          </a>
          <a href="https://mirror.xyz/" target="_blank" rel="noopener noreferrer">
            <img src="/mirror.svg" alt="Mirror" style={{ color: '#8F9396', width: 20, height: 20, filter: socialIconFilter }} />
          </a>
          <a href="https://docs.3jane.xyz/" target="_blank" rel="noopener noreferrer">
            <img src="/docs.svg" alt="Docs" style={{ color: '#8F9396', width: 20, height: 20, filter: socialIconFilter }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 