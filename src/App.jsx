
import './App.css'
import Batsman from './batsman'
import Count from './Count'
import Counter from './Counter'
import CricketMan from './CricketMan'


function App() {
  
  function handleClickBtn(){
    alert('Button-1')
  }

  const handleClickBtn3 = () =>{
    alert('clicked btn-3')
  }

  const handleAdditionClick = (num) =>{
    const add = num + 10;
    alert(add);
  }
    // code for style count section START
      const countStyle = {
        border: '2px solid red',
        padding: '20px'
      }
    // code for style count section END


  return (
    <div>

      {/*<CricketMan></CricketMan>*/}
      {/* <Batsman></Batsman> */}
  
      {/*code for count kora with react START*/}
       {/* <Count></Count> */}
       {/* <Counter></Counter> */}
       
      {/*code for count kora with react END*/}

     {/* <button className='btn' onClick={handleClickBtn}>Click Me-1</button>
     <button className='btn' onClick={function handleClickBtn2(){
      alert('clicked Btn-2')
     }}>Click Me-2</button>
     <button className='btn' onClick={handleClickBtn3}>Click Me-3</button>

     <button className='btn' onClick={() =>{
      alert('clicked-Btn-4')
     }}>Click Me-4</button>

     <button className='btn' onClick={()=>handleAdditionClick(5)}>Click Me-5</button> */}


    </div>
  )
}

export default App
