export type CookiePreference = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

export const defaultPreferences: CookiePreference = {
  necessary: true,
  analytics: false,
  marketing: false,
  personalization: false,
};
