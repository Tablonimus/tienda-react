import { useState } from "react";
import "./App.css";
const initialProductsState = ["Producto 1", "Producto 2", "Producto 3"];

function App() {
  const [products, setProducts] = useState([]); //Este estado cambia con cada producto agregado => SI QUIERO PRODUCTOS POR DEFAULT, LOS AGREGO Y REEMPLAZO EL ARRAY VACIO
  const [newProduct, setNewProduct] = useState(""); //"Producto 4" // => puede ser lo que quieran agregar a la lista

  function handleInputText(e) {
    let text = e.target.value;
    setNewProduct(text);
  }

  function handleProducts(e) {
    e.preventDefault();
    /* Cortociruito */
    if (newProduct.length === 0) {
      return alert("Escribe algo por favor!");
    }
    //Necesito hacer una copia de como es el estado de productos actualmente
    let newArray = [...products]; //copia del array que existe en el estado
    newArray.push(newProduct);
    setProducts(newArray); //recibe un array de productos para modificar el estado anterior
  }

  return (
    <div>
      <h1>Clase unidad 3</h1>
      <form action="submit" onSubmit={handleProducts}>
        <input type="text" onChange={handleInputText} />
        <button type="submit">Agregar producto</button>
      </form>
      <ul>
        {/* {products.length == 0 && "No hay productos agregados"} */}
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
