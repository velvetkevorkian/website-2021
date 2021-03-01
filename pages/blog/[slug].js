export default function ({ post }) {
  return <h1>{post.slug}</h1>
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: {
        slug: params.slug,
      },
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        slug: 'test-blog',
      },
    }],
    fallback: false,
  }
}
