import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { useState } from "react";

export function Post({
    author,
    content,
    publishedAt
}) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    }) 

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(
            comment => comment != commentToDelete
        )
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatarUrl={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime="2022-05-11 08:13:30">
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    switch(line.type) {
                        case 'paragraph':
                            return <p key={line.content}>{line.content}</p>
                        case 'link':
                            return <p key={line.content}><a href="#"></a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}