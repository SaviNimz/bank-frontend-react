import { Link } from 'react-router-dom';

function Login() {

    return (
      <div className="App">
        Login
        <Link to="./home">
        <button>Go to Home</button>
      </Link>
      </div>
    );
  }
  
export default Login

