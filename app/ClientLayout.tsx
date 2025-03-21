"use client"

import { useEffect } from 'react';
import { addVisitor } from './utils/visitors';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Cek apakah sudah tracking di sesi ini
        const hasTracked = localStorage.getItem('visitorTracked');
        const lastTracked = localStorage.getItem('lastTrackedTime');
        const now = new Date().getTime();
        
        // Jika belum tracking atau sudah lebih dari 24 jam
        if (!hasTracked || !lastTracked || (now - parseInt(lastTracked)) > 24 * 60 * 60 * 1000) {
          const userAgent = window.navigator.userAgent;
          const browser = detectBrowser(userAgent);
          const os = detectOS(userAgent);
          
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          
          await addVisitor({
            ip: data.ip,
            browser,
            os
          });

          // Simpan status tracking
          localStorage.setItem('visitorTracked', 'true');
          localStorage.setItem('lastTrackedTime', now.toString());
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return <>{children}</>;
}

function detectBrowser(userAgent: string): string {
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) return 'Internet Explorer';
  return 'Unknown';
}

function detectOS(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'MacOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  return 'Unknown';
} 