import { fakeMarkdown } from 'lib/api'
import SkipLink from 'components/SkipLink'

export default function StyleGuide({ htmlContent }: { htmlContent: string }): JSX.Element {
  return (
    <>
      <details>
        <summary>Text styling</summary>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </details>

      <details>
        <summary>Skip Link</summary>
        <div style={{ position: 'relative', padding: '0 0 2em' }}>
          <SkipLink />
        </div>
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
