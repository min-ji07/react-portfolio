function Footer(){
    window.addEventListener('scroll', function(){
        let scroll = window.scrollY;
        const topBtn = document.getElementById('topBtn');
        if(scroll > 100){
            topBtn.classList.add('show');
        }else if(scroll < 100){
            topBtn.classList.remove('show');
        }
    });
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return( 
        <footer>
            <div id="topBtn" onClick={scrollTop} className="top-btn">
                <p>위로 올라가요!</p>
                <img src={process.env.PUBLIC_URL + `/img/aa5923ee18f6af042f4fb0c03d7e6e83822ceda4.gif`} alt="위로 올라가요!"/>
            </div>
        </footer>
    )
}
export default Footer;