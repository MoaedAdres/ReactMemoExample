import React from 'react'

const Child1 = ({ child1State, child1Function }) => {
    console.log("Child1 is rendered")
    return (
        <div className='text-red-800'>Child1</div>
    )
}

export default React.memo(Child1)