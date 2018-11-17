import { token } from "../util/token";

export default function f(url, options = {}) {
  options.headers = options.headers || {};
  options.headers.Authorization = `Bearer ${token}`;
  return fetch(url, options);
}
