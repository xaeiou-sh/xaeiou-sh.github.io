import posthog from 'posthog-js';

export const initPostHog = () => {
  // Only initialize PostHog in browser environment
  if (typeof window !== 'undefined') {
    const apiKey = import.meta.env.VITE_POSTHOG_KEY;
    const host = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

    if (apiKey) {
      posthog.init(apiKey, {
        api_host: host,
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle pageviews manually with React Router
        capture_pageleave: true,
      });
    } else {
      console.warn('PostHog API key not found. Analytics will not be tracked.');
    }
  }
};

export { posthog };
