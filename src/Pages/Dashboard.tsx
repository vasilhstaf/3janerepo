import { BorrowStats } from "@/components/BorrowStats";
import { CreditCard } from "@/components/CreditCard";
import { CreditInfo } from "@/components/CreditInfo";

function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 50, 
      background: 'white', 
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      padding: '0 16px',
      fontFamily: 'PP Fraktion Mono, monospace'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '32px' }}>
        <img 
          src="/3Janelogoadd.png" 
          alt="3Jane Logo" 
          style={{ 
            height: '32px', 
            width: '32px', 
            borderRadius: '4px',
            objectFit: 'contain'
          }} 
        />
      </div>
      
      {/* Navigation Links */}
      <ul style={{ 
        display: 'flex', 
        gap: '24px', 
        marginLeft: '32px', 
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontSize: '16px',
        fontWeight: 'normal'
      }}>
        <li><span style={{ color: '#374151', cursor: 'pointer' }}>Borrow</span></li>
        <li><span style={{ color: '#374151', cursor: 'pointer' }}>Lend</span></li>
        <li><a href="https://docs.3jane.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none' }}>Docs</a></li>
        <li><a href="https://discord.gg/3jane" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none' }}>Discord</a></li>
      </ul>
      
      {/* Spacer */}
      <div style={{ flex: 1 }} />
      
      {/* Connect Wallet Button */}
      <button style={{ 
        background: '#0029FF', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        padding: '8px 16px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'normal',
        fontFamily: 'PP Fraktion Mono, monospace'
      }}>
        Connect Wallet
      </button>
    </nav>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen text-sm">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 space-y-[12px] mt-[40px]">
        <BorrowStats />
        <CreditCard />
        <CreditInfo />
      </main>
    </div>
  );
} 