import { useState } from "react"

function TwitterFollowCard ({formatUsername, username = 'unknown', name}) {
    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follow-card-follow is-following' : 'tw-follow-card-follow'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar' alt="avatar" src={`https://unavatar.io/${username}`}/>
                <div className='tw-follow-card-header-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-header-infoUserName'>{formatUsername(username)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-follow-card-text">{text}</span>
                    <span className="tw-follow-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
export default TwitterFollowCard