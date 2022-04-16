import "./AdviceCard.css";
import separator from "../../img/pattern-divider-desktop.svg";
import dice from "../../img/icon-dice.svg";
export const AdviceCard = ({ id, advice, handleClick }) => {
  return (
    <div className="cardAdvice">
      <div className="mainCard">
        <h4 className="titleCard"> ADVICE # {id}</h4>
        <p className="textCard">"{advice}"</p>
        <img
          className="separatorCard"
          src={separator}
          alt="quote card separator"
        />
      </div>
      <div className="footerContainer">
        <div className="footerCard" onClick={handleClick}>
          <img src={dice} alt="card dice figure detail" />
        </div>
      </div>
    </div>
  );
};
