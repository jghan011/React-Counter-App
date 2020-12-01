import React, { Component } from 'react'


class Counter extends Component {
    state = {
        count:this.props.value
        //this.props.value will call upon counters jsx value and so the number 4 will be rendered to the DOM
     
        
    };// is special object that includes any data the component needs
    // styles ={
    //     fontSize: 10, //react will convert this to 10px
    //     fontWeight: "bold"

    // constructor(){
    //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    //     //will return a new instance of handleIncrement and reset it
    // }   

    //when calling a constructor you must call constructor of parent class to use "this".. in this case it is counter... by writing super(); you get  access to Counter method
    //arrow function inherit the  "this" keyword
    //so it's cleaner and quicker to use arrow function than to  use the constructor method

    handleIncrement = () => {
        
           this.setState({count: this.state.count +1});
    };

 
    // };
    render() { 
        // console.log('props',this.props);// plain js object that includes all the attributes from counter components the key won't be part of it becuawse it is used for identiffying elements
  
    return (
        <div>
      
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm">Increment</button>
         
        </div> 
        
        // jsx expression
        //jsx expressions must have one parent element so wrapping it with a div is best or easiest
        //each tag should have a unique key
        //right click  then click refractor then click  extract to method ind in class... then give name the method 
        //arrow function replaces constructor so you get access to all the other things inside th ecomponent
        // under return there is  {this.props.children} which will render the H4 from counters cuzz that is the child
        );   
} 

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

formatCount() {
    const {count} = this.state; // now
    return count === 0 ? "Zero" : count;
    
}
}

export default Counter;
 // import react and component class from react module

 // use parenthessis after return and place the div inside for successful code
 // coommand + D to select multiple occurrences in vsc
 //this refers to the object