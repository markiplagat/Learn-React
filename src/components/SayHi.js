import React from 'react'

function SayHi() {
    for (var i = 0; i < 3; i++) {
        // eslint-disable-next-line no-loop-func
        setTimeout(() => console.log(i), 1);
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
    return (
        <div>
            {2 * Math.PI * 20}
        </div>
    )
}

export default SayHi
