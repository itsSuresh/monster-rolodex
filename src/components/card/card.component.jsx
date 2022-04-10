import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
      const {monster} = this.props;
    return (
      <div className="card-container">
        <img
          alt={`Monsters ${monster.name}`}
          src={`https://robohash.org/${monster.id}?set=set2&size=150x150`}
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
      </div>
    );
  }
}

export default Card;
