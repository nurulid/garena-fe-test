import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Program from "./components/Program";
import Partner from "./components/Partner";
// import Univ from "./components/Univ";
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
  // const [listUniv, setListUniv] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //get data ALL
      const resultDataAll = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*"
      );
      setData(resultDataAll.data.data);

      // get data Univ
      const resultUniv = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*"
      );
      setDataUniv(resultUniv.data.data);

      // get data Faculty
      const resultFaculty = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan"
      );
      setDataFaculty(resultFaculty.data.data);

      // get data Testimoni
      const resultTestimoni = await Axios(
        "https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*"
      );
      setDataTestimoni(resultTestimoni.data.data);
    };

    fetchData();
  }, []);

  // merge with relation
  const newUniv = dataUniv.map((x) => ({
    fakultas: dataFaculty.filter((item) => item.univ_id === x.id),
    ...x,
  }));

  // setListUniv(newUniv);

  // console.log(
  //   dataUniv.map((x) => ({
  //     fakultas: dataFaculty.filter((item) => item.univ_id === x.id),
  //     ...x,
  //   }))
  // );

  // console.log(listUniv);

  return (
    <div className="App">
      <Navbar />
      <Head />
      <div className="container">
        <Program firstData={data[0] || {}} />
        <Partner newUniv={newUniv} />
        {/* <Univ /> */}
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
