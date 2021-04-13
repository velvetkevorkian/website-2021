import styles from './styles.module.css'

type Props = {
  children: React.ReactNode,
}

export default function Center({ children }: Props) {
  return (
    <div className={styles.center}>
      {children}
    </div>
  )
}
