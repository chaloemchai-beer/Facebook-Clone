import React from 'react'
import Story from './Story'
import './StoryReal.css'

function StoryReal() {
    return (
        <div className="storyReal">
            <Story
                image="https://images.pexels.com/photos/6017203/pexels-photo-6017203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.pexels.com/videos/6429644/nashville-6429644.jpeg?auto=compress&cs=tinysrgb&h=130"
                title="John Jordan"
            />
            <Story
                image="https://images.pexels.com/photos/5273076/pexels-photo-5273076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.pexels.com/photos/3030507/pexels-photo-3030507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Tomas Tomsuns"
            />
            <Story
                image="https://images.pexels.com/photos/3850639/pexels-photo-3850639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.pexels.com/photos/6468883/pexels-photo-6468883.jpeg?auto=compress&cs=tinysrgb&h=130"
                title="Hook Java"
            />
            <Story
                image="https://images.pexels.com/photos/5063828/pexels-photo-5063828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.pexels.com/videos/6287710/christmas-christmas-atmosphere-christmas-backgrounds-christmas-lights-6287710.jpeg?auto=compress&cs=tinysrgb&h=130"
                title="NoName"
            />
            <Story
                image="https://images.pexels.com/photos/4775972/pexels-photo-4775972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                profileSrc="https://images.pexels.com/photos/6486826/pexels-photo-6486826.jpeg?auto=compress&cs=tinysrgb&h=130"
                title="My History"
            />
        </div>
    )
}

export default StoryReal
