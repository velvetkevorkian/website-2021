import Head from 'next/head'
import { pagePathsForType, postsForPage } from 'lib/api'
import pageTitle from 'lib/pageTitle'
import capitalise from 'lib/capitalise'
import ArticleListingPage from 'components/ArticleListingPage'
import { PostType, ArticleListingProps, ArticleListingStaticProps } from 'types'

export default function ArticleIndexPage({ postType, posts, page, totalPages }: ArticleListingProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>{pageTitle({ pageTitle: capitalise(postType), pageNumber: page })}</title>
      </Head>
      <ArticleListingPage
        postType={postType}
        posts={posts}
        page={page}
        totalPages={totalPages}
      />
    </>
  )
}

export async function getStaticProps({ params }: { params: { page: string, postType: PostType }}): Promise<ArticleListingStaticProps> {
  const { postType, page } = params
  const pageNumber = parseInt(page)
  const { posts, totalPages } = postsForPage(pageNumber, postType)
  return {
    props: {
      posts,
      postType,
      page: pageNumber,
      totalPages
    }
  }
}

type StaticPaths = {
  paths: Array<{
    params: {
      page: string,
      postType: PostType
    }
  }>,
  fallback: boolean
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = [
    ...pagePathsForType(PostType.Blog),
    ...pagePathsForType(PostType.Lab),
    ...pagePathsForType(PostType.Project)
  ]

  return {
    paths,
    fallback: false,
  }
}
