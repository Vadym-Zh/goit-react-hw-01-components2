// import Normalize from 'react-normalize';
import './App.css';
import { Profile } from './components/Profile1/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList1/FriendList';
import { TransactionHistory } from './components/TtransactionHistory/TransactionHistory';
import {
  userData,
  statsData,
  friendsData,
  transactionsData,
} from './data/data';

function App() {
  return (
    <div className="App">
      {/* <Normalize /> */}
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
