import { useEffect, useState } from 'react';
import { UserContext } from './context/UserContext';
import './Sass/App.scss';
import AppRouter from './routes/AppRouter'





function App() {
  const [category, setCategory] = useState('general')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const getAPI = async () => {

      const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&token=5b412bc1844ff312652ced89f9bcbf5e&lang=en`;
      const answer = await fetch(url);
      const news = await answer.json();
      // show the spinner
      // setLoading(true)

      // setTimeout(() => {
      //change the state of the spinner (loading)
      // setLoading(false)
      setNews(news.articles)

      // }, 1000)

    }
    getAPI();
  }, [category])

  return (
    <UserContext.Provider value={{
      setCategory,
      news,
      loading,
      category
    }}>

      <AppRouter />


    </UserContext.Provider>
  );
}

export default App;
