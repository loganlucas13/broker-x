import React from 'react';
import Button from './components/Button'

function App() {
  return (
    <div className="text-center bg-stone-100 min-h-screen w-full">
      <Button variant="primary" buttonText={"primary"}></Button>
      <Button variant="secondary" buttonText={"secondary"}></Button>
      <Button buttonText={"disabled"} disabled={true}></Button>
    </div>
  );
}

export default App;
