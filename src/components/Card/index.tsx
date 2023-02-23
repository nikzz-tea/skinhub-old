import { FC } from 'react';
import './styles.scss';
import { ItemType } from '../../App';

const Card: FC<ItemType> = (props) => {
  return (
    <a href={props.downloadURL}>
      <div className="card">
        <div className="preview">
          <img src={props.imageURL} alt={props.name} />
        </div>
        <div className="title">{props.name}</div>
      </div>
    </a>
  );
};

export default Card;
