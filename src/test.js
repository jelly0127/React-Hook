import React,{useState,useCallback} from "react";
import { useImmer } from "use-immer";
 
 
export default function Test() {
  const [person, updatePerson] = useImmer({
    name: "Michel",
    age: 20
  });
 
  function updateName(name) {
    updatePerson(draft => {
      draft.name = name;
    });
  }
 
  function becomeOlder() {
    updatePerson(draft => {
      draft.age++;
    });
  }
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const CallBack = useCallback(()=>{
    console.log(count)
  }, [toggle])

  return (
    <div className="App">
      <h1>
        Hello {person.name} ({person.age})
      </h1>
      <input
        onChange={e => {
          updateName(e.target.value);
        }}
        value={person.name}
      />
      <br />
      <button onClick={becomeOlder}>Older</button>
      <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>点我count+1</button>
      <button onClick={()=>setToggle(!toggle)}>点我重新生成callBack</button>
      <button onClick={CallBack}>点我调用Func</button>
    </div>
    </div>
  );
}
