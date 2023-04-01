import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from './Comment.module.css'

export function Comment({ 
    content,
    onDeleteComment
}) {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => onDeleteComment(content)

    const handleLikeComment = () => setLikeCount(likeCount + 1)

    function handleLike() {
        setLikeCount(likeCount + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} avatarUrl="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong> 
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}