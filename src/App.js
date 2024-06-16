import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Headlines from "./componets/Headlines";
import ArticleSummery from "./componets/ArticleSummery";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import CustomModal from "./componets/utils/Modal";
import { Container } from "react-bootstrap";

function App() {
  const keyAPI =
    "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=d94ecca9-2deb-4b7d-a4a3-18d7ed99de2e";

  const [newsData, setNewsData] = useState([]);
  const [getError, setGetError] = useState({ message: ``, count: 0 });

  const getNewsData = async () => {
    try {
      const res = await axios.get(keyAPI);
      console.log(res.data.response.results);
      return res.data.response.results.length
        ? res.data.response.results
        : new Error(`There is no News today`);
    } catch (e) {
      setGetError({
        message: `News data not available from the server: ${e.message}`,
        count: 0,
      });
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      setNewsData(await getNewsData());
    };
    setTimeout(() => getData(), 1000);
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Hero />
          {getError.count === 0 && (
            <CustomModal
              handleClose={() =>
                setGetError({ ...getError, count: getError.count + 1 })
              }
              message={getError.message}
            />
          )}
          <Routes>
            <Route path="/" element={<Headlines newsData={newsData} />} />
            <Route
              path="/:id"
              element={<ArticleSummery newsData={newsData} />}
            />
            <Route path="*" element={<Headlines newsData={newsData} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
