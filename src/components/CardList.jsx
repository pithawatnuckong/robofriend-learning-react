import React from 'react'
import Card from './Card'

import "../App.css"

const CardList = ({robots}) => {
    const cardComponent = robots.map(robot => {
        return <Card key={robot.id} name={robot.name} email={robot.email} />
    })

    return (
        <div className='px-6 flex flex-wrap justify-center gap-4'>
            {cardComponent}
        </div>
    )

}

export default CardList;