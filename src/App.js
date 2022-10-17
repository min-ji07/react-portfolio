import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';
import Hook from './components/Hook';
import AboutMe from './routes/AboutMe';
import GuestBook from './routes/GuestBook';
import Home from './routes/Home';
import Study from './routes/Study';
import Arr from './routes/Arr';
import Post from './routes/Post';

// https://leejeongmin.vercel.app/ 참고

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/arr">
          <Arr/>
        </Route>
        <Route path="/aboutme">
          <AboutMe/>
        </Route>
        <Route path="/project">
          <Post/>
        </Route>
        <Route path="/guestbook">
          <GuestBook/>
        </Route>
        <Route path="/study">
          <Study>
            {/* 안에 추가는 안되낭 */}
              <Hook/>
          </Study>
        </Route>
        {/* 왜 그런건지 아직 모르겠지만 / 를 제일 밑으로 */}
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
