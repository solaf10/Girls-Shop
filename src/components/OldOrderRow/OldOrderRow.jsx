import React from 'react'
const OldOrderRow = ({id,name,image,address,priceOne,color,amount,date,status}) => {
    const numPrice = parseFloat(priceOne.replace("$", ""));
    const total = numPrice * amount;
  return (
    <tr>
        <td>{name}</td>
        <td> <img src={image} alt="" /> </td>
        <td>{priceOne}</td>
        <td className='color-cell'><p
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: color,
              borderRadius: "50%",
            }}
          ></p></td>
        <td>{amount}</td>
        <td>{total}</td>
        <td>{address}</td>
        <td>{date}</td>
        <td>{status}</td>
    </tr>
  )
}

export default OldOrderRow
