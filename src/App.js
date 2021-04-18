import './App.css';

function App() {
  const heros = ['vondul', 'vondo', 'sandy', 'pandy'];

  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$50.99' },
    { name: 'PDF Reader', price: '$5.50' }
  ]

  // const productNames = products.map(product => product.name);
  // console.log(productNames);
  // const heroNames = heros.map(hero => hero);
  // console.log(heroNames);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
        </ul>

        <Product name={products[0].name} price={products[0].price}></Product>

        <Product2 product={products[0]}></Product2>

        <Product3 product={products[0]}></Product3>
        <Product3 product={products[1]}></Product3>

        {
          products.map(pd => <Product4 product={pd}></Product4>)
        }
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button style={{ color: 'red' }}>Buy Now</button>
    </div>
  )
}

function Product2(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'pink',
    margin: '20px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // console.log(props);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button style={{ color: 'red' }}>Buy Now</button>
    </div>
  )
}

function Product3(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgreen',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={{ color: 'red' }}>Buy Now</button>
    </div>
  )
}

function Product4(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightsalmon',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={{ color: 'red' }}>Buy Now</button>
    </div>
  )
}

export default App;
