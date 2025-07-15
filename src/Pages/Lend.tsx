import Footer from "@/components/Footer";
import LendPanel from "@/components/LendPanel";
import SimpleNavbar from "@/components/SimpleNavbar";

export default function Lend() {
  return (
    <div className="min-h-screen text-sm">
      {/* Background image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          background: "url('/image.png') center center / cover no-repeat",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <SimpleNavbar active="lend" />
        <main style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '104px 24px 24px 24px',
          fontFamily: 'PP Fraktion Mono, monospace'
        }}>
          <div style={{ marginBottom: 40 }}>
          <LendPanel />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
} 