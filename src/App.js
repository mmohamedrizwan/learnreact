import './App.css';
import Counter from "./components/Counter";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
