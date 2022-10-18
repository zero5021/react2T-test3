import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import "../css/card.css";
import ContextApi from "../context/ContextApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {operador ,upperCase} from '../js/global'

export default function Cards() {
  const { listProduct , setTotalPrice} = useContext(ContextApi);
  const navigate=useNavigate()
  return (
    <Container>
      <Row xs={2} sm={2} md={3} lg={4}>
        {listProduct?.map((produc) => (
          <Col key={produc.name} className="g-3">
            <Card className="">
              <Card.Img src={produc.img} alt={produc.name}></Card.Img>
              <Card.Body>
                <Card.Title>
                  {upperCase(produc.name)}
                </Card.Title>
                <hr />
                
                  <div><p><strong>Ingredientes:</strong></p></div>
                  <div>
                  <ul>
                    {produc.ingredients?.map((ingredient) => (
                      <li key={ingredient}>
                        {upperCase(ingredient)}
                      </li>
                    ))}
                  </ul>
                  </div>
                
                <hr />
                <div className="price text-center mb-4">
                  <h3>$ {produc.price.toLocaleString("es-CL")}</h3>
                </div>
                <div className="container-button-card">
                  <Button 
                  variant="info" 
                  className="" 
                  size="sm"
                  onClick={()=>navigate(`/pizza/${produc.id}`)}>
                    Detalle
                  </Button>
                  <Button variant="success" className="" size="sm"
                  onClick={()=> setTotalPrice(operador('add',listProduct,produc.id))}
                  >
                    Añadir
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
