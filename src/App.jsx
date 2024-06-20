import {useState} from 'react';

function App(){
  const [todos,setTodos]=useState([]);
  const [item,setItem]=useState('');
  const [date,setDate]=useState('');
  function onClickHandler(){

    if(item=="" || date==""){
      alert("Please enter item and date");
    }
    else{
      setTodos([...todos,{
        item:item,
        date:date,
        completed:false
      }])
      setItem('');
      setDate('');
    }
  }
  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <div><input type="text" placeholder="Add an item" className='input' value={item} onChange={function(e){
          setItem(e.target.value)
        }}/><br />
        <input type="date" placeholder='Add date' className='input' value={date} onChange={function(e){
          setDate(e.target.value);
        }}/>
        <button className='btn' onClick={onClickHandler}>+</button></div>
        {
          todos.map(function(element,index){
            return <div className='add' key={index}>
              <button className='newbtn' onClick={function(e){
                const newTodos=todos.filter((_,i)=>i!==index);
                setTodos(newTodos);
              }}>&#x292B;</button>
              <span className={element.completed==false?"span":"newspan"}>{element.item}</span><span className={element.completed==false?"span":"newspan"}>{element.date}</span>
             <button className={element.completed==false?"new":"nw"} onClick={function(){
              let newTodos=[];
              for(let i=0;i<todos.length;i++){
                if(i!=index){
                  newTodos.push(todos[i]);
                }
                else{
                  newTodos.push({
                    item:todos[i].item,
                    date:todos[i].date,
                    completed:!todos[i].completed
                  })
                }
              }
              setTodos(newTodos);
             }}>{element.completed==false?"Incomplete":"Completed"}</button>
            </div>
          })
        }
        <div>
          <button className='mark' onClick={function(){
            let newTodos=[];
            for(let i=0;i<todos.length;i++){
              newTodos.push({
                item:todos[i].item,
                date:todos[i].date,
                completed:true
              })
            }
            setTodos(newTodos);
          }}>Mark All as Completed</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
