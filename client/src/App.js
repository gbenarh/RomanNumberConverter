import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';

const App = () => {
  const [string, setString] = useState('');
  const [number, setNumber] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post('http://localhost:4000/romanapi', {
      string,
    });

    setString('');
    setNumber(result.data);
  };

  return (
    <div className='container'>
      <h1>Roman Number Converter</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Enter Roman Characters</label>
          <input
            type='text'
            className='form-control'
            value={string}
            onChange={(e) => setString(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
      {number != null ? <Result number={number} /> : null}
    </div>
  );
};

export default App;
