import './CardList.css'
import Card from './Card/Card';

function CardList({ robots }) {
  return (
    <div className='container'>
      { robots.map(robot => <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id} />) }
    </div>
  );
}

export default CardList;
