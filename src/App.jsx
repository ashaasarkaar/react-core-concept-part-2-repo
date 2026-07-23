
import { Suspense } from 'react'
import './App.css'
import Batsman from './batsman'
import Count from './Count'
import Counter from './Counter'
import CricketMan from './CricketMan'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Comments from './Comments'
import Players from './Players'
import Workers from './Workers'
import CounterApp from './CounterApp'

// API theke normal fetch URL without async START
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// API theke normal fetch URL without async END

// API theke async fetch URL without async START
// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json()
// }
// API theke async fetch URL without async END

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json()
// }

// const fetchComments = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/comments');
//   return res.json()
// }

function App() {
  
  // function handleClickBtn(){
  //   alert('Button-1')
  // }

  // const handleClickBtn3 = () =>{
  //   alert('clicked btn-3')
  // }

  // const handleAdditionClick = (num) =>{
  //   const add = num + 10;
  //   alert(add);
  // }
  //   // code for style count section START
  //     const countStyle = {
  //       border: '2px solid red',
  //       padding: '20px'
  //     }
  //   // code for style count section END

  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();
  // const commentsPromise = fetchComments();
  return (
    <div>
    <CounterApp></CounterApp>
    {/* <Workers></Workers> */}
    {/* <Players></Players> */}
    {/* <Suspense fallback={<h3>All Comments Are Coming...</h3>}>
      <Comments commentsPromise={commentsPromise}></Comments>
    </Suspense> */}
    {/* <Suspense fallback={<h3>All Posts Are Coming...</h3>}>
      <Posts postsPromise={postsPromise}></Posts>
    </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
     {/* <Suspense fallback={<p>Users Data Is Loading...</p>}>
      <Users fetchUsers={fetchUsers}></Users>
     </Suspense> */}
      {/* <CricketMan></CricketMan> */}
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
