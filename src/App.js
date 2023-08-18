import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Qoutes from './components/Qoutes';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const category = 'learning';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const myKey = 'AUj4hMwj4zZWOLjZ1Z9NOQ==F4PGbcfkNTtQOc23';

    const fetchQoutes = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': `${myKey}`,
          },
        });
        const qoutes = await response.json();
        setData(qoutes);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchQoutes();
  }, [setData, setIsLoading]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route
            path="/quote"
            element={
              <Qoutes data={data} loading={isLoading} error={hasError} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
