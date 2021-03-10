import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const Pedido = ({ /*userCart, addItemToCart, addQuantity, removeQuantity */}) => {
  // getList = async () => {
  //   try{
  //     list = await axios(data)
  //   } catch (err){
  //     console.log(err)
  //   }
  // };
  // componentDidMount(){
  //   this.getList()
  // };

  useEffect(() => {
    // const getCart = async () => {
    //   await userCart();
    // };
    // getCart();
  }, []);

  // const addItemToCart = async (id) => {
  //   await services.addproduct(id);
  //   await props.userCart();
  // };

  return (
    <div>
      <div className="carta-pedido">
        <img className="logos" src="logo burgers.png" alt="logo burgers" />
        <div className="lista">
          <h4>VEDELLA</h4>
          <p> Vedella amb enciam, tomaquet, cogombres Preu: 3,75€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>B.I.G PAPA</h4>
          <p>La teva burger de vedella x3</p>
          <p>Preu: 5,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>VEGGIE BURGER</h4>
          <p>Pullpork vega de fruita d'Asia amb enciam, tomaquet, cogombres</p>
          <p>Preu: 3,75€</p>
        </div>
         {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div>  */}
        <div className="lista">
          <h4>B.I.G MAMA</h4>
          <p>La teva burger veggie x3</p>
          <p>Preu: 5,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>POLLASTRE</h4>
          <p>Crispy, amb enciam, tomaquet, cogombres</p>
          <p>Preu: 3,75€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>B.I.G POLLO</h4>
          <p>La teva burger de pollastre x3</p>
          <p>Preu: 5,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo wraps.png" alt="logo wraps" />
        <div className="lista">
          <h4>CRUSTY POLLO</h4>
          <p>Crispy, pa de blat i espinacs amb enciam, tomaquet, cogombres</p>
          <p>Preu: 4,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>QUESO VEGAN AHUMADO</h4>
          <p>Pa de blat i esponacs amb enciam, tomaquet, cogombres</p>
          <p>Preu: 4,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>FALAFEL</h4>
          <p>Pa de blat i esponacs amb enciam, tomaquet, cogombres</p>
          <p>Preu: 4,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo butifarras.png" alt="logo butifarras"/>
        <div className="lista">
          <h4>BARCELONA DRAGONS</h4>
          <p>
            Butifarra amb escalivada, enciam, salsa romesco i allioli de
            pollastre
          </p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>VATOS LOCOS</h4>
          <p>
            Butifarra amb blat, enciam, salsa d'alvocat i llima, salsa jalapeño
            i cibulet
          </p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>SR. MIYAGI</h4>
          <p>
            Butifarra amb bolets, enciam, salsa soja/wasabi i cibulet amb ceba
            crispy
          </p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>BROOKLIN ZOO</h4>
          <p>
            Butifarra nature, enciam, ceba crispy, salsa BBQ Jack i crema de
            cacauet
          </p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo bocatas.png" alt="logo bocatas" />
        <div className="lista">
          <h4>TORTILLA DE PATATAS Y PIMIENTO VERDE</h4>
          <p>En pa de vidre i tomaquet</p>
          <p>Preu: 5,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>BACO-CHEDDAR</h4>
          <p>En pa de vidre i tomaquet</p>
          <p>Preu: 4,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>CALAMARES ANDALUZA</h4>
          <p> En pa de vidre i tomaquet</p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>VEGAN CAPRESE</h4>
          <p>Amb formatge vega fumat, amb pa de vidre, tomaquet</p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>JAMON IBERICO</h4>
          <p>En pa de vidre i tomaquet</p>
          <p>Preu: 4,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>ALBONDIGAS DE LA YAYA</h4>
          <p>Carn de vedella amb salsa en pa de vidre, tomaquet</p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>ALBONDIGAS VEGAN</h4>
          <p>
            Croqueta de cigro amb llet de coco, soja i llima en pa de vidre,
            tomaquet
          </p>
          <p>Preu: 4,80€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>ESTOFADO DE CERDO</h4>
          <p>En pa de vidre i tomaquet</p>
          <p>Preu: 5,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo tacos.png" alt="logo tacos" />
        <div className="lista">
          <h4>CHILI CON CARNE</h4>
          <p>Carn picant amb llima, enciam i ceba</p>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>TINGA DE POLLO</h4>
          <p>Pollastre estofat amb llima, enciam i ceba</p>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>BAJA CALIFORNIA</h4>
          <p>Calamars arrebossats amb llima, enciam i ceba</p>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>COCHINITA VEGGIE</h4>
          <p>Pullpork Vega de fruita d'Asia amb salsa achiote, llima, enciam i ceba</p>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo fritos.png" alt="logo fritos" />
        <div className="lista">
          <h4>PATATAS FRITAS</h4>
          <p>Preu: 1,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>DOBLE FRITAS</h4>
          <p>Preu: 2,90€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>PATATAS DELUXE</h4>
          <p>Preu: 3,00€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>ALITAS FRITAS</h4>
          <p>Preu: 5uni. = 3,50€ / 10uni. = 6,50€ / 15uni. = 9,00€ </p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo salsas caseras.png" alt="logo caseras"/>
        <div className="lista">
          <h4>Ketchup</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Salsa Brava</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Romesco</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Crema Cacahuete</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>All i oli de pollo braseado</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Mosta-nesa</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Mayo. Thay</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Mayo. Aguacate, eneldo y lima </h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Mayo. Jalapeño</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Mayo. Soja y wasabi</h4>
          <p>Preu: 0,30€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>BBQ Jack Daniels</h4>
          <p>Preu: 0,60€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Queso Idiazabal y Voll Damm</h4>
          <p>Preu: 0,60€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Mayo. Pesto Genovese</h4>
          <p>Preu: 0,60€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>BBQ Balinesa</h4>
          <p>Preu: 0,60€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo dulces.png" alt="logo dulces" />
        <div className="lista">
          <h4>DONUTS</h4>
          <p>Preu: 2,00€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>XURROS AMB XOCOLATA 5uni.</h4>
          <p>Preu: 3,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>HELADOS</h4>
          <p>Gustos: Vainilla de Jamaica / Vainilla amb Xocolata / Vainilla amb Fruits del Bosc</p>
          <p>Preu: cucurutxo = 2,20€ / got = 4,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>GRANIZADO CASERO DEL DIA</h4>
          <p>Preu: petit = 1,50€ / got = 2,50€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="carta-pedido">
        <img className="logos" src="logo bebidas.png" alt="logo bebidas" />
        <div className="lista">
          <h4>Coca-cola</h4>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Coca-cola zero</h4>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Coca-cola light</h4>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Fanta Naranja</h4>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Fanta Limon</h4>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Sprite</h4>
          <p>Preu: 2,20€</p>
        </div>
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Agua</h4>
          <p>Preu: 1,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Ladron de Manzanas</h4>
          <p>Preu: 3,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Moritz</h4>
          <p>Preu: 3,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Estrella Galicia</h4>
          <p>Preu: 3,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <div className="lista">
          <h4>Voll Damm</h4>
          <p>Preu: 3,20€</p>
        </div>
        {/* <div className="cart__product-add">
          <p onClick={() => deleteProduct(product._id)} className="btn-remove">
            delete
          </p>
          <button
            className="btn-add"
            onClick={() => removeQuantity(product._id, product.quantity)}
          >
            -
          </button>
          <p className="cart__product-add--quantity">{product.quantity}</p>

          <button
            className="btn-add"
            onClick={() => addQuantity(product._id, product.quantity)}
          >
            +
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => addItemToCart(product._id)}></button>
        </div> */}
        <hr></hr>
      </div>
      <div className="cart__product-cart__subtotal">
          <p>
            Subtotal:
            {/* <span>
              {parseInt(product.quantity) * parseInt(product.product.price)} €
            </span> */}
          </p>
        </div>
      <button>
        <Link to={"/carrito"}>Confirmar Pedido</Link>
      </button>
    </div>
  );
};

export default withAuth(Pedido);
