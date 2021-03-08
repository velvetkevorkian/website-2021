import { PostType, Post } from '../types'

type ListingProps = {
  posts: Array<Post>,
  postType: PostType
}

export default function ArticleListing({ posts, postType }: ListingProps): JSX.Element {
  if (!posts.length) {
    return <>no {postType}s found.</>
  }

  return (
    <ul>
      {posts.map(p => (
        <li key={p.slug}>
          <a href={`/${postType}/${p.slug}`}>
            {p.title}
          </a>
        </li>
      ))}
  </ul>
  )
}
