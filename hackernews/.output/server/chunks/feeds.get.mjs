import { defineEventHandler, getQuery, createError } from 'h3';
import { c as configureSWRHeaders, b as baseURL } from './constants.mjs';
import { $fetch } from 'ofetch';

const feedsInfo = {
  news: { title: "News", pages: 10 },
  newest: { title: "Newest", pages: 12 },
  ask: { title: "Ask", pages: 2 },
  show: { title: "Show", pages: 2 },
  jobs: { title: "Jobs", pages: 1 }
};
const validFeeds = Object.keys(feedsInfo);

const feedUrls = {
  ask: "askstories",
  jobs: "jobstories",
  show: "showstories",
  newest: "newstories",
  news: "topstories"
};
async function fetchFeed(feed, page = "1") {
  const { fetchItem } = await import('./item.get.mjs');
  const entries = Object.values(
    await $fetch(`${baseURL}/${feedUrls[feed]}.json`)
  ).slice(Number(page) * 10, Number(page) * 10 + 10);
  return Promise.all(entries.map((id) => fetchItem(id)));
}
const feeds_get = defineEventHandler((event) => {
  configureSWRHeaders(event);
  const { page = "1", feed = "news" } = getQuery(event);
  if (!validFeeds.includes(feed) || String(Number(page)) !== page) {
    throw createError({
      statusCode: 422,
      statusMessage: `Must provide one of ${validFeeds.join(", ")} and a valid page number.`
    });
  }
  return fetchFeed(feed, page);
});

export { feeds_get as default };
//# sourceMappingURL=feeds.get.mjs.map
