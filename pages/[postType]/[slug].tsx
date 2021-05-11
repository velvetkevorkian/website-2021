import Head from 'next/head'
import { getPostBySlug, getAllPosts, markdownToHtml } from 'lib/api'
import pageTitle from 'lib/pageTitle'
import { PostType, Post } from 'types'
import { DefaultDetail } from 'components/ArticleDetail'

export default function ArticleDetail({ post }: { post: Post}): React.ReactNode {
  function renderPost(post: Post){
    switch (post.postType) {
    default:
      return <DefaultDetail post={post} />
    }
  }

  return (
    <>
      <Head>
        <title>{ pageTitle({ pageTitle: post.title }) }</title>
      </Head>
      { renderPost(post) }
    </>
  )
}

type StaticProps = {
  props: {
    postType: PostType,
    post: Post
  }
}
type Params = {
  params: {
    postType: PostType,
    slug: string
  }
}
export async function getStaticProps({ params }: Params): Promise<StaticProps> {
  const { slug, postType } = params
  const post = getPostBySlug(slug, postType)
  const { content } = post
  post.contentHtml = await markdownToHtml(content)
  return {
    props: {
      post,
      postType
    }
  }
}

type StaticPath = {
  params: {
    slug: string
  }
}
type StaticPaths = {
  paths: Array<StaticPath>,
  fallback: boolean
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const posts = [
    ...getAllPosts(PostType.Blog),
    ...getAllPosts(PostType.Project),
  ]
  const paths = posts.map(p => {
    return {
      params: {
        slug: p.slug,
        postType: p.postType,
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
