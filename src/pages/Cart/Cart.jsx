import React from 'react'
import EmptyCart from '../../sections/EmptyCart/EmptyCart'
import TopGreenBar from '../../components/TopGreenBar/TopGreenBar'
import FullCart from '../../sections/FullCart/FullCart'
import ComplateCart from '../../sections/ComplateCart/ComplateCart'

const Cart = () => {
return (
    <div className='cart'>
    <TopGreenBar/>
    <EmptyCart/>
    <FullCart/>
    <ComplateCart/>
    </div>
)
}

export default Cart
