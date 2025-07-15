"use client"

export type BankRow = {
  bank: string;
  bankIcon: string; // path to icon
  assets: string[]; // array of asset icon paths
  backing: string; // percent string
  value: string; // value string
  proofs?: string; // optional proof text
  external?: boolean; // if true, show external link icon
};

const data: BankRow[] = [
  {
    bank: 'JP Morgan Chase',
    bankIcon: '/public/Bank.svg',
    assets: ['/public/USD3.svg'],
    backing: '55%',
    value: '$100M',
    proofs: 'zkTLS proofs',
    external: true,
  },
  {
    bank: 'Bank of America',
    bankIcon: '/public/Bank.svg',
    assets: ['/public/USD3.svg'],
    backing: '55%',
    value: '$100M',
    proofs: 'zkTLS proofs',
    external: true,
  },
  {
    bank: 'Coinbase',
    bankIcon: '/public/Coinbase.svg',
    assets: ['/public/btc.png', '/public/ethereum.svg', '/public/solana.svg'],
    backing: '15%',
    value: '$50M',
    proofs: 'zkTLS proofs',
    external: true,
  },
];

export function DataTableDemo() {
  return (
    <div className="w-full bg-white p-0 m-0">
      <table className="modern-table w-full text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="pl-0 py-4 font-bold text-xs tracking-widest uppercase bg-white border-0">Bank</th>
            <th className="px-6 py-4 font-bold text-xs tracking-widest uppercase bg-white border-0">Assets</th>
            <th className="px-6 py-4 font-bold text-xs tracking-widest uppercase bg-white border-0">Backing %</th>
            <th className="px-6 py-4 font-bold text-xs tracking-widest uppercase bg-white border-0">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-200 last:border-0 bg-white">
              {/* Bank column */}
              <td className="pl-0 py-5 text-base font-fraktionmono text-left align-middle">
                <div className="flex items-center gap-2">
                  <img src={row.bankIcon} alt="" className="w-7 h-7 flex-shrink-0" />
                  <span className="font-medium text-base">{row.bank}</span>
                  {row.proofs && (
                    <span className="pl-4 text-gray-400 text-sm font-normal">
                      {row.proofs}{row.external && <span className="ml-1">↗</span>}
                    </span>
                  )}
                </div>
              </td>
              {/* Assets column */}
              <td className="px-6 py-5 text-base font-fraktionmono text-left align-middle">
                <div className="flex items-center gap-2">
                  {row.assets.map((icon, i) => (
                    <img key={i} src={icon} alt="asset" className="w-7 h-7" />
                  ))}
                </div>
              </td>
              {/* Backing % column */}
              <td className="px-6 py-5 text-base font-fraktionmono text-left align-middle">{row.backing}</td>
              {/* Value column */}
              <td className="px-6 py-5 text-base font-fraktionmono text-left align-middle">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 