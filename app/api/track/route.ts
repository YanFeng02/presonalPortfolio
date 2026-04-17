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
    const deviceType = isTablet ? 'Tablet' : isMobile ? 'Mobile' : 'Desktop';

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
    const network = [connectionType, downlink ? `${downlink} Mbps` : null].filter(Boolean).join(', ') || '?';
    const memory = deviceMemory ? `${deviceMemory} GB` : '?';
    const cores = hardwareConcurrency ? `${hardwareConcurrency} cores` : '?';

    const row = (label: string, value: string) =>
      `${label.padEnd(14)}${value}`;

    const table = [
      '[ LOCATION & NETWORK ]',
      row('Location',  location),
      row('IP',        ip),
      row('Timezone',  timezone || '?'),
      '',
      '[ PAGE ]',
      row('Page',      page || '/'),
      row('Referrer',  ref),
      row('Language',  language || '?'),
      '',
      '[ DEVICE ]',
      row('Type',      deviceType),
      row('Browser',   browser),
      row('OS',        `${os} (${platform || '?'})`),
      row('Screen',    `${screenResolution}  DPR: ${devicePixelRatio}x`),
      row('Viewport',  viewportSize || '?'),
      row('Color',     colorDepth ? `${colorDepth}-bit` : '?'),
      row('Touch',     touch),
      '',
      '[ HARDWARE ]',
      row('RAM',       memory),
      row('CPU',       cores),
      row('Network',   network),
      '',
      '[ TIME ]',
      row('Local',     localTime || '?'),
    ].join('\n');

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            title: 'New Portfolio Visitor',
            color: 0x5865f2,
            description: `\`\`\`\n${table}\n\`\`\``,
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
