
import './App.css'

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

  return (
    <div>
     <button className='btn' onClick={handleClickBtn}>Click Me-1</button>
     <button className='btn' onClick={function handleClickBtn2(){
      alert('clicked Btn-2')
     }}>Click Me-2</button>
     <button className='btn' onClick={handleClickBtn3}>Click Me-3</button>

     <button className='btn' onClick={() =>{
      alert('clicked-Btn-4')
     }}>Click Me-4</button>

     <button className='btn' onClick={()=>handleAdditionClick(5)}>Click Me-5</button>


    </div>
  )
}

export default App
