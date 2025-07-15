// Table row data

const stats = [
  {
    value: "N/A",
    label: "USD3 TVL",
    info: true,
  },
  {
    value: "$425.82M",
    label: "USD3 BACKING TVV",
    info: true,
  },
  {
    value: "0.00%",
    label: "USD3 TVL/TVV",
    info: true,
  },
  {
    value: "404/1000",
    label: "JANE SCORE",
    info: true,
  },
];

import { DataTableDemo } from "../../components/DataTableDemo";

export default function Backing() {
  return (
    <div>
      {/* Stat blocks (unchanged) */}
      <div
        style={{
          width: '100%',
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
          marginBottom: 32,
          overflow: 'hidden',
          display: "flex",
          gap: 0,
          justifyContent: "center",
          alignItems: "center",
          minHeight: 77,

        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "left",
              padding: "23px 32px",
            }}
          >
            <div
              style={{
                color: "#0029FF",
                fontSize: 20,
                fontWeight: 600,
                fontFamily: 'PP Fraktion Mono, monospace',
                marginBottom: 1,
                letterSpacing: 0.5,
                textAlign: "left",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "#5D5F62",
                fontSize: 12,
                fontWeight: 400,
                display: "flex",
                alignItems: "flex-start",
                gap: 4,
                fontFamily: 'PP Fraktion Mono, monospace',
                textAlign: "left",
              }}
            >
              {stat.label}
              {stat.info && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "flex-start",
                    justifyContent: "left",
                    width: 16,
                    height: 16,
                    marginLeft: 2,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6.5" stroke="#B0B3B7" fill="white" />
                    <text x="7" y="10" textAnchor="middle" fontSize="10" fill="#B0B3B7" fontFamily="monospace">i</text>
                  </svg>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pool Backing Table */}
      <div
        style={{
          width: '100%',
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
          marginBottom: 32,
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 24px 0 24px' }}>
          <span style={{ fontFamily: 'PP Fraktion Mono, monospace', fontSize: 14, fontWeight: 600, color: '#222', letterSpacing: 1 }}>POOL BACKING</span>
          <a href="#" style={{ color: '#5D5F62', fontSize: 14, fontFamily: 'PP Fraktion Mono, monospace', textDecoration: 'none', fontWeight: 500 }}>
            Proofs ↗
          </a>
        </div>
        <div style={{ padding: '24px' }}>
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
} 