import axios from "axios";
import { HeaderPage } from "../../components/HeaderPage";
import "./OrdersPage.css";
import { useEffect, useState } from "react";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("api/orders?expand=products");
      setOrders(response.data);
    }

    fetchOrderData();
  }, []);
  return (
    <>
      <title>Orders</title>
      <HeaderPage cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        < OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
