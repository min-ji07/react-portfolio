import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1 className="logo"><Link to={'/'}>Dust Portfolio</Link></h1>
            <ul style={{display:'flex'}}>
                <li><Link to={'/shop'}>shop</Link></li>
                <li><Link to={'/arr'}>arr</Link></li>
                <li><Link to={'/aboutme'}>about me</Link></li>
                <li><Link to={'/post'}>project</Link></li>
                <li><Link to={'/study'}>study</Link></li>
                <li><Link to={'/contact'}>contact</Link></li>
                <li><Link to={'/guestbook'}>방명록</Link></li>
            </ul>
        </header>
    )
}

export default Header;