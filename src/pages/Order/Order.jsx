import React, { useEffect, useState } from "react";
import "./Order.css";
import OldOrderRow from "../../components/oldOrderRow/OldOrderRow";
import axios from "axios";
import config from "../../Constants/enviroment";
import usePagenation from "../../custom hooks/usePagenation";
import PagenationControllers from "../../components/PagenationControllers/PagenationControllers";

const Order = () => {
  const [orderProudact, setOrderProudact] = useState([]);
  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.oldOrder)
      .then((res) => {
        console.log(res.data);
        setOrderProudact(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const {
    goToPage,
    nextPage,
    currentPage,
    currentCards,
    totalPages,
    isBtnDisabled,
  } = usePagenation(orderProudact, 10);
  return (
    <div className="order">
      <div className="container">
        <div className="title">
          <h2>Your Orders</h2>
        </div>
        <div className="count-of-all-order">
          <p>
            Total Orders: <span>{orderProudact.length}</span>
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price of one piece</th>
              <th>Color</th>
              <th>amount</th>
              <th>cost</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentCards.map((order) => (
              <OldOrderRow
                key={order.id}
                image={order.image}
                name={order.name}
                priceOne={order.price}
                amount={order.amount}
                color={order.color}
                date={order.date}
                address={order.address}
                status={order.status}
              />
            ))}
          </tbody>
        </table>
        {totalPages > 1 && (
          <PagenationControllers
            goToPage={goToPage}
            nextPage={nextPage}
            currentPage={currentPage}
            totalPages={totalPages}
            isBtnDisabled={isBtnDisabled}
          />
        )}
      </div>
    </div>
  );
};

export default Order;
