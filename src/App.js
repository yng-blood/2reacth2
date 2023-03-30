import React, { Component } from 'react'
import "./App.css";
export default class App extends Component{
  state={
    Name:"",
    Department:"",
    Rating:"",
    employees:[]
  };
  ChangeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value    
    });
  }
  ClickHandler=(e)=>{
    e.preventDefault();
   document.querySelector("hr").style.display="none";
  document.getElementById("flex-container").style.display="flex";
    console.log("Submit handler called");
    const empObj={
      Name:this.state.Name,
      Department:this.state.Department,
      Rating:this.state.Rating,
    }
    const arr=this.state.employees;
    arr.push(empObj);
    this.setState({employees:arr});
    console.log(this.state);
  }

  render(){
    return(
<div>
      <h1 style={{textAlign:"center"}}>EMPLOYEE FEEDBACK FORM</h1>
      <center>
      <form>
        <label htmlFor="Name">Name :</label>
        <input name="Name" type="text" value={this.state.Name} onChange={this.ChangeHandler}></input>
        <br/>
        <label htmlFor="Department">Department :</label>
        <input name="Department" type="text"  value={this.state.Department} onChange={this.ChangeHandler}></input>
        <br/>
        <label htmlFor="Rating">Rating :</label>
        <input name="Rating" type='digits' value={this.state.Rating} onChange={this.ChangeHandler}></input>
        <br/>
        <button id="submit" onClick={this.ClickHandler} type='submit'>Submit</button>
      </form>
      <hr/>
      <div id='flex-container'>
     {this.state.employees.map((value,index)=>{
      return(
      <div className='flex' key={index}>
       Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
  </div>
      )
     }

     )}
      </div>
      
      </center>
      
    </div>
    );

  }
}
