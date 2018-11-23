/**
 * Prefix route path depending on whether we're hosted on GH Pages or not
 */
export default function(path) {
  if (process.env.NODE_ENV === "production") {
    return "/tagify" + path;
  } else {
    return path;
  }
}
