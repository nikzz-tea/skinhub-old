import axios from 'axios';
import { useQuery } from 'react-query';

import Header from './components/Header';
import Card from './components/Card';
import Loading from './components/Loading';

import './scss/app.scss';

export type ItemType = {
  id: number;
  name: string;
  subtitle: string;
  imageURL: string;
  downloadURL: string;
};

async function fetchItems() {
  return (await axios.get('https://6354195ee64783fa827f4417.mockapi.io/skins?sortBy=name')).data;
}

function App() {
  const { data, isLoading } = useQuery('skins', fetchItems);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        {data && data.map((obj: ItemType) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default App;
