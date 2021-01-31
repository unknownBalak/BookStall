import React from 'react'

function buttonChild({onclick}) {
    return (
            <button  onClick={onclick} type="button" >Toggle Show/Hide</button>
    )
}

export default buttonChild
