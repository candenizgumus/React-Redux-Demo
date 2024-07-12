import React, { useEffect, useState } from 'react'
import UserCard from '../components/molecules/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { IUser } from '../models/IUser'
import { ReducerType } from '../store';
import { fetchGetAllUsers } from '../store/features/userSlice';



function User() {
    const dispatch = useDispatch<ReducerType>();
    const users:IUser[] = useSelector((state: any) => state.user.userList);
    

    useEffect(() => {
       dispatch(fetchGetAllUsers()) 
    },[dispatch])
    


  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <input  type="text" className="form-control" placeholder='İşaretlenecek İndex Numarası' />
            </div>
        </div>
        <div className="row">

                {
                    users.map((user,index) =>{
                        return (
                            <div className="col-3" key={index}>
                                <UserCard image={user.image} name={user.firstName}  />
                            </div>
                        )
                    })
                }


            
        </div>
    </div>
  )
}

export default User