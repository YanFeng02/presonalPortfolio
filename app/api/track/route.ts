import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  try {
    const body = await req.json();
    const {
      page, referrer, userAgent, language,
      screenResolution, viewportSize, devicePixelRatio, colorDepth,
      platform, hardwareConcurrency, deviceMemory, maxTouchPoints,
      connectionType, downlink,
      timezone, localTime,
    } = body;

    // Device type
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent || '');
    const isTablet = /iPad|Tablet/i.test(userAgent || '');
    const deviceType = isTablet ? '📟 Tablet' : isMobile ? '📱 Mobile' : '🖥️ Desktop';

    const browserMatch = (userAgent || '').match(
      /(Chrome|Safari|Firefox|Edge|OPR|SamsungBrowser)\/[\d.]+/
    );
    const browser = browserMatch
      ? browserMatch[1].replace('OPR', 'Opera').replace('SamsungBrowser', 'Samsung')
      : 'Unknown';

    // OS from user agent
    const osMatch = (userAgent || '').match(
      /\(([^)]+)\)/
    );
    const osPart = osMatch?.[1] || '';
    let os = 'Unknown';
    if (/Windows NT 10/.test(osPart)) os = 'Windows 11/10';
    else if (/Windows/.test(osPart)) os = 'Windows';
    else if (/Mac OS X/.test(osPart)) os = 'macOS';
    else if (/Android/.test(osPart)) os = 'Android';
    else if (/iPhone|iPad/.test(osPart)) os = 'iOS';
    else if (/Linux/.test(osPart)) os = 'Linux';

    // Geo from Vercel headers
    const country = req.headers.get('x-vercel-ip-country') || '?';
    const city    = req.headers.get('x-vercel-ip-city')    || '';
    const region  = req.headers.get('x-vercel-ip-country-region') || '';
    const location = [city, region, country].filter(Boolean).join(', ') || 'Unknown';

    // Real IP
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : (req.headers.get('x-real-ip') || 'Unknown');

    const ref = referrer && referrer !== ''
      ? referrer.replace(/^https?:\/\//, '').split('/')[0]
      : 'Direct';

    const touch = maxTouchPoints > 0 ? `Touch (${maxTouchPoints} pts)` : 'No touch';
    const network = [connectionType, downlink ? `${downlink} Mbps` : null].filter(Boolean).join(' · ') || '?';
    const memory = deviceMemory ? `${deviceMemory} GB` : '?';
    const cores = hardwareConcurrency ? `${hardwareConcurrency} cores` : '?';

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            title: '👀 New Portfolio Visitor',
            color: 0x5865f2,
            fields: [
              { name: '📍 Location', value: location, inline: true },
              { name: '🌐 IP', value: `\`${ip}\``, inline: true },
              { name: '🕐 Timezone', value: timezone || '?', inline: true },

              { name: '📄 Page', value: page || '/', inline: true },
              { name: '🔗 Referrer', value: ref, inline: true },
              { name: '🗣️ Language', value: language || '?', inline: true },

              { name: '💻 Device', value: `${deviceType} · ${browser}`, inline: true },
              { name: '🖥️ OS', value: `${os} (${platform || '?'})`, inline: true },
              { name: '📐 Screen', value: `${screenResolution} · ${devicePixelRatio}x DPR`, inline: true },

              { name: '🪟 Viewport', value: viewportSize || '?', inline: true },
              { name: '🎨 Color Depth', value: colorDepth ? `${colorDepth}-bit` : '?', inline: true },
              { name: '👆 Touch', value: touch, inline: true },

              { name: '⚡ Network', value: network, inline: true },
              { name: '🧠 RAM', value: memory, inline: true },
              { name: '🔢 CPU', value: cores, inline: true },

              { name: '🕒 Local Time', value: localTime || '?', inline: false },
            ],
            timestamp: new Date().toISOString(),
            footer: { text: 'Portfolio Tracker' },
          },
        ],
      }),
    });
  } catch {
    // Silently fail — never break the site over tracking
  }

  return NextResponse.json({ ok: true });
}
