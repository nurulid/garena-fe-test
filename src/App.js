import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Program from "./components/Program";
import Partner from "./components/Partner";
import Timeline from "./components/Timeline";
import Testimoni from "./components/Testimoni";
import Apply from "./components/Apply";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
// import Axios from "axios";

const App = () =>  {
  const [data, setData] = useState([]);
  const [dataUniv, setDataUniv] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataTestimoni, setDataTestimoni] = useState([]);

  //get data ALL
  useEffect(() => {
    fetch(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*"
    )
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi.data));
  }, []);

  // get data Univ
  useEffect(() => {
    fetch(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*"
    )
      .then((res) => res.json())
      .then((dataApi) => setDataUniv(dataApi.data));
  }, []);

  // get data Faculty
  useEffect(() => {
    fetch(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan&fields=*.*"
    )
      .then((res) => res.json())
      .then((dataApi) => setDataFaculty(dataApi.data));
  }, []);

  // get data Testimoni
  useEffect(() => {
    fetch(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*"
    )
      .then((res) => res.json())
      .then((dataApi) => setDataTestimoni(dataApi.data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Head />
      <div className="container">
        <Program data={data} />
        <Partner dataUniv={dataUniv} dataFaculty={dataFaculty}/>
        <Timeline data={data} />
        <Testimoni dataTestimoni={dataTestimoni} />
      </div>
      <Apply />
      <div className="container">
        <FAQ data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
