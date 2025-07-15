import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Fitness Tracker</h1>
          <h2>Your progress starts here!</h2>
        </>
      } />
    </Routes>
  );
}

export default App;
