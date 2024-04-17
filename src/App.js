import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Images from "./components/Images";
import './index.css'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <Router>
        <div>
          {isLoggedIn ? (
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/posts">POSTS</Link>
                  </li>
                  <li>
                    <Link to="/comments">COMMENTS</Link>
                  </li>
                  <li>
                    <Link to="/images">IMAGES</Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/images" element={<Images />} />
              </Routes>
            </div>
          ) : (
              <div>
                <h1>Welcome to Dumb data fetch app</h1>
              <button>
                <Link to="/login">LOGIN</Link>
              </button>
              <button>
                <Link to="/register">REGISTER</Link>
              </button>
              <Routes>
                <Route
                  path="/login"
                  element={<Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route
                  path="/register"
                  element={<Register setIsLoggedIn={setIsLoggedIn} />}
                />
              </Routes>
            </div>
          )}
        </div>
      </Router>
    );}

export default App;
