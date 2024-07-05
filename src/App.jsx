//Import Halaman 
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import PopularMovie from "./pages/movie/Popular"
import NowPlayingMovie from "./pages/movie/NowPlaying"
import TopRatedMovie from "./pages/movie/TopRated"
import { Route, Routes} from "react-router-dom"
import Layout from "./layout"
import { ThemeProvider } from "styled-components"
import theme from "./utils/constants/theme"
import GlobalStyle from "./components/GlobalStyle/GlobalStyle"
import Detail from "./pages/movie/Detail"
import data from "./utils/constants/data"
import { useState } from "react"
import MoviesContext from "./context/MoviesContext"

function App() {

  const [movies, setmovies] = useState(data)

  const contextValue = {
    movies,
    setmovies,  
  };

  return (
    <ThemeProvider theme={theme}>
      <MoviesContext.Provider value={contextValue}>
        <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/create" element={<CreateMovie movies={movies} setmovies={setmovies} />}></Route>
              <Route path="/movie/popular" element={<PopularMovie />}></Route>
              <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
              <Route path="/movie/top" element={<TopRatedMovie />}></Route> 
              <Route path="/movie/:id" element={<Detail />}></Route>
            </Routes>
          </Layout>
      </MoviesContext.Provider>
    </ThemeProvider>
  )
}

export default App
