import {useState, useEffect, useRef} from 'react'

const DynamicListContainer = ({data, type, orientation}) => {
    const info = useRef(data);
    const direction = useRef(orientation);
    const listType = useRef(type);
    const count = useRef(0);

    if(listType.current !== 'ul' && listType.current !== 'ol') listType.current = 'ul';
    if(direction.current !== 'horizontal' && direction.current !== 'vertical') direction.current = 'vertical';

    function listCreate(info){
        return (
            <>
                {info.map(data=>{
                    {count.current = count.current+1}
                    return (
                        <li key={count.current}>{data}</li>  
                    )
                })}
            </>
        )
    }

    return (
        <>
            {(type === 'ul') ? <ul className={direction.current}>{listCreate(info.current)}</ul> : <ol className={direction.current}>{listCreate(info.current)}</ol>}
        </>
    )   
}

export default DynamicListContainer;