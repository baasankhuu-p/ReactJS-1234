import React, { useState } from "react";
import './style.css'
const MyButton = (props) => {
    const [historyComment,setHistoryComment] = useState([]);
    const [count,setCount] = useState(0);
    const ClickHandler = (e) =>{
        setCount(count + 1);
        setHistoryComment([...historyComment, e])
    }
    return (
        <div className='MyBtn'>
            <span>{props.info} </span><br/>
            <input 
                type = "button"
                value={props.name ? `${count}) ${props.name}` : "(:"}
                onClick = {()=>ClickHandler(props.show)}
                />
                <div>
                    {
                        historyComment.map((el,index)=><div key={index}>{el}-{index}</div>)
                    }
                </div>
        </div>
    )
    };

export default MyButton;