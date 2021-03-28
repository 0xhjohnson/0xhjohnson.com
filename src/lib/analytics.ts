export const GA_TRACKING_ID = process.env.GA_TRACKING_ID || '';

export function pageview(url: string) {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    anonymize_ip: true
  });
}
