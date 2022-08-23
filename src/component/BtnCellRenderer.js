import React from 'react';

export const BtnCellRenderer = (props)=>{
  
    const onclickHandler = ()=>{

        console.log(props);
        props.clicked(props.data);
    }

    return(
        <button class="btn btn-danger" onClick={onclickHandler}>Remove</button>
    ) 
}