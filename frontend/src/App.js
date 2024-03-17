import './App.css';
import CheckAPI from './Components/CheckAPI';
import Header from './Components/Header';
import useLocalStorage from './Hooks/useLocalStorage';
import CRUD from './Pages/CRUD';
import NotLogged from './Pages/NotLogged';
import UserLogged from './Pages/UserLogged';

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <UserLogged />
      },
      {
        path: "/crud",
        element: <CRUD />
      }
    ]
  }
])

function AppLayout() {
  const [user] = useLocalStorage("user", null);

  return (
    <div className="App">
      <Header/>
      <main className="main">
        {!!user ? <Outlet /> : <NotLogged/>}
        <CheckAPI/>
        </main>
    </div>
  );
}


function App() {
  return <RouterProvider router={router} />;
}
export default App;
