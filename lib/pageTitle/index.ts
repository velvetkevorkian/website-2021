type Params = {
  pageNumber?: number
  pageTitle?: string
  siteName?: string
}

export default function pageTitle({
  pageNumber,
  pageTitle,
  siteName = 'Kyle Macquarrie'
}: Params = { siteName: 'Kyle Macquarrie'}): string {
  if (pageNumber && pageTitle) {
    return `${pageTitle} | Page ${pageNumber} | ${siteName}`
  }
  if (pageTitle) {
    return `${pageTitle} | ${siteName}`
  }
  return siteName
}
