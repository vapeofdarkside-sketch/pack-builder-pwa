const CACHE = "packbuilder-v1";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./sw.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
  function selectAllOnFocus(e){
  const t = e.target;
  // iOS braucht oft ein kleines Delay, sonst markiert er nicht sauber
  setTimeout(() => {
    try { t.select(); } catch(_) {}
  }, 0);
}

["focus", "click"].forEach(evt => {
  el.series.addEventListener(evt, selectAllOnFocus);
  el.parallel.addEventListener(evt, selectAllOnFocus);
});
});
