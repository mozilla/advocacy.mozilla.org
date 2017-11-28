/**
 * This yields either sessionStorage, or when that particular
 * API is not available, yields an object with limited API
 * that behaves _like_ sessionStorage for the duration of
 * the app, but does not persist across hard reloads.
 */
const storage = (() => {
  try {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage;
    }
  }

  catch (e) {
    // No sessionStorage is currently available.
    // This is not a true "error" in terms of UX.
  }

  return {
    map: {},
    getItem: (name => storage.map[name]),
    setItem: ((name,value) => storage.map[name]=value)
  }
})();

export default storage;
