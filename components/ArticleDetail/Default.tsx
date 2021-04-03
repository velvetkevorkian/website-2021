import { Post } from 'types'

export default function DefaultDetail(props: {post: Post}): JSX.Element {
  const { post } = props

  return (
    <>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.contentHtml }} />
    </>
  )
}
