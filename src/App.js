import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './component/Layout';
import Home from './pages/Home';
import CreateNewBlog from './pages/CreateNewBlog';
import About from './pages/About';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    errorElement : <Error/>,
    children : [
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'createNewBlog',element:<CreateNewBlog/>},
    ]
  }
])
function App() {
  return (
    <div>      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
