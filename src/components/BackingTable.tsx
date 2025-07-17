import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

// Stub InfoTooltip
function InfoTooltip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={className} style={{ borderBottom: "1px dotted #888", cursor: "help" }}>
      {children}
    </span>
  );
}

// Stub BackingAccordionRow
function BackingAccordionRow({ item, isLast }: { item: any, isLast: boolean }) {
  return (
    <TableRow className={isLast ? '' : '!border-b-2 !border-gray-400'} style={{ height: 56 }}>
      <TableCell colSpan={4} style={{ paddingLeft: 24, paddingRight: 24 }}>
        <div>Accordion Row for {item.invoice}</div>
      </TableCell>
    </TableRow>
  );
}

// Stub BackingRow
function BackingRow({ item, isLast }: { item: any, isLast: boolean }) {
  return (
    <TableRow className={isLast ? '' : '!border-b-2 !border-gray-400'} style={{ height: 56 }}>
      <TableCell style={{ paddingLeft: 24, paddingRight: 24 }}>
        <img src="/JP.png" alt={item.invoice} style={{ display: 'inline-block', width: 24, height: 24, marginRight: 8, verticalAlign: 'middle' }} />
        {item.invoice}
      </TableCell>
      <TableCell style={{ paddingLeft: 24, paddingRight: 24 }}>
        <img src={`/public/${item.paymentStatus}`} alt="asset" className="inline-block w-6 h-6 align-middle" />
      </TableCell>
      <TableCell style={{ paddingLeft: 24, paddingRight: 24 }}>{item.paymentMethod}</TableCell>
      <TableCell style={{ paddingLeft: 24, paddingRight: 24, textAlign: 'right' }}>{item.totalAmount}</TableCell>
    </TableRow>
  );
}

const columns = [
  {
    accessorKey: "invoice",
    header: () => (
      <span
        style={{
          background: "#0029FF", // bright blue
          color: "#fff",
          fontFamily: "'PP Fraktion Mono', monospace",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: 1,
          padding: "1px 6px",
          borderRadius: 2,
          display: "inline-block",
        }}
      >
        ON CREDIT &bull; 60% ($60M)
      </span>
    ),
    size: 120,
  },
  {
    accessorKey: "paymentStatus",
    header: "Assets",
    size: 80,
    cell: (info: any) => (
      <img src={`/public/${info.getValue()}`} alt="asset" className="inline-block w-6 h-6 align-middle" />
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "Backing %",
    size: 100,
  },
  {
    accessorKey: "totalAmount",
    header: "Value",
    size: 100,
    cell: (info: any) => <span style={{ textAlign: 'right', display: 'block' }}>{info.getValue()}</span>,
  },
];

const invoices = [
  {
    invoice: "JP Morgan Chase",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "Bank of America",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "Ethereum",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "Arbitrum",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "Optimism",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "Berachain",
    paymentStatus: "sUSD3.svg",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function BackingTable() {
  const data = React.useMemo(() => invoices, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const bankCoinbaseOnchainTotalAssets = 0; // stub value

  return (
    <div className="w-full overflow-x-auto" style={{ minWidth: '100%', maxWidth: '100%' }}>
      <Table style={{ minWidth: '100%', maxWidth: '100%' }}>
        <TableHeader className="border-none [&>tr:first-child]:pl-1">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} style={{ height: 56 }}>
              {headerGroup.headers.map((header, index) => (
                <TableHead
                  key={header.id}
                  style={{ width: header.getSize(), textAlign: index === 3 ? 'right' : 'left', paddingLeft: 24, paddingRight: 24 }}
                  className="text-xs"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
          {/* Horizontal line below header */}
          <tr>
            <td colSpan={4} className="p-0">
              <div className="m-0 p-0 w-full" style={{ height: 1, background: '#ECEFF2' }} />
            </td>
          </tr>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, idx, arr) => {
            const item = row.original;
            const isLast = idx === arr.length - 1;
            return (
              <React.Fragment key={item.invoice}>
                <BackingRow item={item} isLast={isLast} />
                {!isLast && (
                  <tr>
                    <td colSpan={4} className="p-0">
                      <div className="m-0 p-0 w-full" style={{ height: 1, background: '#ECEFF2' }} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
} 