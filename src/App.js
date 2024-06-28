import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useSearchParams
} from 'react-router-dom';

function Add() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  return <h2>Wynik: {x + y}</h2>;
}

function Sub() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  return <h2>Wynik: {x - y}</h2>;
}

function Mul() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  return <h2>Wynik: {x * y}</h2>;
}

function Div() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  return <h2>Wynik: {x / y}</h2>;
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="add" element={<Add />} />
          <Route path="sub" element={<Sub />} />
          <Route path="mul" element={<Mul />} />
          <Route path="div" element={<Div />} />
        </Routes>
      </Router>
  );
}

export default App;
