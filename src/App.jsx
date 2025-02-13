import Header from './components/Header.jsx';
import Product from './components/Product.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {

  return (
      <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((Product) => (
          <li key={Product.id}>
            <Product {...Product} />
          </li>
        ))}
      </Shop>
      </CartContextProvider>
  );
}

export default App;
