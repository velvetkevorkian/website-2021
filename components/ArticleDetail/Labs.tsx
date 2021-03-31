import { useRef, useEffect } from 'react'
import { Post } from '../../types'
import getSketch from '../../lib/getSketch'

export default function LabsDetail(props: {post: Post}): JSX.Element {
  const el = useRef(null)
  const { post } = props

  useEffect(() => {
    if (!el.current) return
    let cleanup: VoidFunction
    async function initSketch() {
      const { default: init } = await getSketch(post.slug)
      cleanup = init(el.current)
    }
    initSketch()
    return (() => {
      cleanup()
    })
  }, [])

  return (
    <>
      <h1>{post.title} </h1>
      <div ref={el} />
    </>
  )

}
