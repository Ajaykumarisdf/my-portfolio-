// ── Analytics Module ─────────────────────────────────────────
// Handles Google Analytics 4 + custom event tracking + webhook notifications

const GA_ID = import.meta.env.VITE_GA_ID || ''; // Set in .env: VITE_GA_ID=G-XXXXXXXXXX
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || ''; // Discord or Telegram webhook

// ── Initialize GA4 ──────────────────────────────────────────
export function initAnalytics() {
    if (!GA_ID) {
        console.log('[Analytics] No GA_ID set. Add VITE_GA_ID to .env to enable tracking.');
        return;
    }

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
        page_title: document.title,
        send_page_view: true,
    });

    console.log('[Analytics] GA4 initialized:', GA_ID);
}

// ── Track Custom Events ─────────────────────────────────────
export function trackEvent(eventName, params = {}) {
    // GA4 event
    if (window.gtag) {
        window.gtag('event', eventName, params);
    }

    // Console log for debugging
    console.log(`[Analytics] Event: ${eventName}`, params);
}

// ── Track Resume Download ───────────────────────────────────
export function trackResumeDownload() {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Track in GA4
    trackEvent('resume_download', {
        event_category: 'engagement',
        event_label: 'Resume Downloaded',
        timestamp,
    });

    // Send webhook notification
    sendWebhookNotification({
        event: '📄 Resume Downloaded!',
        timestamp,
        page: window.location.href,
        referrer: document.referrer || 'Direct',
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
    });
}

// ── Track Section Views ─────────────────────────────────────
export function trackSectionView(sectionName) {
    trackEvent('section_view', {
        event_category: 'navigation',
        event_label: sectionName,
    });
}

// ── Track External Link Clicks ──────────────────────────────
export function trackLinkClick(linkName, url) {
    trackEvent('link_click', {
        event_category: 'engagement',
        event_label: linkName,
        link_url: url,
    });
}

// ── Track WhatsApp Click ────────────────────────────────────
export function trackWhatsAppClick() {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    trackEvent('whatsapp_click', {
        event_category: 'contact',
        event_label: 'WhatsApp Contact Clicked',
    });

    sendWebhookNotification({
        event: '💬 WhatsApp Contact Clicked!',
        timestamp,
        page: window.location.href,
        referrer: document.referrer || 'Direct',
    });
}

// ── Webhook Notification (Discord / Telegram) ───────────────
async function sendWebhookNotification(data) {
    if (!WEBHOOK_URL) return;

    try {
        // Detect if it's Discord or Telegram
        if (WEBHOOK_URL.includes('discord.com')) {
            await sendDiscordWebhook(data);
        } else if (WEBHOOK_URL.includes('api.telegram.org')) {
            await sendTelegramWebhook(data);
        } else {
            // Generic webhook (POST JSON)
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
        }
    } catch (err) {
        console.log('[Analytics] Webhook error:', err.message);
    }
}

// ── Discord Webhook ─────────────────────────────────────────
async function sendDiscordWebhook(data) {
    const embed = {
        title: data.event,
        color: 0x8b5cf6, // lavender
        fields: [
            { name: '🕐 Time', value: data.timestamp, inline: true },
            { name: '🔗 Referrer', value: data.referrer || 'Direct', inline: true },
            { name: '📱 Screen', value: data.screenSize || 'N/A', inline: true },
            { name: '🌐 Page', value: data.page || 'N/A', inline: false },
        ],
        footer: { text: 'Ajaykumar Portfolio Analytics' },
        timestamp: new Date().toISOString(),
    };

    await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] }),
    });
}

// ── Telegram Webhook ────────────────────────────────────────
async function sendTelegramWebhook(data) {
    const message = [
        data.event,
        `🕐 ${data.timestamp}`,
        `🔗 Referrer: ${data.referrer || 'Direct'}`,
        `📱 Screen: ${data.screenSize || 'N/A'}`,
        `🌐 ${data.page || ''}`,
    ].join('\n');

    await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
    });
}

// ── Section Scroll Observer ─────────────────────────────────
// Auto-tracks which sections the visitor views
export function initSectionTracking() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    trackSectionView(entry.target.id);
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
}
