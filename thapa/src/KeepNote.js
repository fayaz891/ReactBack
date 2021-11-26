import React,{useState} from 'react'

function KeepNote() {
    const [item, setitem] = useState([])

    function addNote(note) {
       setitem((olddata)=>{
           return[...olddata,note]
       }) 
       console.log("fayaz")
    };

    function ondelete(id) {
          setitem((olditem)=>{
            olditem.filter((val,ind)=>{
                return ind!==id
            })
        })
        
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Keep Note</h1>

            <CreateNote passNote={addNote}/>

            {item.map((val,ind)=>{
               return <Note key={ind} id={ind} title={val.title} content={val.content} deleteitem={ondelete}/>
            })}

            <Footer/>
        </div>
    )
}



function CreateNote(props) {
    // we need 2 input data thats why use object
    const [note, setnote] = useState({
        title:"",
        content:""
    });

    function inputEvent(e) {

        // const value=e.target.value;
        // const name=e.target.value;

        const {value,name} = e.target;

        setnote((olddata)=>{
            return{
                ...olddata,
                [name]:value,
            };
        });
    };

    function addEvent() {
        alert("clicked")
        props.passNote(note)
        setnote({
            title:"",
            content:"",
        })
    }

    return (
        <div>
        <form>
            <input type="text" placeholder="Title" name="title" value={note.title} onChange={inputEvent} autoComplete="off"/>
            <textarea row="" column="" placeholder="write a note" name="content" value={note.content} onChange={inputEvent} ></textarea>
            <button onClick={addEvent}>+</button>
        </form>
        </div>
    )
}

function Note(props) {
    function deletenote() {
        props.deleteitem(props.id);
    }
    return(
        <>
        <div>
            <h3 style={{margin:"0"}}>{props.title}</h3><br/>
            <p style={{margin:"0"}}>{props.content}</p><br/>
            <button onClick={deletenote}>-</button>
        </div>
        </>
    )
}








 function Footer() {
     let date= new Date().getFullYear()
    return (
        <div>
            <p style={{textAlign:"center"}}>Copyright © {date}</p>
        </div>
    )
}


export default KeepNote
