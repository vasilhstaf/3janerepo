
export default function Banner() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#0029FF',
        backgroundImage: 'url(/Background.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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