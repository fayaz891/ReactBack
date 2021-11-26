import React from 'react';
import {Route,NavLink,Switch} from 'react-router-dom'


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

               <Route path="/" exact={true} component={Home}/>

             {/* home or main page put in last */}   

               <Route  path="*">  <PageNotFound/> </Route>
             </Switch>  
            
        </div>
    )
}

function Navi(){
    return(
        <div>
            <h1>navigation page</h1>
            {/* <Link> tag is in navbar */}
            <NavLink exact activeClassName="active_class" to="/">home page</NavLink><br/>
            <NavLink exact activeClassName="active_class" to="/About">about page</NavLink><br/>
            <NavLink exact activeClassName="active_class" to="/Login">LOGIN</NavLink>
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

function PageNotFound(){
    return(
        <div>
            <h1>404 page</h1>
            <p>this page not found</p>
        </div>
    )
}


export default Routing
