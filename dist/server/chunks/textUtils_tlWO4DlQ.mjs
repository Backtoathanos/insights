import { l as locales, a as localeMap } from './siteSettings.json_BHn8gCmX.mjs';

function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
function humanize(text) {
  const slugifiedText = slugify(text);
  return slugifiedText.replace(/-/g, " ").replace(
    // upper case first letter of every word, and lower case the rest
    /\w\S*/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );
}
function formatDate(date, locale) {
  let localeString = "en-US";
  if (locales.includes(locale)) {
    localeString = localeMap[locale];
  }
  return new Date(date).toLocaleDateString(localeString, {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export { formatDate as f, humanize as h, slugify as s };
