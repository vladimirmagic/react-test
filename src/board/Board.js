import './Board.scss';
import Lists from "../lists/Lists";

function Board({listNumber, cardNumber}) {


  return (
      <div className="board" id="dashboard5477720007639040">
        <div className="board-view">
            <Lists listNumber={listNumber} cardNumber={cardNumber} />
            </div>
      </div>
  );
}

export default Board;
