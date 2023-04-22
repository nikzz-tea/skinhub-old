import { useQuery } from 'react-query';

import Header from './components/Header';
import Card from './components/Card';
import Loading from './components/Loading';

import './scss/app.scss';
import { skinsService } from './services/skins.service';

function App() {
  const { data, isLoading } = useQuery('skins', skinsService.getAll);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <div className="container">{data && data.map((obj) => <Card key={obj.id} {...obj} />)}</div>
    </div>
  );
}

export default App;
