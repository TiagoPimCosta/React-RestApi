import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./routes/PostList";
import PostDetails from "./routes/PostDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
