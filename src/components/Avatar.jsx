import styles from './Avatar.module.css'

export function Avatar({
    hasBorder = true, 
    imageUrl
}) {
    const avatar = [
        styles.avatar,
        hasBorder && styles.avatarBorder
    ].join(' ')

    return (
        <img 
            className={avatar}
            src={imageUrl}
        />
    )
}