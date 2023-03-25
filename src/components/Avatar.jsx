import styles from './Avatar.module.css'

export function Avatar({
    hasBorder = true, 
    avatarUrl
}) {
    const avatar = [
        styles.avatar,
        hasBorder && styles.avatarBorder
    ].join(' ')

    return (
        <img 
            className={avatar}
            src={avatarUrl}
        />
    )
}