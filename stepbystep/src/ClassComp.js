import React, { Component } from 'react'


class ClassComp extends Component{

    constructor(){
        super();
        this.state={data:0}
    }

    apple() {
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <>
                <div style={{ backgroundColor: "green"}}>
                <h1>ClassComponent and react witout jsx </h1>

                <h2>state in class component</h2>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.apple()}> class state</button>
                
                <h2>props in class component</h2>
                <div>{this.props.name}</div>
                </div>
                

            </>
        )

    }

}
//return React.createElement('div',nul,'without jsx')



export default ClassComp