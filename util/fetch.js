import { token } from "../util/token";

export default async function f(url, options = {}) {
  options.headers = options.headers || {};
  options.headers.Authorization = `Bearer ${token}`;
  const resp = await fetch(url, options);
  if (resp.status === 429) {
    const retryAfter = resp.headers.get("retry-after") || "1";
    console.log("rate limited, retrying in", retryAfter);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(f(url, options));
      }, parseInt(retryAfter, 10) * 1000);
    });
  } else {
    return resp;
  }
}
