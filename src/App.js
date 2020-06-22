import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Program from "./components/Program";
import Partner from "./components/Partner";
import Univ from "./components/Univ";
import Timeline from "./components/Timeline";
import Testimoni from "./components/Testimoni";
import Apply from "./components/Apply";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [dataUniv, setDataUniv] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataTestimoni, setDataTestimoni] = useState([]);

  //get data ALL
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*"
      );

      setData(result.data.data);
    };
    fetchData();
  }, []);

  // get data Univ
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*"
      );

      setDataUniv(result.data.data);
    };
    fetchData();
  }, []);

  // get data Faculty
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan&fields=*.*"
      );

      setDataFaculty(result.data.data);
    };
    fetchData();
  }, []);

  // get data Testimoni
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*"
      );

      setDataTestimoni(result.data.data);
    };
    fetchData();
  }, []);

  //////////////////////

  // console.log(newUniv);

  const newUniv = dataUniv.map((x) => ({
    fakultas: dataFaculty.filter((item) => item.univ_id === x.id),
    ...x,
  }));
  console.log(
    dataUniv.map((x) => ({
      fakultas: dataFaculty.filter((item) => item.univ_id === x.id),
      ...x,
    }))
  );

  const [univ, setUniv] = useState(newUniv);
  const [fakul, setFakul] = useState(univ);

  useEffect(() => {
    setUniv(newUniv);
    setFakul(univ);
  }, [dataFaculty]);

  // console.log(univ);

  return (
    <div className="App">
      <Navbar />
      <Head />
      <div className="container">
        <Program firstData={data[0] || {}} />
        <Partner dataUniv={dataUniv} dataFaculty={dataFaculty} univ={univ} fakul={fakul} />
        <Univ />
        <Timeline firstData={data[0] || {}} />
        <Testimoni dataTestimoni={dataTestimoni} />
      </div>
      <Apply />
      <div className="container">
        <FAQ firstData={data[0] || {}} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
