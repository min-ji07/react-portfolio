import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouterProvider } from "react-router-dom";
import { modalOpen } from "../store";


function Header(){
    let dispatch = useDispatch();
    const root = document.getElementById('root');
    const [dark, setDark] = useState(true);
    return(
        <header>
            <div>
                {/* a태그로 바꾸면 안됨 */}
                <Link to={'/'}><h1 className="logo">Dust
                    <span className="dark-mode" onClick={(e) => {
                        e.preventDefault();
                        const click = e.currentTarget;
                        if(click === e.currentTarget){
                            root.classList.toggle('dark');
                            setDark(!dark);
                        }
                    }}>{dark ? '🌜모드' : '🌞모드'}</span></h1>
                </Link>
                <ul>
                    {/* 메뉴는 총 5개로 만들것, home(dust), about, shop, todoList, github */}
                    {/* <li><Link to={'/arr'}>arr</Link></li> */}
                    {/* <li><Link to={'/aboutme'}>about me(삭)</Link></li> */}
                    <li><Link to={'/todolist'}>TodoList</Link></li>
                    <li><Link to={'/shop'}>shop</Link></li>
                    <li><Link to={'/cart'}>cart</Link></li>
                    {/* <li><Link to={'/post'}>project(삭)</Link></li> */}
                    <li><Link to={'/study'}>Board</Link></li>
                    <li><a href="https://github.com/min-ji07">Github</a></li>
                    {/* <li><Link to={'/contact'}>contact</Link></li> */}
                    {/* <li><Link to={'/guestbook'}>방명록</Link></li> */}
                </ul>
                <div id="mobile-menu" onClick={() => {
                    dispatch(modalOpen(true));
                }}>Menu</div>   
            </div>
        </header>
    )
}


/*
react에서 addEventListener 사용하려면 useEffect내에서 감지 후 사용해야함
https://babycoder05.tistory.com/entry/React-useEffect%EC%99%80-addEventListener-window-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B7%9C%EC%B9%99 참고
const li = document.getElementById('li');
li.addEventListener('click', function(){
    console.log('누름')
})
*/


export default Header;