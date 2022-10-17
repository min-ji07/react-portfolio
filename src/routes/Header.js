import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1 className="logo">Dust Portfolio</h1>
            <ul style={{display:'flex'}}>
                <li><Link to={'/arr'}>arr</Link></li>
                <li><Link to={'/aboutme'}>about me</Link></li>
                <li>project</li>
                <li><Link to={'/study'}>study</Link></li>
                <li>contact</li>
                <li><Link to={'/guestbook'}>방명록</Link></li>
            </ul>
        </header>
    )
}

export default Header;