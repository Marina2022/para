import './normalize.scss';
import './App.scss';

import '../../fonts/Cambria.woff2';
import '../../fonts/Cambria-Bold.woff2';
import '../../fonts/Inter-Bold.woff2';
import '../../fonts/Inter-Regular.woff2';
import '../../fonts/Roboto-Bold.woff2';
import '../../fonts/Roboto-Medium.woff2';
import '../../fonts/Roboto-Regular.woff2';

import PageWrapper from "../layout/PageWrapper/PageWrapper";
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Product from "../pages/Product/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageWrapper/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/product' element={<Product/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
