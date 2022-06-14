import React,{useState,useEffect,useMemo,useRef} from "react";
// export default  function MyComponent(){
//     const count = useRef(0)
//     return (
//       <div>
//         <button onClick={()=>{count.current = count.current +1} }>count加1</button>
//         <p>当前的count {count.current} </p>
//       </div>
//     )
//   }

  export default  function MyComponent(){
    const [count, setCount] = useState(0);
    const prev = useRef(0)
  
    useEffect(() => {
      prev.current = count
    });
  
    return (
      <div>
        <button onClick={()=>setCount(count+1)}>count加1</button>
        <p>当前的count {count} </p>
        <p>之前的count {prev.current} </p>
      </div>
    )
  }