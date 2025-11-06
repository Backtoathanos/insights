import { b as getCollection } from './translationUtils_XhrKexoJ.mjs';
import { f as filterCollectionByLanguage, r as removeLocaleFromSlug } from './localeUtils_hlzOdIQk.mjs';
import { s as slugify } from './textUtils_tlWO4DlQ.mjs';

async function getAllPosts(lang) {
  const posts = await getCollection("blog", ({ data, id }) => {
    return data.draft !== true;
  });
  let filteredPosts;
  if (lang) {
    filteredPosts = filterCollectionByLanguage(posts, lang);
  } else {
    filteredPosts = posts;
  }
  const formattedPosts = formatPosts(filteredPosts, {
    filterOutFuturePosts: true,
    sortByDate: true,
    limit: void 0,
    removeLocale: true
  });
  return formattedPosts;
}
function formatPosts(posts, {
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = void 0,
  removeLocale = true
} = {}) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { pubDate } = post.data;
    if (filterOutFuturePosts && new Date(pubDate) > /* @__PURE__ */ new Date()) return acc;
    acc.push(post);
    return acc;
  }, []);
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }
  if (removeLocale) {
    filteredPosts.forEach((post) => {
      post.slug = removeLocaleFromSlug(post.slug);
    });
  }
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
function countItems(items) {
  const countedItems = items.reduce((acc, item) => {
    const val = acc[slugify(item)] || 0;
    return {
      ...acc,
      [slugify(item)]: val + 1
    };
  }, {});
  return countedItems;
}
function sortByValue(jsObj) {
  var array = [];
  for (var i in jsObj) {
    array.push([i, jsObj[i]]);
  }
  const sorted = array.sort((a, b) => {
    return b[1] - a[1];
  });
  return sorted;
}

export { countItems as c, getAllPosts as g, sortByValue as s };
