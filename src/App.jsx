import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>Hi from the home page</h1>
      <p>Some links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
