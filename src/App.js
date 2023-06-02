import Normalize from 'react-normalize';
import './App.css';
import { Profile } from './components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import {
  userData,
  statsData,
  friendsData,
  transactionsData,
} from './data/data';

function App() {
  return (
    <div className="App">
      <Normalize />
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
