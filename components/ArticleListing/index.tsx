import { PostType, Post } from 'types'
import styles from './styles.module.css'

type ListingProps = {
  posts: Array<Post>,
  postType: PostType
}

export default function ArticleListing({ posts, postType }: ListingProps): JSX.Element {
  if (!posts?.length) {
    return <>no {postType}s found.</>
  }

  return (
    <ul className={styles['article-list']}>
      {posts.map(p => (
        <li key={p.slug}>
          <a href={`/${postType}/${p.slug}`}>
            { p.image && (
              <img
                src={`/images/${p.image}`}
                alt=""
              />
            )}
            {p.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
