import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function CreditCard() {
  const [mode, setMode] = useState<'borrow' | 'repay'>('borrow');

  return (
    <div className="mt-[12px]">
      <Card className="rounded bg-white p-[18px] shadow-sm font-mono max-w-[390px] mx-auto border-none" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
        <CardHeader className="mb-0 p-0" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
          <div className="flex justify-between items-center mb-8" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
            <div className="text-[12px] font-normal tracking-tight text-black font-mono" style={{ letterSpacing: '0', fontFamily: 'PP Fraktion Mono, monospace' }}>//ACCESS MONEY MARKET</div>
            <div className="flex gap-[6px] bg-[#F5F6F7] rounded-[1.546px] p-[2px]" style={{ height: '24px', fontFamily: 'PP Fraktion Mono, monospace' }}>
              <button
                className={`px-1 h-full py-0 rounded-[1.546px] font-mono text-[12px] font-normal tracking-tight border-none shadow-none ${mode === 'borrow' ? 'bg-white text-[#181C23]' : 'bg-transparent text-[#A3A7AD]'}`}
                style={{ letterSpacing: '0.1px', fontFamily: 'PP Fraktion Mono, monospace' }}
                onClick={() => setMode('borrow')}
              >
                Borrow
              </button>
              <button
                className={`px-1 h-full py-0 rounded-[1.546px] font-mono text-[12px] font-normal tracking-tight border-none shadow-none ${mode === 'repay' ? 'bg-white text-[#181C23]' : 'bg-transparent text-[#A3A7AD]'}`}
                style={{ fontFamily: 'PP Fraktion Mono, monospace' }}
                onClick={() => setMode('repay')}
              >
                Repay
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-0" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
          <div className="w-full flex justify-center mb-2">
            <div className="text-[70px] font-regular text-[#0029FF] flex items-center gap-[2px] font-mono min-w-0" style={{ letterSpacing: '-2px', fontFamily: 'PP Fraktion Mono, monospace' }}>
              <span>$</span>
              <span>0</span>
            </div>
          </div>
          <div className="text-[12px] text-[#8F9396] tracking-tight mb-12 font-mono" style={{ letterSpacing: '0', fontFamily: 'PP Fraktion Mono, monospace' }}>
            Max Borrow 8.23K
          </div>
          <button
            className="w-full bg-[#0029FF] text-white text-[12px] font-mono tracking-tight py-3 rounded mb-8 flex items-center justify-center gap-2"
            style={{ letterSpacing: '0.1px', fontFamily: 'PP Fraktion Mono, monospace' }}
          >
            {mode === 'borrow' ? (
              <>
                Borrow <img src="/Frame 1.svg" alt="USDC" width={16} height={16} /> 59,000.45 USDC
              </>
            ) : (
              <>
                Repay <img src="/Frame 1.svg" alt="USDC" width={16} height={16} /> 59,000.45 USDC
              </>
            )}
          </button>
          <div className="w-full flex flex-col gap-2 mt-0 font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>
            <div className="flex justify-between items-center text-[#8F9396] text-[12px] font-normal mb-1 font-mono" style={{ letterSpacing: '0', fontFamily: 'PP Fraktion Mono, monospace' }}>
              <span className="flex items-center gap-1 font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>Credit Line Utilization <span className="text-xs">ⓘ</span></span>
              <span className="text-black text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>25.0% → 28.0%</span>
            </div>
            <div className="flex justify-between items-center text-[#8F9396] text-[12px] font-normal font-mono" style={{ letterSpacing: '0', fontFamily: 'PP Fraktion Mono, monospace' }}>
              <span className="flex items-center gap-1 font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>TX Fee <span className="text-xs">ⓘ</span></span>
              <span className="text-black text-[12px] font-mono" style={{ fontFamily: 'PP Fraktion Mono, monospace' }}>$10</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}