import React, { useContext } from "react";
import ContextApi from "../context/ContextApi";
import { useParams } from "react-router-dom";
import "../css/description.css";
import { Button } from "react-bootstrap";
import {operador ,upperCase} from '../js/global'

export default function Description() {
  const { listProduct, setTotalPrice } = useContext(ContextApi);
  const { id } = useParams();
  let producto= listProduct?.filter((producto) => producto.id === id);

  return (
    <div className="Container-main-description">
      {producto.length===0? "":
      <>
      <div className="img-description mx-2 p-2">
      
          <img className="w-100" src={producto[0].img} alt={producto[0].name} />
        </div><div className="description mx-2">
            <div><h1>{upperCase(producto[0].name)}</h1></div>
            <div className="description-paragraph"><p>{producto[0].desc}</p></div>
            <hr />
            <div>
              <p>
                <strong>Ingredientes:</strong>
              </p>
              <ul>
                {producto[0].ingredients?.map((ingredient) => (
                  <li key={ingredient}>
                    {upperCase(ingredient)}
                  </li>
                ))}
              </ul>
            </div>
            <hr />

            <div className="btn-price m-3 px-3">
              <h3>Precio: $ {producto[0].price.toLocaleString("es-CL")}</h3>

              <Button variant="success" className="" size="sm"
                onClick={() => setTotalPrice(operador('add', listProduct,
                  id))}>
                Añadir
              </Button>
            </div>

          </div></>
        }
    </div>
          
  );
}
