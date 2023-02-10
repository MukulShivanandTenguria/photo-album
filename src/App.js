import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./Components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumList from "./Components/AlbumList";
import ImageList from "./Components/ImageList";
import Breadcrumbs from "./Components/Breadcrumbs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Breadcrumbs/>}>
          <Route index element={<Users />} />
          <Route path="User/:userId/Albums" element={<AlbumList />} />
          <Route path="User/:userId/Album/:albumId" element={<ImageList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
