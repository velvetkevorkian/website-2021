import { Post } from 'types'
import Center from 'components/Center'

export default function DefaultDetail(props: {post: Post}): JSX.Element {
  const { post } = props

  return (
    <Center>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.contentHtml }} />
    </Center>
  )
}
