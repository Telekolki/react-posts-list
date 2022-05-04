import React from 'react'
import classes from './MyModal.module.css'

function MyModal({children, visible, setVisible}) {

  let rootClass = classes.myModal;
  if (visible) {
    rootClass = [classes.myModal, classes.active].join(' ');
  }
  
  return (
    <div className={rootClass} onClick={() => setVisible(false)}>
        <div className={classes.myModalContent} onClick={ (e) => e.stopPropagation()}>
            {children}
        </div>
        
    </div>
  )
}

export default MyModal