import Link from 'next/link'
import { PostType } from '../types'
type PaginationProps = {
totalPages: number, currentPage: number, postType: PostType
}

export default function Pagination({totalPages, currentPage, postType}: PaginationProps): JSX.Element {
  const arr = Array.from({ length: totalPages }, (_, page) => ({
    page: page + 1,
    current: page === currentPage - 1
  }))

  return (
    <ul>
      {arr.map(i => (
        <li>
          { i.current
            ? <span>{i.page}</span>
            : (<Link href={`/${postType}/page/${i.page}`}>
              <a>{i.page}</a>
            </Link>
            )
          }
        </li>
      ))}
    </ul>
  )
}
