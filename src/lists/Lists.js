import './Lists.scss';
import List from "../list/List";

function Lists({listNumber, cardNumber}) {
    const getLists = function(){
        let lists = [];
        for(let i=0; i<listNumber ; i++ ){
            lists.push(<List key={i} cardNumber={cardNumber}/>)
        }
        return lists;
    }
  return (
      <div className="lists-container" >
        <div className="list-container">
            {getLists()}
        </div>
      </div>
  );
}

export default Lists;
