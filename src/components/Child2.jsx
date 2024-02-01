import React from 'react'

const Child2 = ({ child2State, child2Function }) => {
    console.log("Child2 is rendered")

    return (
        <div>Child2</div>
    )
}

export default React.memo(Child2)