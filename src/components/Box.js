import React from 'react'
import {addWishList,deleteWishList} from '../store/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Box = (vipcars) => {
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });

    const dispatch = useDispatch();
    const wishList = useSelector(state => state.wishList);

    const inWishList =
    wishList.filter(m => m.id === vipcars.vipcars.id).length > 0 ? true : false;

const onHandleClick = vipcars => {
    inWishList
        ? dispatch(deleteWishList(vipcars.id))
        : dispatch(addWishList(vipcars))
};

  return (
    <div className='col-10 col-md-5 col-lg-3 carboxs'>
       <div className='carbox'>
          <div className='top'>
            <div className='img'></div>
            <div className='extra'>
                <p onClick={() => onHandleClick(vipcars.vipcars)}>
                  {inWishList ?  <AiFillHeart/>  :<AiOutlineHeart/>}
                </p>
            </div>
          </div>
          <div className='text'>
            <p className='price'>{vipcars.vipcars.price} $</p>
            <p className='name'>{vipcars.vipcars.name}</p>
            <p className='attributes'>{vipcars.vipcars.attributes}</p>
            <p className='datetime'>{vipcars.vipcars.datetime}</p>
          </div>
        </div>
    </div>
  )
}

export default Box