import React from 'react';
import {
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
          </Select>
        </FormControl>
      </div>


      {/* Header*/}
      {/* Title+select input dropdown field*/}

      {/* InfoBox*/}
      {/* infobox*/}
      {/* infobox*/}

      {/* table*/}
      {/* graph*/}

      {/* Map*/}
    </div>
  );
}

export default App;
