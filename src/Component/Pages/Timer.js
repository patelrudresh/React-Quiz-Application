import React, { useEffect } from 'react'

function Timer({dispatch,secondRemaining}) {
     
    const mins= Math.floor(secondRemaining/60);
    const second=secondRemaining%60;
    useEffect( function(){
         const id=   setInterval(function(){
                   dispatch({type:"tick"})
            },1000)

            return ()=>clearInterval(id);
    }, [dispatch])
    return (
        <div>
           <h3>  {mins <10&& "0"}{mins}: {second <10&& "0"}{second}</h3>
        </div>
    )
}

export default Timer
