// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function getSketch(slug: string) {
  switch (slug) {
  case 'wrong-way-to-draw-a-line':
    return import('@velvetkevorkian/wrong-way-to-draw-a-line')

  default:
    throw new Error(`No sketch found for slug '${slug}'`)
  }
}
