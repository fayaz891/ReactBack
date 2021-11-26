// edit the item when user click the edit button
//  1) get the id and name of the data which user clicked to edit
//  2) set the toggle mode to change the submit button into edit button
//  3)now update the value of the setinputwith the new updated value to edit
//  4)to pass the current element id to new state varaible for refernce

import React, { useState } from "react";

function TodoUpdate() {
  const [item, setitem] = useState("");
  const [state, setstate] = useState([]);
//   state for toggle of idit and add button
  const [Tbutton, setTbutton] = useState(true)
//   state for getting id after update in input field
const [isedititem, setisedititem] = useState(null);

  //  ********** add item***********
  function additem() {

    if (!item) {   } else if(item && !Tbutton){
      setstate(
        state.map((elem) => {
          if (elem.id === isedititem) {
            return { ...elem, name: item };
          }
          return elem;
        })
      );
      //   button toggle in input field after edit
      setTbutton(true);

      // update value of setitem after edit
      setitem("");

      // getting id update item after edit
      setisedititem(null);
    } else {
      // i add one id along with new input data for edit(if need edit later )
      const AllInput = { id: new Date().getTime().toString(), name: item };
      setstate([...state, AllInput]);
      setitem("");
    }
  }

  //   **********delete item************
  function deleteitem(index) {
    console.log(index);
    const updateitem = state.filter((e) => {
      return index !== e.id;
    });
    setstate(updateitem);
  }

  function editItem(index) {
    //   get id&name of clicked item in state array
      const newedit=state.find((elm)=>{
          return elm.id===index;
      })

    //   button toggle in input field
    setTbutton(false);

    // update value of setitem
    setitem(newedit.name)

    // getting id update item
    setisedititem(index)
  }

  return (
    <div className="main">
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setitem(e.target.value);
        }}
      />
      {Tbutton ? (
        <button onClick={additem}>+</button>
      ) : (
        <button onClick={additem}>e</button>
      )}

      <ul>
        {/* now it is not need to use index,bc already add one id with one item */}
        {state.map((elem) => {
          return (
            <div key={elem.id}>
              <div style={{ display: "flex" }}>
                <button
                  onClick={() => {
                    deleteitem(elem.id);
                  }}
                >
                  {" "}
                  -
                </button>
                <li>{elem.name}</li>
                <button
                  onClick={() => {
                    editItem(elem.id);
                  }}
                >
                  e
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoUpdate;
