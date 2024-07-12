import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function UserCard(props:{image:string, name:string, index:number}) {
    const backgroundColor = useSelector((state: any) => state.user.indexUser === props.index ? 'red' : 'white');
    // useEffect(() => {
      
    // },[backgroundColor])


  return (
    <div style={{backgroundColor: backgroundColor}} className="row p-2 shadow mt-5 mb-5 text-center justify-content-center">
        <img src={props.image} alt="" style={{borderRadius:"50%",width:"100px"}}/>
        <label style={{margin:"5px"}}>{props.name}</label>
    </div>
  )
}

export default React.memo(UserCard) 