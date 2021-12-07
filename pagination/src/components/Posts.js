import React from 'react'

const Posts = ({posts,loading}) => {
    if(loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
                {posts.map(item => (
                    <p key={item.id}>
                        {item.title}
                    </p>
                ))}
        </div>
    )
}

export default Posts
