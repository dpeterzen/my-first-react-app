import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <h2><Link to="/">
        GO BACK HOME
      </Link></h2>
    </div>
  );
};

export default ErrorPage;
