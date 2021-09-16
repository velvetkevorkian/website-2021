import Head from 'next/head'
import { getPostBySlug, getAllPosts, markdownToHtml } from 'lib/api'
import pageTitle from 'lib/pageTitle'
import { PostType, Post } from 'types'
import { DefaultDetail } from 'components/ArticleDetail'

export default function ArticleDetail({ post }: { post: Post}) {
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

export async function getStaticProps({ params }) {
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

export async function getStaticPaths(){
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

export const config = {
  unstable_runtimeJS: false
}
