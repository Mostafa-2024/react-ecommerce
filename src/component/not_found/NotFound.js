import "./not_found.css";

function NotFound() {

  window.scrollTo(0, 0);

  return(

    <div className="not_found">

      <h2>404</h2>

      <h3>Not Found</h3>

      <p>Sorry, the requested page was not found.</p>

      <button>Go Home</button>

    </div>

  )

}

export default NotFound;