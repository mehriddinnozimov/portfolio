import 'tachyons'
import './App.css';
import Scroll from '../components/Scroll/Scroll'
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary'
import robots from '../robots'
import { useState } from 'react';

function App() {
  const [ robotsState, setRobots ] = useState(robots)
  const filterRobots = (value) => {
    setRobots(robots.filter(robot => robot.name.toLowerCase().includes(value.toLowerCase()) ))
  }

  return (
    robots.length ? (
      <div className="tc">
        <h1 className='sega-font'>Robot Friends</h1>
        <SearchBox searchChange={(e) => filterRobots(e.target.value)} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={robotsState}/>
          </ErrorBoundary>
        </Scroll>
      </div>
      ) : <h1 className="tc">Loading</h1>
  );
}

export default App;
