import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Swagger UI Demo</h1>
      <SwaggerUI url="/swagger.yaml" />
    </div>
  );
}

export default App;
