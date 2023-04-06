import React, { useState } from "react";

const Path = () => {
  const [state, setState] = useState({ name: "" });

  const hander = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    
  };
  const [data, setData] = useState([]);
  const hello = (e) => {
    e.preventDefault();
    data.push(state);
    setData(data);
    console.log(data, "dataaaaaaaaaaaaaaaaaaa");
    setState({ name: "" });
  };

  const myfilter = (id,e) => {
    e.preventDefault();
    setData(data.filter((v, i) => i !== id));
    console.log(data,"mydatatatatata");
  };
  return (
    <>
      <form action="">
        <div>
          {data.map((v, id) => (
            <button onClick={(e) => myfilter(id,e)}>{v.name} X</button>
          ))}{" "}
        </div>
        <input type="text" onChange={hander} value={state.name} name="name" />
        <button onClick={hello}>submit</button>
      </form>
    </>
  );
};

export default Path;
