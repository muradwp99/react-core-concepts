/* eslint-disable react/prop-types */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {

  const singers = [
    {
      id: '1',
      name: 'Kumar Sanu',
      age: '22'
    },
    {
      id:'2',
      name: 'Kishore Kumar',
      age: '25'
    }
  ]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <Student></Student>
      <Device name='Lenovo' price='$7000' ram='Corsair DDR4 8GB'
      ></Device> */}
      <Todo task='Learn React' isDone={false}></Todo>

       
      {
        singers.map(singer => <Singers key={singer.id} singer= {singer}></Singers>)
      }
      

    </>
  )
}

function Singers({singer}){
  return <>
      <h2>{singer.name}</h2>
      <h4>Age: {singer.age}</h4>
  
  </>
}

// function Device(props){
  
//   return(
//     <>
//       <h2>Name: {props.name}</h2>
//       <p>Price: {props.price}</p>
//       <p>Ram: {props.ram} </p>
    
//     </>
//   )
// }
// function Device({name, price, ram}){
  
//   return(
//     <>
//       <h2>Name: {name}</h2>
//       <p>Price: {price}</p>
//       <p>Ram: {ram} </p>
    
//     </>
//   )
// }

// function Student(){

//   const studentInfo = {
    
//       name: 'Murad',
//       id: 'MR14',
//       age: '26'
    
//   }

//   return (
//     <>
//       <h2>Hello My name is {studentInfo.name}</h2>
//       <h2>My Id is {studentInfo.id} & my Age is {studentInfo.age}</h2>
    
//     </>
//   )
// }

export default App
