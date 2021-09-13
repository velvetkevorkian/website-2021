import Link from 'next/link'
import { PostType } from 'types'
import styles from './styles.module.css'

type Props = {
  totalPages: number,
  currentPage: number,
  postType: PostType
}

export default function Pagination({totalPages, currentPage, postType}: Props): JSX.Element {
  const arr = Array.from({ length: totalPages }, (_, page) => ({
    page: page + 1,
    current: page + 1 === currentPage
  }))

  return (
    <ul className={styles.pagination}>
      {arr.map(i => (
        <li className={styles['pagination-item']} key={i.page}>
          { i.current
            ? <span className={styles.current}>
              <span className="visually-hidden">
                Page&nbsp;
              </span>
              {i.page}
            </span>
            : (
              <Link href={`/${postType}/page/${i.page}`}>
                <a>
                  <span className="visually-hidden">
                    Page&nbsp;
                  </span>
                  {i.page}
                </a>
              </Link>
            )
          }
        </li>
      ))}
    </ul>
  )
}
