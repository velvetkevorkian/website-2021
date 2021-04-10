import Head from 'next/head'
import { postsForPage } from 'lib/api'
import pageTitle from 'lib/pageTitle'
import { PostType, ArticleListingProps, ArticleListingStaticProps } from 'types'
import ArticleListingPage from 'components/ArticleListingPage'

export default function ArticleIndexPage({ postType, posts, page, totalPages }: ArticleListingProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>{pageTitle({ pageTitle: postType })}</title>
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

type ArticleListingParams = {
  params : {
    postType: PostType
  }
}

// TODO: this (and other getStaticProps calls) should probably use Next's types?
export async function getStaticProps({ params }: ArticleListingParams): Promise<ArticleListingStaticProps> {
  const { postType } = params
  const { posts, totalPages } = postsForPage(1, postType)
  return {
    props: {
      postType,
      posts,
      page: 1,
      totalPages
    }
  }
}

type StaticPaths = {
  paths: Array<{
    params: {
      postType: string
    }
  }>,
  fallback: boolean
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const paths = [PostType.Blog, PostType.Lab, PostType.Project].map(p => ({
    params: {
      postType: p,
    }
  }))

  return {
    paths,
    fallback: false,
  }
}
