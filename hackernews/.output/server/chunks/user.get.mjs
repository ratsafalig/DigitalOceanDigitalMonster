import { defineEventHandler, getQuery, createError } from 'h3';
import { c as configureSWRHeaders, b as baseURL } from './constants.mjs';
import { $fetch } from 'ofetch';

async function fetchUser(id) {
  const user = await $fetch(`${baseURL}/user/${id}.json`);
  return {
    id: user.id,
    karma: user.karma,
    created_time: user.created,
    about: user.about
  };
}
const user_get = defineEventHandler((event) => {
  configureSWRHeaders(event);
  const { id } = getQuery(event);
  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: "Must provide a user ID."
    });
  }
  return fetchUser(id);
});

export { user_get as default };
//# sourceMappingURL=user.get.mjs.map
