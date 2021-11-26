import React,{useState} from 'react'
import Form from './Form';
import sdata from './Sdata';

function Demo() {
    return (
        <div>
            <div style={{"backgroundColor":"beige"}}>
                <Navb/>
                <main>
                {/* <Card title={sdata[0].title} para={sdata[0].para} butt={sdata[0].butt}/>  
                <Card title={sdata[1].title} para={sdata[1].para} butt={sdata[1].butt}/>
                <Card title={sdata[2].title} para={sdata[2].para} butt={sdata[2].butt}/>
                <Card title={sdata[3].title} para={sdata[3].para} butt={sdata[3].butt}/>
                <Card title={sdata[4].title} para={sdata[4].para} butt={sdata[4].butt}/>  */}

                
                    {sdata.map((val)=>
                        <Card key={val.id} title={val.title} para={val.para} state={val.state} butt={val.butt}/>,
                        
                    )}
                
                </main>
                <Form/>
               
                <Footer/>
                
            </div>
        </div>
    )
}


function Navb() {
    return (
        <div>
        <nav className="nav">
                <h2>Demo website</h2>
                
                    <ul>
                    <Curr_Time/>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                </nav>
        </div>
    )
}




function Card(props) {
    return (
        <>
            <div className="card">
                        <div className="card-img">
                        <img src="imgs/demo.png" alt="card" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                            <h3>{props.title}</h3>
                            </div>
                            <div className="card-p">
                            <p>{props.para}</p>
                            <p>state:<b>{props.state}</b></p>
                               <button>
                                   <a href="#">{props.butt}</a>
                               </button>
                            </div>

                        </div>

                        </div>
        </>
    )
}





function Footer() {
    return (
        <div>
            <footer>
            
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>SignUp</li>
                    </ul>
                    <p>Copyright 2021</p>
                </footer>
        </div>
    )
}



function Curr_Time() {
    let newtime = new Date().toLocaleTimeString();
    const [time, settime] = useState(newtime);

    let updatetime= function() {
        settime(new Date().toLocaleTimeString());
    }

    setInterval(updatetime,1000)
     
    return (
        <div>
            {time}
            {/* <button onClick={updatetime}>Refresh time</button> */}
                
        </div>
    )
}






export default Demo;
