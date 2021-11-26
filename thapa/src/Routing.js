import React from 'react';
import {Route,NavLink,Switch,useParams,useLocation,useHistory,Redirect} from 'react-router-dom'


function Routing() {
    return (
        <div>
           
        {/* npm install react-router-dom */}
        {/* <Router></Router> put in index.js */}
            <h1>simple React Routing</h1>

            {/* <Routes> is in app.js page */}
            
               <Navi/>
               <Switch>
               <Route  path="/about" component={About}/>
               {/* <Route  path="/about/name" exact component={Name}/> */}

               <Route  path="/services" component={Services}/>

               {/* add 1 value dynamically (path="/user/:fname") */}
               <Route  path="/user/:fname/:lname" component={User}/>  

               <Route path="/" exact={true} component={Home}/>

             {/* home or main page put in last */}   

               {/* <Route  path="*">  <PageNotFound/> </Route> */}

               {/* if 404page not shown and redirect to home page then use below */}
               <Redirect to="/"/>

             </Switch>  
            
        </div>
    )
}

function Navi(){
    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"forestgreen",alignItems:"center"}}>
                <h1>navigation page</h1>
            {/* <Link> tag is in navbar */}
            <NavLink exact activeClassName="active_class" to="/">home page</NavLink><br/>
            <NavLink exact activeClassName="active_class" to="/About">about page</NavLink><br/>
             <NavLink exact activeClassName="active_class" to="/Services">services</NavLink><br/>
              <NavLink activeClassName="active_class" to="/User">User</NavLink><br/>
            <NavLink exact activeClassName="active_class" to="/Login">LOGIN</NavLink>
            </div>
        </div>
    )
}

// import {useParams} from "react-router-dom"
function User(){
   const {fname,lname} = useParams()
   const location =useLocation();
   const history = useHistory()

//    console.log(location);
// console.log(history)

    return(
        <div>
            <h1>User{fname} page</h1>  <h2> my LastName {lname}</h2>
            <p>My location is {location.pathname}</p>

            {/* {location.pathname === `/user/a/b` ? (<button>Hello fayaz</button>):null} */}
    
            <p>add 2 value dynamically</p>
            <button onClick={()=>{history.goBack()}}>Go back to use useHistory hook</button>
            <button onClick={()=>{history.push("/")}}>Goto home page useHistory hook</button>
        </div>
    )
}

function Home(){
    return(
        <div>
            <h1>Home page</h1>
            <p>this is home page</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>about page</h1>
            <p>this is about page</p>
        </div>
    )
}

function Services(){
    return(
        <div>
            <h1>service page</h1>
            <p>this is service page</p>
        </div>
    )
}




// function PageNotFound(){
//     return(
//         <div>
//             <h1>404 page</h1>
//             <p>this page not found</p>
//             <NavLink to="/">goback</NavLink>
//         </div>
//     )
// }


export default Routing

// react router hooks 1)useParams  2)useLocation  3)useHistory  4)useRouteMatch




