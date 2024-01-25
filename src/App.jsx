// import Feed from "./components/Feed";
import React from "react";
import Navbar from "./components/Navbar";
import ChannelDetail from "./components/ChannelDetail";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";
import Page404 from "./components/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Feed = React.lazy(() => import("./components/Feed"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/search/:searchterm" element={<SearchFeed />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
