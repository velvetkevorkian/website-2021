export default function capitalise(input: string): string {
  return input.replace(/^\w/, c => c.toUpperCase())
}
