"use client";

import React, { useState, useEffect } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard
 * Engineered for mobile-first performance using Next.js App Router logic.
 * Features: Pulsing status indicator, Task card, and High-Affordance Action Button.
 */
export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Status pulse animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Design System Tokens
  const theme = {
    brandOrange: '#FF8C00',
    successGreen: '#28A745',
    bgLight: '#F8F9FA',
    cardWhite: '#FFFFFF',
    textPrimary: '#2D3436',
    textSecondary: '#636E72',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  };

  return (
    <div style={{
      backgroundColor: '#1A1A1A', // Dark Backdrop for desktop viewing
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
    }}>
      {/* Mobile Frame Container */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        height: '100vh',
        backgroundColor: theme.bgLight,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
        
        {/* Header Section */}
        <div style={{
          padding: '40px 20px 20px 20px',
          textAlign: 'center',
          backgroundColor: theme.cardWhite,
          borderBottom: '1px solid #EEE'
        }}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo" 
            style={{ 
              width: '80px', 
              height: 'auto', 
              marginBottom: '12px' 
            }}
          />
          <h1 style={{ 
            color: theme.brandOrange, 
            fontSize: '22px', 
            margin: '0', 
            fontWeight: '800',
            letterSpacing: '-0.5px'
          }}>
            mishTee Delivery Mitra
          </h1>
        </div>

        {/* Content Area */}
        <div style={{ padding: '24px', flex: 1 }}>
          
          {/* Online Status Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'fit-content',
            margin: '0 auto 32px auto',
            backgroundColor: theme.cardWhite,
            padding: '10px 20px',
            borderRadius: '100px',
            boxShadow: theme.shadow,
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              backgroundColor: theme.successGreen,
              borderRadius: '50%',
              marginRight: '10px',
              opacity: isPulsing ? 1 : 0.3,
              boxShadow: isPulsing ? `0 0 12px ${theme.successGreen}` : 'none',
              transition: 'all 0.5s ease-in-out',
            }} />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: theme.textPrimary 
            }}>
              Agent Online
            </span>
          </div>

          {/* Task Card */}
          <div style={{
            backgroundColor: theme.cardWhite,
            borderRadius: '20px',
            padding: '24px',
            boxShadow: theme.shadow,
            borderLeft: `8px solid ${theme.brandOrange}`,
            position: 'relative'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              color: theme.brandOrange,
              textTransform: 'uppercase',
              marginBottom: '8px',
              letterSpacing: '1px'
            }}>
              Active Delivery
            </div>
            <div style={{ 
              fontSize: '20px', 
              color: theme.textPrimary, 
              fontWeight: '500' 
            }}>
              Deliver to: <br />
              <strong style={{ fontSize: '24px', fontWeight: '900' }}>Arjun Mehta</strong>
            </div>
            <div style={{ 
              marginTop: '16px', 
              color: theme.textSecondary, 
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '8px' }}>📍</span> 
              Whitefield Industrial Area, Phase 2
            </div>
          </div>

        </div>

        {/* Action Button Footer */}
        <div style={{
          padding: '20px',
          backgroundColor: theme.cardWhite,
          borderTop: '1px solid #EEE'
        }}>
          <button 
            onClick={() => console.log('Navigation Started')}
            style={{
              width: '100%',
              backgroundColor: theme.brandOrange,
              color: theme.cardWhite,
              border: 'none',
              padding: '20px',
              borderRadius: '16px',
              fontSize: '18px',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255, 140, 0, 0.25)',
              transition: 'transform 0.2s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Start Navigation
          </button>
          
          <div style={{ 
            textAlign: 'center', 
            marginTop: '15px', 
            fontSize: '12px', 
            color: '#CCC' 
          }}>
            v1.0.2 • Secure Session
          </div>
        </div>

      </div>
    </div>
  );
}
