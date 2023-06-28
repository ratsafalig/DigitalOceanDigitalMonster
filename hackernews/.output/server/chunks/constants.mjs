import { setHeader } from 'h3';

function configureSWRHeaders(event) {
  setHeader(event, "Cache-Control", "s-maxage=10, stale-while-revalidate");
}

const baseURL = "https://hacker-news.firebaseio.com/v0";

export { baseURL as b, configureSWRHeaders as c };
//# sourceMappingURL=constants.mjs.map
