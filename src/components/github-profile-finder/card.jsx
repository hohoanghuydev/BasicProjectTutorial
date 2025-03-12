import React from 'react'

const CardProfile = ({ user }) => {
    const { avatar_url, html_url, name, created_at } = user

    return (
        <div>
            <div>
                <img src={avatar_url} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <a href={html_url}>link to profile</a>
                <p>Date: {created_at}</p>
            </div>
        </div>
    )
}

export default CardProfile
