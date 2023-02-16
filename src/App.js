import logo from './logo.svg';
import './App.css';

import JSONDATA from '../src/MOCK_DATA.json'

import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <h4 className='fw-bold mt-3'>Filter App</h4>
      <input type="text" placeholder='Search Name' onChange={event => { setSearchTerm(event.target.value) }} />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {  
        return (
          <table class="table table-dark table-striped w-50 mt-4" >
            <thead key={key}>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.gender}</td>
                <td>{val.email}</td>
              </tr>
            </tbody>
          </table>
        )
      })}
    </div>
  );
}

export default App;
