import React from 'react'
import Cars from './Cars';
import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getEndadv, getVipcars, getPremium } from '../store/actions';


const Home = () => {
  const vipcars = useSelector(state=> state.vipcars);
  const end = useSelector(state=> state.end);
  const premium = useSelector(state=> state.premium);

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getVipcars());
      dispatch(getEndadv());
      dispatch(getPremium());
  },[])

  
  return (
    <div className="home">
      <Cars cars={vipcars} title="VIP ELANLAR"/>
      <div className='end'>
        <Cars cars={end} title="SON ELANLAR" />
      </div>
        <Cars cars={premium} title="PREMIUM ELANLAR" />
    </div>
  );
}

export default Home
