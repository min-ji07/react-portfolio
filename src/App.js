import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import './App.css';
import AboutMe from './routes/AboutMe';
import GuestBook from './routes/GuestBook';
import Home from './routes/Home';
import Study from './routes/Study';
import Arr from './routes/Arr';
import Post from './routes/Post';
import Hook from './components/Hook';

// https://leejeongmin.vercel.app/ 참고

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/arr" element={<Arr/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/project" element={<Post/>} />
        <Route path="/guestbook" element={<GuestBook/>} />
        <Route path="/study" element={<Study />}>
          {/* 페이지 안에 둘 다 보여줌 */}
          <Route path="hook" element={<Hook />}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
        </Route>
        {/* 왜 그런건지 아직 모르겠지만 / 를 제일 밑으로 */}
        <Route path="/" element={<Home />} />
        {/* 위에 route 제외 오타 포함 모든 것 */}
        <Route path="*" element={<div>4 0 4</div>} />
      </Routes>
    </Router>
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