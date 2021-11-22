let staticCacheData = 'static-app-1'
let dynamicCacheDate = 'dynamic-app-1'
const assetUrls = [
  '/index.html',
  '/src',
  '../src/index.tsx',
  '/',
  '../src/Components/Сhat/index',
]

this.addEventListener('install', async (event) => {
  const cache = await caches.open(staticCacheData)
  await cache.addAll(assetUrls)
})

this.addEventListener('activate', async (event) => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheData)
      .filter((name) => name !== dynamicCacheDate)
      .map((name) => caches.delete(name))
  )
})

this.addEventListener('fetch', (event) => {
  const { request } = event

  const url = new URL(request.url)

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(networkFirst(request))
  }
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? (await fetch(request))
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheDate)

  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? (await caches.match('/offline.html'))
  }
}
