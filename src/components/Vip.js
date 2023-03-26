import React from 'react'
import Box from './Box'
import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getVipcars } from '../store/actions';
import kapital from "../img/kapital.png"


const Vip = () => {
    const vipcars = useSelector(state=> state.vipcars);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVipcars())
    },[])

  return (
    <div className='container'>
        <div className='vip'>
            <div className='title'>
                <h1>VIP ELANLAR</h1>
                <img src={kapital} alt="err"/>
            </div> 
            {vipcars ? (
                <div className="row">
                    {vipcars.map(vipcar => (
                        <Box key={vipcar.id} vipcars={vipcar}  />
                    ))}
                </div>
            ) : (
                <div className="loading">
                    Loading...
                </div>
            )}
        </div>
    </div>
  )
}

export default Vip