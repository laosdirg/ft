export function push(href){
  if (typeof history !== 'undefined') return history.pushState(null, null, href)
}
export function replace(...args){
  if (typeof history !== 'undefined') return history.replaceState(...args)
}
