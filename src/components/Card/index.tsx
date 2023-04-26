import { FC } from 'react';
import './styles.scss';
import { ItemType } from '../../models';

const Card: FC<ItemType> = (props) => {
  return (
    <a href={props.downloadURL}>
      <div className="card">
        <div className="preview">
          <img src={props.imageURL} alt={props.name} />
        </div>
        <div className="title">
          {props.name}
          {props.subtitle && <span className="subtitle">{props.subtitle}</span>}
        </div>
      </div>
    </a>
  );
};

export default Card;
