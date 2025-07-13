import { useState } from "react";

export function CreditInfo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded bg-white p-0 shadow-sm font-mono max-w-[390px] mx-auto border-none mt-[12px]" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
      {/* Dropdown Header */}
      <button
        type="button"
        className="w-full h-10 flex items-center justify-between cursor-pointer px-4 focus:outline-none bg-transparent border-none shadow-none rounded-none"
        onClick={() => setOpen(!open)}
        style={{ fontFamily: 'PP Fraktion Mono, monospace', boxShadow: 'none', border: 'none', background: 'transparent', borderRadius: 0 }}
      >
        <div className="flex items-center gap-2">
          <img src="/Credit Info.svg" alt="Credit Info" className="w-5 h-5" />
          <span className="text-[12px] font-bold">Credit Info</span>
        </div>
        <span className="text-xl">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className="pt-1 space-y-1 p-5">
          {/* Credit Score Section */}
          <div>
            <div className="flex items-center gap-1 text-[#8F9396] text-[10px] mb-1 uppercase tracking-widest font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
              CREDIT SCORE <span className="text-xs">ⓘ</span>
            </div>
            <div className="border-b border-[#E5E7EB] mb-1"></div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-[6px]">
                {/* 3Jane icon */}
                <img src="/3Jane score.svg" alt="3Jane" className="w-5 h-5" />
                <span className="text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>3Jane Score <span className="text-xs">ⓘ</span> <span className="text-[#FFD600]">⚠️</span></span>
              </div>
              <span className="text-[12px] text-[#8F9396] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>640/732</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-[6px]">
                {/* Credit Karma icon */}
                <img src="/Credit Karma.svg" alt="Credit Karma" className="w-5 h-5" />
                <span className="text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>Credit Karma <span className="text-xs">ⓘ</span></span>
                <span className="bg-[#0029FF] text-white text-[10px] px-2 py-0.5 font-bold ml-1 rounded-1px h-3 flex items-center" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
                  1x-4.5x Boost
                </span>
              </div>
              <button className="flex items-center gap-1 border border-[#E5E7EB] rounded px-2 py-1 text-[12px] font-mono text-[#8F9396] bg-white h-6" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
                <img src="/Credit Karma.svg" alt="Credit Karma" className="w-4 h-4" /> CONNECT
              </button>
            </div>
          </div>
          {/* Assets Section */}
          <div className="pt-1 mt-2">
            <div className="flex items-center gap-1 text-[#8F9396] text-[10px] mb-1 uppercase tracking-widest font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
              ASSETS <span className="text-xs">ⓘ</span>
            </div>
            <div className="border-b border-[#E5E7EB] mb-1"></div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-[6px]">
                {/* Onchain icon */}
                <img src="/Onchain.svg" alt="Onchain" className="w-5 h-5" />
                <span className="text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>Onchain</span>
              </div>
              <button className="flex items-center gap-1 border border-[#E5E7EB] rounded px-2 py-1 text-[12px] font-mono text-[#8F9396] bg-white h-6" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
                <img src="/Onchain.svg" alt="Onchain" className="w-4 h-4" /> CONNECT
              </button>
            </div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-[6px]">
                {/* Bank icon */}
                <img src="/Bank.svg" alt="Bank" className="w-5 h-5" />
                <span className="text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>Bank</span>
                <span className="bg-[#0029FF] text-white text-[10px] px-2 py-0.5 rounded-1px font-bold ml-1 h-3 flex items-center" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
                  1x-4.5x Boost
                </span>
              </div>
              <button className="flex items-center gap-1 border border-[#E5E7EB] rounded px-2 py-1 text-[12px] font-mono text-[#8F9396] bg-white h-6" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
                <img src="/Bank.svg" alt="Bank" className="w-4 h-4" /> CONNECT
              </button>
            </div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-[6px]">
                {/* Coinbase icon */}
                <img src="/Coinbase.svg" alt="Coinbase" className="w-5 h-5" />
                <span className="text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>Coinbase</span>
              </div>
              <button className="flex items-center gap-1 px-2 py-1 text-[12px] font-mono text-[#8F9396] bg-white h-6" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
                COMING SOON
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 