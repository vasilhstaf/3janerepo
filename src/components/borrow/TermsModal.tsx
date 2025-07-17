import React, { useState } from "react";

export function TermsModal({ open, onClose, onAgree, inputAmount = '0' }: { open: boolean; onClose: () => void; onAgree: () => void; inputAmount?: string }) {
  const [checked, setChecked] = useState(false);

  if (!open) return null;

  const termsText = `
Welcome! These Terms of Use ('Terms') govern your access to and use of the products, services and related information and materials (collectively, the 'Products') offered by Wildcat Foundation ('Company,' 'we,' 'us,' or 'our').
By accessing or using our Products, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Products.
## 1.2 Loan Agreement Terms
By proceeding with this loan request for ${inputAmount} USDC, you acknowledge and agree to the following:
1. **Credit Assessment**: You authorize us to assess your creditworthiness using various data sources including but not limited to your connected bank accounts, cryptocurrency holdings, and on-chain activity.
2. **Interest and Fees**: You agree to pay interest at the rate determined by your Jane Score and any applicable fees as outlined in our fee schedule.
3. **Repayment Obligation**: You are obligated to repay the borrowed amount plus accrued interest according to the terms of your loan agreement.
4. **Collateral Requirements**: Your loan may be secured by your connected assets and cryptocurrency holdings.
5. **Default Consequences**: Failure to meet repayment obligations may result in liquidation of collateral and other remedies as permitted by law.
6. **Regulatory Compliance**: You agree to comply with all applicable laws and regulations governing this transaction.
7. **Data Usage**: You consent to our collection, use, and sharing of your data as described in our Privacy Policy.
8. **Risk Acknowledgment**: You acknowledge that borrowing involves financial risk and you have the ability to repay this loan.
By signing this message, you confirm that you have read, understood, and agree to these terms and conditions.`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(240, 240, 240, 0.05)',
      backdropFilter: 'blur(32px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 4,
        maxWidth: 420,
        maxHeight: 676  ,
        width: '100%',
        padding: 20,
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)',
        position: 'relative',
        fontFamily: 'PP Fraktion Mono, monospace',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: 'none',
            border: 'none',
            fontSize: 24,
            color: '#888',
            cursor: 'pointer',
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 20, marginBottom: 24, letterSpacing: 1 }}>
          3Jane Terms Of Use
        </div>
        <div style={{
          overflowY: 'auto',
          fontSize: 12,
          color: '#888',
          marginBottom: 16,
          whiteSpace: 'pre-line',
          lineHeight: '1.2',
        }}>
          {termsText}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <input
            type="checkbox"
            id="agree"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            style={{ width: 20, height: 20, marginRight: 12 }}
          />
          <label htmlFor="agree" style={{ fontSize: 12, color: '#888', cursor: 'pointer' }}>
            I agree to the terms and conditions of the loan agreement.
          </label>
        </div>
        <button
          onClick={() => { if (checked) { onAgree(); onClose(); } }}
          disabled={!checked}
          style={{
            width: '100%',
            background: checked ? '#111827' : '#ECEFF2',
            color: checked ? '#fff' : '#888',
            fontSize: 14,
            fontWeight: 500,
            border: 'none',
            borderRadius: 4,
            padding: '12px 0',
            cursor: checked ? 'pointer' : 'not-allowed',
            opacity: checked ? 1 : 0.7,
            fontFamily: 'PP Fraktion Mono, monospace',
          }}
        >
          Sign and continue
        </button>
      </div>
    </div>
  );
} 