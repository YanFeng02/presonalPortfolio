'use client';

import { useEffect } from 'react';

export default function Tracker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const nav = navigator as Navigator & {
      connection?: { effectiveType?: string; downlink?: number };
      deviceMemory?: number;
    };

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        language: navigator.language,
        // Screen & display
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        devicePixelRatio: window.devicePixelRatio,
        colorDepth: window.screen.colorDepth,
        // Device hints
        platform: navigator.platform,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: nav.deviceMemory,
        maxTouchPoints: navigator.maxTouchPoints,
        // Network
        connectionType: nav.connection?.effectiveType,
        downlink: nav.connection?.downlink,
        // Time
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        localTime: new Date().toLocaleString(),
      }),
    }).catch(() => {});
  }, []);

  return null;
}
