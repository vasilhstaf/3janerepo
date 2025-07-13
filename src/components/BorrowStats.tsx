export function BorrowStats() {
  return (
    <div className="max-w-[390px] w-full mx-auto rounded bg-white shadow-sm px-3 py-2 flex flex-col gap-2" style={{ fontFamily: 'PP Fraktion Mono, monospace', height: '66px' }}>
      <div className="grid grid-cols-3 gap-[1px] text-center items-start">
        {/* Borrowed */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-1 mb-0 mt-0">
            <span
              style={{
                color: '#8F9396',
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '-0.28px',
                lineHeight: 'normal',
              }}
            >
              Borrowed
            </span>
            <span
              title="Info"
              style={{ color: '#8F9396', fontSize: 12, marginLeft: 2 }}
            >
              ⓘ
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-0 mt-0">
            <img src="/Frame 2.svg" alt="JANE" width={16} height={16} />
            <span
              style={{
                color: '#111827',
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '-0.8px',
                lineHeight: 'normal',
                WebkitTextStrokeWidth: '0.1px',
                WebkitTextStrokeColor: '#111827',
              }}
            >
              59,000.45
            </span>
          </div>
          <div className="flex items-center w-full justify-center" style={{ gap: '1.61px', marginTop: '-2px' }}>
            <div className="rounded bg-gray-200 relative" style={{ width: '60%', height: 3 }}>
              <div
                className="rounded bg-blue-600 absolute top-0 left-0"
                style={{ width: '60%', height: 3 }}
              />
            </div>
            <span
              style={{
                color: '#8F9396',
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: '-0.28px',
                marginTop: '-3px',
              }}
            >
              100K
            </span>
          </div>
        </div>
        {/* Borrow APY */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-1 mb-0 mt-0">
            <span
              style={{
                color: '#8F9396',
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '-0.8px',
                lineHeight: 'normal',
              }}
            >
              Borrow APY
            </span>
            <span
              title="Info"
              style={{ color: '#8F9396', fontSize: 12, marginLeft: 4 }}
            >
              ⓘ
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-0">
            <span
              style={{
                color: '#111827',
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '-0.8px',
                lineHeight: 'normal',
                WebkitTextStrokeWidth: '0.1px',
                WebkitTextStrokeColor: '#111827',
              }}
            >
              0%
            </span>
          </div>
        </div>
        {/* $JANE Balance */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-1 mb-0 mt-0">
            <span
              style={{
                color: '#8F9396',
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '-0.28px',
                lineHeight: 'normal',
              }}
            >
              Rewards
            </span>
            <span
              title="Info"
              style={{ color: '#8F9396', fontSize: 12, marginLeft: 4 }}
            >
              ⓘ
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-0 mt-0">
            <img src="/Frame 1.svg" alt="USDC" width={16} height={16} />
            <span
              style={{
                color: '#111827',
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '-0.28px',
                lineHeight: 'normal',
                WebkitTextStrokeWidth: '0.1px',
                WebkitTextStrokeColor: '#111827',
              }}
            >
              1000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 