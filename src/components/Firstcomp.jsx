import { Link } from "react-router-dom";

const Firstcomp = () => {
    return ( 
        <div className="navbar">
            <div className="nav-a">
            <img src="photos/new.jpg" />
            <h1>shopper</h1>
            </div>
            <div className="section">
                
                <ul>
                   <Link to="/xyz">
                          <li>Shop</li>
                  </Link>

                  <Link to ="/abc">
                           <li>Men</li>
                  </Link>

                  <Link>
                            <li>Women</li>
                  </Link>

                  <Link to= "/efc">
                           <li>Kid</li> 
                  </Link>  
                </ul>
            </div>
            <div className="login">
                <Link>
                <p>Login</p>
                </Link>
              <img src="photos/cart.jpg" />
            </div>
        </div>
     );
}
export default Firstcomp ;