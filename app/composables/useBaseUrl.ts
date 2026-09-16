/**
 * Prepends the app's baseURL (e.g. `/<repo-name>/` on GitHub Pages, `/` locally)
 * to a path. Needed for assets that aren't routed through @nuxt/image, such as
 * native <video>/<source> src attributes.
 */
export function useBaseUrl() {
  const { app } = useRuntimeConfig()

  function withBase(path: string) {
    const base = app.baseURL.endsWith('/') ? app.baseURL.slice(0, -1) : app.baseURL
    return `${base}${path}`
  }

  return { withBase }
}
