export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScH3nsKg-9FvVY89XXarRZOStrdVr6QT240sbkAu3CEZ06qTQ/viewform";

export const formUrl = (source: string) =>
  `${GOOGLE_FORM_URL}?usp=pp_url&utm_source=lp&utm_content=${source}`;
