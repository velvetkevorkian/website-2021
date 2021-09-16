import Head from 'next/head'
import { postsForPage } from 'lib/api'
import pageTitle from 'lib/pageTitle'
import capitalise from 'lib/capitalise'
import { PostType } from 'types'
import ArticleListingPage from 'components/ArticleListingPage'

export default function ArticleIndexPage({ postType, posts, page, totalPages }) {
  return (
    <>
      <Head>
        <title>{pageTitle({ pageTitle: capitalise(postType) })}</title>
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

export async function getStaticProps({ params }) {
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

export async function getStaticPaths() {
  const paths = [PostType.Blog, PostType.Project].map(p => ({
    params: {
      postType: p,
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const config = {
  unstable_runtimeJS: false
}
