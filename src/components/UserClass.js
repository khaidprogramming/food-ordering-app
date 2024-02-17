import React from "react";

class UserClass extends React.Component {
  

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

    }

    componentDidMount(){
        
    }

    render(){
        const{count} = this.state;


        return(
            <div>
                <h2>{this.props.name}</h2>
                <h1>{count}</h1>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count +1
                    })
                }}>up</button>
            </div>
        )
    
}
    }
       

export default UserClass;