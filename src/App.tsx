import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./routes/PostList";
import PostDetails from "./routes/PostDetails";
import Navbar from "./components/Navbar";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="px-8 py-6">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
