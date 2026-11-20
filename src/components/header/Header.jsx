import './_header.scss'
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
import logoI from "../../assets/images/ajx-Photoroom.png";





function Header() {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img className="logo-one" src={logo} alt="Logo" />
                    <img className="logo-two" src={logoI} alt="Ajonix" />

                    <nav>
                        <Link className="nav-link" to="/">Меню</Link>
                        {/*<Link className="nav-link" to="/polezny">Полезные</Link>*/}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;







// function Header() {
//     let element = <><>
//         <div id="header">
//             <div className="container">
//                 <div className="header">
//                     {/*<h1>A</h1>*/}
//                     <img className="logo-one" src={logo} alt=""/>
//                     <img className="logo-two" src={lolo} alt=""/>
//                     {/*<p>AJONIX</p>*/}
//                     <nav>
//                         <Link className="nav-link" to="/">Home</Link>
//                         {/*<Link className="nav-link" to="/contact">Contact</Link>*/}
//                         {/*<a href="/">Home</a>*/}
//                         {/*<a href="/contact">Contact</a>*/}
//                         {/*<Link to="/contact">Contact</Link>*/}
//                         {/*<Link to="/pricing">Pricing</Link>*/}
//                         {/*<Link to="/resources">Resources</Link>*/}
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     </>
//     </>;
//     return element
// }
// export default Header;