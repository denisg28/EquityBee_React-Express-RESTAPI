import React, {Component} from 'react';
import './customers.css';

class Customers extends Component {

constructor()
{
    super();
    this.state = {
        customers: []
    }
}

componentDidMount()
{
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Array of Customers = ', customers)));   //*take response in Console Array*//

}

render(){
  return (
    <div>
      <h3>Customers</h3>
      <h2>by DENIS</h2>
      <h1>EquityBee</h1>
      <ul>
          {this.state.customers.map(customers =>
            <li key={customers.id}>
                {customers.firstName} 
                {customers.lastName}

            </li>
            )}
             
          </ul>

          
          <p><b>FirstName: </b>
   <input type="text" size="30"></input>
          </p>
         <p><b>LastName: </b>
   <input type="text" size="30"></input>
         </p>
   <input type="submit" value="Add New Customer"></input>

    </div>
  );
  }
  
}


export default Customers;
