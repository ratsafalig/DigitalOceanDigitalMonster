import { defineEventHandler, getQuery, createError } from 'h3';
import { c as configureSWRHeaders, b as baseURL } from './constants.mjs';
import { $fetch } from 'ofetch';

async function fetchItem(id, withComments = false) {
  const item = await $fetch(`${baseURL}/item/${id}.json`);
  item.kids = item.kids || {};
  return {
    id: item.id,
    user: item.by,
    points: item.score,
    time: item.time,
    content: item.text,
    url: item.url,
    type: item.type,
    title: item.title,
    comments_count: Object.values(item.kids).length,
    comments: withComments ? await Promise.all(
      Object.values(item.kids).map(
        (id2) => fetchItem(id2, withComments)
      )
    ) : []
  };
}
const item_get = defineEventHandler((event) => {
  configureSWRHeaders(event);
  const { id } = getQuery(event);
  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: "Must provide a item ID."
    });
  }
  if (Number.isNaN(+id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Item ID mush a number but got " + id
    });
  }
  return fetchItem(id, true);
});

export { item_get as default, fetchItem };
//# sourceMappingURL=item.get.mjs.map
