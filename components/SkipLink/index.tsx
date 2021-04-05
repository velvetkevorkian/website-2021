import styles from './style.module.css'

type Props = {
  targetId?: string,
  children?: React.ReactNode,
}

export default function SkipLink({ targetId = '#content', children = 'Skip to content' }: Props): JSX.Element {
  return (
    <a
      className={styles['skip-link']}
      href={targetId}
    >
      {children}
    </a>
  )
}
