import React from 'react'

const Hello = () => {
    // // with jsx
    // return (
    //     <div className='helloClass'>
    //         <h1>Hello There</h1>
    //     </div>
    // )


    // without jsx
    return React.createElement(
        'div', 
        {id: 'Hello', className: 'Hello'},
        React.createElement('h1', null, "Hello There")
        )
}
export default Hello;