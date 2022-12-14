import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './routes/AboutMe';
import GuestBook from './routes/GuestBook';
import Home from './routes/Home';
import Study from './routes/Study';
import Arr from './routes/Arr';
import Shop from './routes/Shop';
import Post from './routes/Post';
import Hook from './components/Hook';
import PostDetail from './components/PostDetail';
import StudyDetail from './components/StudyDetail';
import StudyAmend from './components/StudyAmend';
import Contact from './routes/Contact';
import Header from './routes/Header';
import Footer from './routes/Footer';
import ShopDetail from './routes/ShopDetail';
import Cart from './routes/Cart';
import TodoList from './routes/TodoList';
import Modal from './components/Modal';
import Index from './routes/Index';
import StudyWrite from './routes/StudyWrite';
import ReactPortfolio from './routes/ReactPortfolio';
import AiChat from './routes/AiChat';
import VoiceFriend from './routes/VoiceFriend';


// https://leejeongmin.vercel.app/ 참고

const useTitle = (initialTitle) =>{
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
      const htmlTitle = document.querySelector('title');
      htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

function App() {
  const titleUpdater = useTitle("민지의 포트폴리오");
  let state = useSelector((state) => {return state.headerMenu});
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {state && <Modal/>}
      <Header/>
      <Routes>
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/shop" element={<Shop/>}>
          {/* 페이지 안에 둘 다 보여줌 */}
          <Route path="hook" element={<Hook />}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
        </Route>
        <Route path="/shop/shopdetail/:id" element={<ShopDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/arr" element={<Arr/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/post/*" element={<Post/>}>
          <Route Path={"postdetail"} element={<PostDetail/>} />
        </Route>
        <Route path="/guestbook" element={<GuestBook/>} />
        <Route path="/study/*" element={<Study />}/>
        <Route path="/study/studywrite" element={<StudyWrite />}/>
        <Route path="/study/studydetail/:id" element={<StudyDetail />} />
        <Route path="/study/studyamend/:id" element={<StudyAmend/>} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Index />} />
        <Route path="/reactportfolio" element={<ReactPortfolio />} />
        <Route path="/aichat" element={<AiChat />} />
        <Route path="/voicefriend" element={<VoiceFriend />} />
        {/* <Route path="/projectdetail" element={<ProjectDetail />} />
        <Route path="/projectdetail" element={<ProjectDetail />} />
        <Route path="/projectdetail" element={<ProjectDetail />} /> */}
        <Route path="/react-portfolio/*" element={<Index />} />
        {/* 위에 route 제외 오타 포함 모든 것 */}
        <Route path="*" element={<div>4 0 4</div>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;

/*

router v6
- Switch의 네이밍이 Routes로 변경
- exact 옵션 삭제
- path="/Web/:id" --> path=":id" 로 상대경로로 지정
- 외에도 path=".", path=".."등으로 상대 경로 표현

- <Route path="/project" element={<Post />} />
- <Route path="/page1/*" element={<Page1 />} />
- 여러 라우팅을 매칭하고 싶은 경우 url 뒤에 *을 사용

https://velog.io/@soryeongk/ReactRouterDomV6 참고

*/