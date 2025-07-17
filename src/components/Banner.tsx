import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        width: '100%',
        background: '#0029FF url(/background.png) center center / cover no-repeat',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <span
        style={{
          color: '#fff',
          fontFamily: 'PP Fraktion Mono, monospace',
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: 0.5,
          zIndex: 1,
        }}
      >
        CREDIT LINES GO LIVE IN AUGUST!
      </span>
    </div>
  );
} 