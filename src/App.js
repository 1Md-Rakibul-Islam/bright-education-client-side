import { RouterProvider } from 'react-router-dom';
import { routes } from './Routs/Routs';
import toast, { Toaster } from 'react-hot-toast';


function App() {

  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
