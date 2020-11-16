import React, { Component } from 'react'


class Counter  extends Component {
    state = {
        count:0,
        
    };// is special object that includes any data the component needs
    render() { 
        return (
        <div>
            <span className="badge badge-primary">{this.formatCount()}</span>
            <button>Increment</button>
        </div> // jsx expression
        //jsx expressions must have one parent element so wrapping it with a div is best or easiest
        );

       
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