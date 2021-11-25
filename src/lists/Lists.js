import './Lists.scss';
import List from "../list/List";

function Lists({listNumber}) {
    const getLists = function(count){
        let lists = [];
        for(let i=0; i<count ; i++ ){
            lists.push(<List key={i}/>)
        }
        return lists;
    }
  return (
      <div className="lists-container" >
        <div className="list-container">
            {getLists(listNumber)}
        </div>
      </div>
  );
}

export default Lists;
