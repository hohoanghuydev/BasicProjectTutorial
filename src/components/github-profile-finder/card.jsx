import React from 'react'

const CardProfile = ({ user }) => {
    const { avatar_url, html_url, name, created_at } = user

    return (
        <div className='card-container'>
            <div className='github-img'>
                <img src={avatar_url} alt="" />
            </div>
            <div className='main-content'>
                <p>{name}</p>

                <p>User joined on {created_at}</p>
            </div>
        </div>
    )
}

export default CardProfile
