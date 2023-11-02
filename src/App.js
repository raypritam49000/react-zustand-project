import { useEffect } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListEmployeeComponent />
    },
    {
      path: "/employees",
      element: <ListEmployeeComponent />
    },
    {
      path: "/add-employee",
      element: <CreateEmployeeComponent />
    },
    {
      path: "/update-employee/:id",
      element: <UpdateEmployeeComponent />
    },
    {
      path: "/view-employee/:id",
      element: <ViewEmployeeComponent />
    }
  ])


  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
