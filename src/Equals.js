import React ,{Component} from "react"
import "./button.css"

class Equals extends Component{
    // constructor(props){
    //     super(props)
    // }
    isOperator = value =>{
        return !isNaN(value) || value ==="." || value ==="=";
    }
    render(){
        return(
            <div className={`button ${this.isOperator(this.props.children)
                ?"":"operator"}`} onClick={()=>{this.props.handleClick()}}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Equals
