import React from 'react';

export default function SimpleLogin() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dashboard';
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Background image */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          background: "url('/Onboarding background.png') center center / cover no-repeat",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Main content */}
      <div style={{ 
        position: "relative", 
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
      <div style={{ 
        backgroundColor: '#F4F4F4', 
        borderRadius: '2px', 
        boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.25)', 
        padding: '32px',
        width: '100%',
        maxWidth: '400px',
        fontFamily: 'PPFraktionMono, monospace'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#111827' }}>
            Welcome back
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            Login with your Apple or Google account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Social Login Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                type="button"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px'
                }}
              >
                <span style={{ fontSize: '16px' }}>🍎</span>
                Login with Apple
              </button>
              <button 
                type="button"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '14px'
                }}
              >
                <span style={{ fontSize: '16px' }}>G</span>
                Login with Google
              </button>
            </div>

            {/* Separator */}
            <div style={{ 
              position: 'relative', 
              textAlign: 'center', 
              margin: '16px 0'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: '#d1d5db'
              }}></div>
              <span style={{
                backgroundColor: '#F4F4F4',
                padding: '0 12px',
                color: '#6b7280',
                fontSize: '14px',
                position: 'relative',
                zIndex: 1
              }}>
                Or continue with
              </span>
            </div>

            {/* Email and Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: '#111827'
                }}>
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="m@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <label style={{ 
                    fontSize: '14px', 
                    fontWeight: '500',
                    color: '#111827'
                  }}>
                    Password
                  </label>
                  <a href="#" style={{ 
                    fontSize: '14px', 
                    color: '#0029FF', 
                    textDecoration: 'none'
                  }}>
                    Forgot your password?
                  </a>
                </div>
                <input 
                  type="password" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#0029FF',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              Login
            </button>

            {/* Sign up link */}
            <div style={{ textAlign: 'center', fontSize: '14px', color: '#6b7280' }}>
              Don't have an account?{" "}
              <a href="#" style={{ color: '#0029FF', textDecoration: 'none' }}>
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
} 