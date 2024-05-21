//Import Halaman 
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import PopularMovie from "./pages/movie/Popular"
import NowPlayingMovie from "./pages/movie/NowPlaying"
import TopRatedMovie from "./pages/movie/TopRated"
import { Route, Routes} from "react-router-dom"
import Layout from "./layout"


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/create" element={<CreateMovie />}></Route>
        <Route path="/movie/popular" element={<PopularMovie />}></Route>
        <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
        <Route path="/movie/top" element={<TopRatedMovie />}></Route> 
      </Routes>
    </Layout>
  )
}

export default App
