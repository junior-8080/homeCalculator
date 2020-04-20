import React,{Component} from "react"
import "./button.css"


class Clear extends Component{
    isOperator = value =>{
        return !isNaN(value) || value ==="." || value==="=";
    }
    render(){
        return(
            <div className={`button ${this.isOperator(this.props.children)
                ?"":"operator"}`} onClick={()=>{this.props.handleClear()}}>
                {this.props.children}
            </div>
        )
      
    }
}
export default Clear