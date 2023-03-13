import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Header from './components/PageComponents/Header';
import Home from './pages/Home/Home';
import Coins from './components/Currency/Coins';
import CoinDetails from './components/Currency/CoinDetails';
import Exchanges from './components/Currency/Exchanges.jsx';
import Statistics from './pages/Home/Statistics';
import SignIn from './pages/Account/SignIn';
import SignUp from './pages/Account/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import AccountDeposit from './pages/Dashboard/AccountDeposit';
import Withdrawal from './pages/Dashboard/Withdrawal';
import Settings from './pages/Dashboard/Settings';
import Contact from './pages/Contact/Contact';
import Sidebar from './components/PageComponents/Sidebar';
import Layout from './components/Layout/Layout';
import Referral from './pages/Dashboard/Referrals';
//import Content from './pages/Dashboard/History/Content';
import DepositHistory from './pages/Dashboard/History/DepositHistory';
import HIstoryLayout from './components/Layout/HistoryLayout';
import WithdrawalHistory from './pages/Dashboard/History/WithdrawalHistory';
import EarningHistory from './pages/Dashboard/History/EarningHistory';
import { Box } from '@chakra-ui/react';
import GoogleTranslate from './components/PageComponents/Translation/GoogleTranslate';





function App() {
  return (
    <Box>
      <Router>
        <GoogleTranslate/>
          <Header />
           
              <Routes>

                <Route path='/' element = {< Home />}/>
                <Route path='/login' element = {< SignIn />}/>
                <Route path='/register' element = {< SignUp/>}/>
                <Route path='/stats' element = {< Statistics />}/>
                <Route path='/coins' element = {<Coins />}/>
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/exchanges' element = {< Exchanges />}/>
                <Route path='/coin/:id' element = {<CoinDetails />}/>

                <Route path="/" element={<Layout/>}>
                <Route path='/dashboard' element = {< Dashboard />}/>
                <Route path='/deposits' element = {< AccountDeposit />}/>
                <Route path='/withdrawals' element = {< Withdrawal />}/>

                <Route path="/" element={<HIstoryLayout/>}>
                <Route path='/history' element = {< DepositHistory/>}/>
                <Route path='/withdrawalhistory' element = {<WithdrawalHistory/>}/>
                <Route path='/earninghistory' element = {< EarningHistory/>}/>
                </Route>
                <Route path='/referrals' element = {< Referral/>}/>
                <Route path='/settings' element = {< Settings />}/>

                </Route>
                <Route path='/dashboard' element = {< Sidebar />}/>
                
                
              
              </Routes>
              
          </Router>
    </Box>
  );
}

export default App;
