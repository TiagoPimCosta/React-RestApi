import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostList, PostDetails, CommentList, NotFound } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="px-6 py-20 bg-gray-100">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/comments" element={<CommentList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
