import React,{useState,useEffect} from "react";

export default function FatherA(){
    const [name, setName] = useState('ahreal');
    const [age, setAge] = useState(18);
  
    return (
      <>
        <button onClick={()=>setName('allen')}>修改name</button>
        <button onClick={()=>setAge(20)}>修改age</button>
        <ChildrenA name={name}></ChildrenA>
        <ChildrenB age={age}></ChildrenB>
      </>
    )
  }
  
  const ChildrenA = React.memo(({name}) => {
    useEffect(()=>{
      console.log('子组件A挂载了')
      return ()=>{
        console.log('子组件A卸载了')
      }
    })
    return (
      <div>
        我的名字是{name}
      </div>
    )
  },(prev, next)=>{
    if(prev.name === next.name){
      return true
    }
    return false
  })
  
  const ChildrenB = React.memo(({age})=>{
    useEffect(()=>{
      console.log('子组件B挂载了')
      return ()=>{
        console.log('子组件B卸载了')
      }
    })
    return (
      <div>
        我的年龄是{age}
      </div>
    )
  },(prev,next)=>{
    if(prev.age === next.age){
      return true
    }
    return false
  })