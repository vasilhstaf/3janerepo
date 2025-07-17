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

import BackingTable from "@/components/BackingTable";

// Stub InfoTooltip

// Stub BackingAccordionRow

// Stub BackingRow



export default function Backing() {

  return (
    <div>
      {/* Card with stats */}
      <div className="w-full bg-white rounded-xl shadow mb-8 overflow-hidden">
        {/* ...stat blocks only... */}
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
      </div>

      {/* Table outside the card, now full width */}
      <div 
        className="w-full bg-white rounded-xl shadow relative"
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
          marginBottom: 32,
        }}
      >
        {/* Table section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 24 }}>
          <span>POOL BACKING</span>
          <a style={{ color: '#888', fontFamily: 'PPFraktionMono, monospace', fontSize: 16, alignItems: 'center', marginBottom: 8 }}>
            Proofs ↗
          </a>
        </div>
        <BackingTable />
      </div>
    </div>
  );
}