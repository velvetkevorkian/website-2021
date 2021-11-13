export default function isActive(path: string, href: string) {
  if (path === href) return true
  if (href === '/') return false
  return path.startsWith(href)
}
