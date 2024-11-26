import { Link } from "react-router-dom";

const Secoundcomp = () => {
    return ( 
        <div className="hero">
            <div className="hero-left">
                <p>NEW ARRIVALS ONLY</p>
                 <div className="hero-a">
                    <b>new</b>
                    <img src="photos/hand.jpg"  />
                    <p>collections<br/>
                      for everyone
                    </p>
                 </div>
                 <div className="hand-b">
                    <Link>
                    <b>Latest Collection</b>
                    </Link>
                 </div>
            </div>
            <div className="hero-right">
            <img src="photos/pic.jpg"  />
            </div>
        </div>
     );
}
 
export default Secoundcomp;