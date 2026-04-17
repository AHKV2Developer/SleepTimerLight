self.addEventListener('fetch', (event) => {
  // This is a "pass-through" service worker.
  // It satisfies the PWA requirement without caching files.
  event.respondWith(fetch(event.request));
});
