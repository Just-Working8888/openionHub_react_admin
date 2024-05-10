import { Route, Routes } from 'react-router-dom';
import Main from 'routes/Main/Main';
import './scss/app.scss';
import MainPage from 'routes/MainPage/MainPage';
import { Login, ParamsAuth, ProductsPrices, SignUp } from 'Components';
import Protected from 'routes/Protected/Protected';
import Finance from 'routes/Finance/Finance';
import Analytics from 'routes/Analytics/Analytics';
import Promotions from 'routes/Promotions/Promotions';
import Reviews from 'routes/Reviews/Reviews';
import Servey from 'routes/Survey/Servey';
import AddQuiz from 'routes/AddQuiz/AddQuiz';





function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/paramsauth/:token' element={<ParamsAuth />} />
      <Route path='/' element={<Protected fallback={<>error</>}><><Main /></></Protected>}>
        <Route index element={<MainPage />} />
        <Route path='/productsPrices' element={<ProductsPrices />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/promotions' element={<Promotions />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/servey' element={<Servey />} />
        <Route path='/servey/create/:id' element={<AddQuiz/>} />
      </Route>
      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />
    </Routes >
  );
}

// const Authorization = ({children}: any) => {
//   if (getCookie('access_token')) {


//     return <Navigate to='/' />
//   }

//   return children;
// }

export default App;