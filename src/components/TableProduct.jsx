import { render } from "@testing-library/react";
import React, { useState, useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import ContextApi from "../context/ContextApi";
import "../css/table.css";

import {operador, upperCase} from "../js/global";
import ModalShow from './ModalShow';
import ModalAlert from "./ModalAlert";

export default function TableProduct() {
  const { listProduct, totalPrice, setTotalPrice } = useContext(ContextApi);
  const [change, setChange] = useState(false);
  const [basketProduct, setBasketProduct] = useState(null);

  const quantytiProduct = (option, id) => {
    setTotalPrice(operador(option, listProduct, id));
    setChange(!change);
  };

  useEffect(() => {
    let products = listProduct?.filter((product) => product.quantity > 0);
    setBasketProduct(products);
  }, [change]);

  console.log(listProduct);
  return (
    <div className="table-main">
      <Table striped bordered hover>
        <tbody>
          {basketProduct?.map((product) => (
            <tr key={product.id}>
              <td className="data-table">
                <div className="description-table">
                  <div className="img-table mx-2">
                    <img className="w-100" src={product.img} alt={product.name}/>
                  </div>
                  <div className="table-name"><h4>{upperCase(product.name)}</h4></div>
                </div>
                <div className="operadores">
                  <div className="table-price mx-1 w-100">
                    $ {(product.quantity * product.price).toLocaleString("es-CL")}
                  </div>
                  <div className="d-flex mb-2">
                  <div
                    className={product.quantity === 1?"operador mx-1 subtract":"operador mx-1"}
                    onClick={() => quantytiProduct("subtract", product.id) }
                  >

                    🔽
                  </div>
                  <div className="table-quantyti mx-1">{product.quantity}</div>

                  <div
                    className="operador mx-1"
                    onClick={() => quantytiProduct("add", product.id)}
                  >
                    🔼
                  </div>
                  <div
                    className="operador mx-1"
                    onClick={() => 
                      render(
                      <ModalShow
                       id={product.id}
                       listProduct={listProduct}
                       change={change}
                       setChange={setChange}
                       setTotalPrice={setTotalPrice}
                       quantity={product.quantity}
                       name={upperCase(product.name)}
                       />
                      )}
                  >
                    🗑️
                  </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div><h2>Total a pagar: ${totalPrice.toLocaleString("es-CL")}</h2></div>
      <Button variant="success"
      onClick={() =>render(<ModalAlert/>)}
      >
        Ir a pagar
      </Button>
    </div>
  )
}
