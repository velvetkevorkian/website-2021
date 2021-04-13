import { fakeMarkdown } from 'lib/api'
import SkipLink from 'components/SkipLink'
import Pagination from 'components/Pagination'
import Center from 'components/Center'
import { PostType } from 'types'
import Head from 'next/head'
import pageTitle from 'lib/pageTitle'

export default function StyleGuide({ htmlContent }: { htmlContent: string }) {
  return (
    <>
      <Head>
        <title>{pageTitle({ pageTitle: 'Style Guide'})}</title>
      </Head>
      <details>
        <summary>Text styling in a {`<Center />`}</summary>
        <Center>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Center>
      </details>

      <details>
        <summary>Skip Link</summary>
        <div style={{ position: 'relative', padding: '0 0 2em' }}>
          <SkipLink />
        </div>
      </details>

      <details>
        <summary>Pagination</summary>
        <Pagination
          postType={PostType.Blog}
          currentPage={4}
          totalPages={8}
        />
      </details>
    </>

  )
}

export async function getStaticProps(): Promise<{ props: {
  htmlContent: string
}}> {
  const htmlContent = await fakeMarkdown()

  return {
    props: {
      htmlContent
    }
  }
}
