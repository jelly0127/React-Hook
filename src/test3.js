import React,{useState,useEffect,useMemo} from "react";

export default function MyComponent(){
    const [step, setStep] = useState(3);
    const [data, setData] = useState(1);
  
    return (
      <div>
        <button onClick={()=>setStep(step+3)}>step加3</button>
        <button onClick={()=>setData(data+1)}>data加1</button>
        <Counter step={step} data={data}/>
      </div>
    )
  }
  
  function Counter({step,data}){
    // 使用useMemo保存计算结果
    const result = useMemo(() => Fibonacci(step), [step])
    
    // 不使用useMemo保存计算结果
    // const result = Fibonacci(step)
    
    return (
      <div>
        <p>{data}</p>
        <p>{result}</p>
      </div>
    )
  }
  
  function Fibonacci(step){
    if(step==1){
        return 1
    }
    if(step==2){
        return 1
    }
    return Fibonacci(step-1) + Fibonacci(step-2)
  }