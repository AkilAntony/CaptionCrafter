import React from 'react'

function Button({styles,buttonText,event}) {
  return (
    <div>
        <button 
            className={styles}
            onClick={event}>
                {buttonText}
        </button>
    </div>
   
  )
}

export default Button