import Header from './components/header/header'
import Footer from './components/footer/footer';
import CardsContainer from './components/cards/cards';
import ProductsPage from './components/productsPage/productDetails';
import ViewCart from './components/viewCart/viewCart';
import './App.css'   
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AccountBalance from './redux_example/accountDetails';
// import Creditcard from './redux_example/creditCard';
// import Fixeddeposit from './redux_example/fixedDeposit';


// import { Counter } from './counter';
// import { Sample } from './sample';
// import { Test } from './test';
function App() {

  return (
    // <>
    //   <Counter></Counter>

    //   <hr />
    //   <Sample></Sample>
    //   <hr />
    //   <hr />
    //   <Test></Test>

    //   <hr />
    //   <div>
    //       <AccountBalance></AccountBalance>
    //   </div>
    //   <Fixeddeposit></Fixeddeposit>
    //   <Creditcard></Creditcard>
    // </>
    <BrowserRouter>
      <Header />
      <main className="container">
            <Routes>
                <Route path="/" element={<CardsContainer />} />
                <Route path="/productDetails" element={<ProductsPage />} />
                <Route path="/viewCartDetails" element={<ViewCart />} />
            </Routes>
           
      </main>
        <Footer></Footer>
    </BrowserRouter>
    
  )
}

export default App

