import React, {useState} from 'react'

function App() {
 const [notesHeading, setnotesHeading] = useState('')
const [detail, setdetail] = useState('')
const [tasks, settasks] = useState([])


  const prevent = (e)=>{
e.preventDefault()
const copyTasks = [...tasks]
copyTasks.push({notesHeading,detail})

settasks(copyTasks)
console.log(tasks)




setnotesHeading('')
setdetail('')
  }
 



  return (
    <>
<div className="main">
    <form >
      <div className='container'>
        <input onChange={(e)=>{
          setnotesHeading(e.target.value)
        }}
        value={notesHeading}
      className='noteheading'
      type="text"
      placeholder='Enter your notes'
      />
      <input 
      onChange={(e)=>{
        setdetail(e.target.value)
      }}
      value={detail}
      className='detailnotes'
      type="text"
      placeholder='Write notes'
      />

      <button onClick={(e)=>{
          prevent(e)
      }}>Add Notes</button>
 
  </div> 
  {tasks.map(function(elem,idx){
return   <div key={idx} className="notesView">
<h2 className='titleofnotes '>{elem.notesHeading}</h2>
<p className='detailofnotes'>{elem.detail}</p>
</div>
  })}
  
    </form>
  </div>

  


</>

    
  )
}

export default App










// import React, {useState} from 'react'
// function App() {
// const [title, settitle] = useState('')



//   const formSubmit = (e)=>{
//     e.preventDefault()
//     // console.log(e);
    
//     console.log("form submitted by",title);
//     settitle('')
    
//   }
 
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         formSubmit(e)
//       }}>


//       <input style={{color:'black'}} className='inputElm'
//        type="text"
//        placeholder='enter..' 
//         value={title}
//        onChange={(e)=>{
//         settitle(e.target.value)
        

//        }} 
       
//        />
//       <button>submit</button>
//       </form>
//     </div>
//   )
// }


//PREVENT DEFAULT BEHAVIOUR OF SUBMIT
// import React, {useState} from 'react'
// function App() {
//   const formSubmit = (e)=>{
//     e.preventDefault()
//     console.log(e);
    
//     console.log("form submitted");
    
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         formSubmit(e)
//       }}>
//       <input className='inputElm' type="text" placeholder='enter..' />
//       <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
//FORM HANDLING







//USESTATE USAGE
// function App() {
//   let [num, setnum] = useState(0)
//   function increament(){
// setnum(num+1) 
  
  
//   }
//   function decreament(){
// setnum(num-1) 

//   }

//   return (
//     <div className='container'>
//       <h1>{num}</h1>
//       <button className='green' onClick={increament}>Icreament</button>
//       <button className='red' onClick={decreament}>Decreament</button>


//     </div>
//   )
// }

// export default App

////FUNTIONS 

// import React from 'react'

// function App() {
// const a = (elem)=>{
//   console.log(elem)
// console.log(elem+7)
// }
//   return (
//     <div>
// <button onClick={(elem)=>{
//  a(elem.clientX)
// }}>
//   click me
// </button>  
//   </div>
//   )
// }

// export default App
