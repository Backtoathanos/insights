import { l as locales, d as defaultLocale } from './siteSettings.json_BHn8gCmX.mjs';

function getLocaleFromUrl(url) {
  const [, locale] = url.pathname.split("/");
  if (locales.includes(locale)) return locale;
  return defaultLocale;
}
function filterCollectionByLanguage(collection, locale, removeLocale = true) {
  if (!locales.includes(locale)) {
    console.error(`Language ${locale} not found in locales array`);
    return [];
  }
  const filteredCollection = collection.filter((item) => item.id.startsWith(`${locale}/`));
  if (removeLocale) {
    filteredCollection.forEach((item) => {
      item.slug = removeLocaleFromSlug(item.slug);
    });
  }
  return filteredCollection;
}
function removeLocaleFromSlug(slug) {
  const SlugElements = slug.split("/");
  const newSlugElements = SlugElements.filter(
    //@ts-ignore
    (element) => !locales.includes(element)
  );
  return newSlugElements.join("/");
}

export { filterCollectionByLanguage as f, getLocaleFromUrl as g, removeLocaleFromSlug as r };
