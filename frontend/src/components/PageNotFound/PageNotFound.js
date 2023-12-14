

import funnyCat from "../../assets/images/funny-cat.jpg"
import "./PageNotFound.css"

const PageNotFound= () =>{
    return (
      <div className="page-not-found-container">
        <img className="funny-cat" src={funnyCat} alt="funny cat"/>
        <h1 className="page-not-found-h1">Page not found</h1>
        <p className="page-not-p">Oops! We couldn't find the page you were looking for.</p>
      </div>
    );
  }
  
export default PageNotFound;