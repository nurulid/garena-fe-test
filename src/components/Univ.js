import React, { useState } from "react";

const Faculty = () => {
  const dataUniv = [
    {
      id: 1,
      univ_name: "Institut Teknologi Bandung",
      univ_logo: "https://web.cdn.id.garenanow.com/webid/scholarship/Logo_ITB.png",
    },
    {
      id: 2,
      univ_name: "Institut Teknologi Sepuluh Nopember",
      univ_logo: "https://web.cdn.id.garenanow.com/webid/scholarship/Logo_ITS.png",
    },
    {
      id: 3,
      univ_name: "Binus University",
      univ_logo: "https://web.cdn.id.garenanow.com/webid/scholarship/Logo_Binus.png",
    },
    {
      id: 4,
      univ_name: "Universitas Gadjah Mada",
      univ_logo: "https://web.cdn.id.garenanow.com/webid/scholarship/Logo_UGM.png",
    },
    {
      id: 5,
      univ_name: "Universitas Indonesia",
      univ_logo: "https://web.cdn.id.garenanow.com/webid/scholarship/Logo_UI.png",
    },
  ];
  const dataFakultas = [
    { id: 1, name: "Bioenergy and Chemurgy", univ_id: 1, sort: 1 },
    { id: 2, name: "Entrepreneurship", univ_id: 1, sort: 2 },
    { id: 3, name: "Informatics/Computer Science", univ_id: 1, sort: 3 },
    { id: 4, name: "Management", univ_id: 1, sort: 4 },
    { id: 5, name: "System and Information Technology", univ_id: 1, sort: 5 },
    { id: 6, name: "Biomedical Engineering", univ_id: 1, sort: 6 },
    { id: 7, name: "Chemical Engineering", univ_id: 1, sort: 7 },
    { id: 8, name: "Civil Engineering", univ_id: 1, sort: 8 },
    { id: 9, name: "Electrical Engineering", univ_id: 1, sort: 9 },
    { id: 10, name: "Electrical Power Engineering", univ_id: 1, sort: 10 },
    { id: 11, name: "Engineering Management", univ_id: 1, sort: 11 },
    { id: 12, name: "Environmental Engineering", univ_id: 1, sort: 12 },
    {
      id: 13,
      name: "Environmental Infrastructure Engineering",
      univ_id: 1,
      sort: 13,
    },
    { id: 14, name: "Food Engineering", univ_id: 1, sort: 14 },
    { id: 15, name: "Geophysical Engineering", univ_id: 1, sort: 15 },
    { id: 16, name: "Industrial Engineering", univ_id: 1, sort: 16 },
    { id: 17, name: "Material Engineering", univ_id: 1, sort: 17 },
    { id: 18, name: "Mechanical Engineering", univ_id: 1, sort: 18 },
    { id: 19, name: "Metallurgical Engineering ", univ_id: 1, sort: 19 },
    { id: 20, name: "Mining Engineering", univ_id: 1, sort: 20 },
    { id: 21, name: "Ocean Engineering", univ_id: 1, sort: 21 },
    { id: 22, name: "Petroleum Engineering", univ_id: 1, sort: 22 },
    { id: 23, name: "Physic Engineering", univ_id: 1, sort: 23 },
    { id: 24, name: "Telecommunication Engineering", univ_id: 1, sort: 24 },
    {
      id: 25,
      name: "Water Resources Engineering and Management",
      univ_id: 1,
      sort: 25,
    },
    { id: 26, name: "Business Management", univ_id: 2, sort: 26 },
    { id: 27, name: "Informatics", univ_id: 2, sort: 27 },
    { id: 28, name: "Information System", univ_id: 2, sort: 28 },
    { id: 29, name: "Information Technology", univ_id: 2, sort: 29 },
    { id: 30, name: "Statistics", univ_id: 2, sort: 30 },
    { id: 31, name: "Chemical Engineering", univ_id: 2, sort: 31 },
    { id: 32, name: "Civil Engineering", univ_id: 2, sort: 32 },
    { id: 33, name: "Computer Engineering", univ_id: 2, sort: 33 },
    { id: 34, name: "Electrical Engineering", univ_id: 2, sort: 34 },
    { id: 35, name: "Environmental Engineering", univ_id: 2, sort: 35 },
    { id: 36, name: "Geomath Engineering", univ_id: 2, sort: 36 },
    { id: 37, name: "Geophysical Engineering", univ_id: 2, sort: 37 },
    { id: 38, name: "Industrial Engineering", univ_id: 2, sort: 38 },
    { id: 39, name: "Mechanical Engineering", univ_id: 2, sort: 39 },
    { id: 40, name: "Material Engineering", univ_id: 2, sort: 40 },
    { id: 41, name: "Physics Engineering", univ_id: 2, sort: 41 },
    { id: 42, name: "Accounting Information Systems", univ_id: 3, sort: 42 },
    {
      id: 43,
      name: "Automotive and Robotics Engineering",
      univ_id: 3,
      sort: 43,
    },
    { id: 44, name: "Business Creation", univ_id: 3, sort: 44 },
    { id: 45, name: "Business Information Technology", univ_id: 3, sort: 45 },
    { id: 46, name: "Business and Information System", univ_id: 3, sort: 46 },
    { id: 47, name: "Business Management", univ_id: 3, sort: 47 },
    { id: 48, name: "Business Management and Marketing", univ_id: 3, sort: 48 },
    { id: 49, name: "Computer Engineering", univ_id: 3, sort: 49 },
    { id: 50, name: "Computer Science", univ_id: 3, sort: 50 },
    { id: 51, name: "Cyber Security", univ_id: 3, sort: 51 },
    { id: 52, name: "Game Application and Technology", univ_id: 3, sort: 52 },
    { id: 53, name: "Information System", univ_id: 3, sort: 53 },
    { id: 54, name: "Information Systems Audit", univ_id: 3, sort: 54 },
    {
      id: 55,
      name: "Information Systems \u2013 Corporate Information System",
      univ_id: 3,
      sort: 55,
    },
    { id: 56, name: "Management", univ_id: 3, sort: 56 },
    { id: 57, name: "Management and Information System", univ_id: 3, sort: 57 },
    { id: 58, name: "Mobile Application and Technology", univ_id: 3, sort: 58 },
    { id: 59, name: "Product Design Engineering", univ_id: 3, sort: 59 },
    { id: 60, name: "Accounting", univ_id: 4, sort: 60 },
    { id: 61, name: "Communications", univ_id: 4, sort: 61 },
    { id: 62, name: "Computer Science", univ_id: 4, sort: 62 },
    { id: 63, name: "Economics", univ_id: 4, sort: 63 },
    { id: 64, name: "International Relations", univ_id: 4, sort: 64 },
    { id: 65, name: "Law", univ_id: 4, sort: 65 },
    { id: 66, name: "Management", univ_id: 4, sort: 66 },
    { id: 67, name: "Urban Planning", univ_id: 4, sort: 67 },
    { id: 68, name: "Statistics", univ_id: 4, sort: 68 },
    { id: 69, name: "Chemical Engineering", univ_id: 4, sort: 69 },
    { id: 70, name: "Civil Engineering", univ_id: 4, sort: 70 },
    { id: 71, name: "Electrical Engineering", univ_id: 4, sort: 71 },
    { id: 72, name: "Geodesy Engineering", univ_id: 4, sort: 72 },
    { id: 73, name: "Geological Engineering", univ_id: 4, sort: 73 },
    { id: 74, name: "Industrial Engineering", univ_id: 4, sort: 74 },
    { id: 75, name: "Information Engineering", univ_id: 4, sort: 75 },
    { id: 76, name: "Mechanical Engineering", univ_id: 4, sort: 76 },
    { id: 77, name: "Physics Engineering", univ_id: 4, sort: 77 },
    { id: 78, name: "Accounting", univ_id: 5, sort: 78 },
    { id: 79, name: "Communication Studies", univ_id: 5, sort: 79 },
    { id: 80, name: "Computer Science", univ_id: 5, sort: 80 },
    { id: 81, name: "Economics", univ_id: 5, sort: 81 },
    { id: 82, name: "Information System", univ_id: 5, sort: 82 },
    { id: 83, name: "International Relations", univ_id: 5, sort: 83 },
    { id: 84, name: "Law", univ_id: 5, sort: 84 },
    { id: 85, name: "Management", univ_id: 5, sort: 85 },
    { id: 86, name: "Statistics", univ_id: 5, sort: 86 },
    { id: 87, name: "Bioprocess Engineering", univ_id: 5, sort: 87 },
    { id: 88, name: "Chemical Engineering", univ_id: 5, sort: 88 },
    { id: 89, name: "Civil Engineering", univ_id: 5, sort: 89 },
    { id: 90, name: "Computer Engineering", univ_id: 5, sort: 90 },
    { id: 91, name: "Electrical Engineering", univ_id: 5, sort: 91 },
    { id: 92, name: "Environmental Engineering", univ_id: 5, sort: 92 },
    { id: 93, name: "Industrial Engineering", univ_id: 5, sort: 93 },
    { id: 94, name: "Marine Engineering", univ_id: 5, sort: 94 },
    { id: 95, name: "Mechanical Engineering", univ_id: 5, sort: 95 },
    {
      id: 96,
      name: "Metallurgy and Material Engineering",
      univ_id: 5,
      sort: 96,
    },
  ];

  // console.log("aji " + dataUniv);
  // console.log("aji " + dataFakultas);

  const newUniv = dataUniv.map((x) => ({
    fakultas: dataFakultas.filter((item) => item.univ_id === x.id),
    ...x,
  }));

  const [univ, setUniv] = useState(newUniv);
  // console.log("aji univ " + univ);

  return (
    <>
      {univ.map((row, i) => {
        return (
          <div key={i} style={{ maxWidth: "1040", marginLeft: "1rem" }}>
            <img src={row.univ_logo} alt="univ logo" />
            <b>{row.univ_name}</b>
            <ol>
              {row &&
                row.fakultas.map((item, idx) => {
                  return <li key={idx}>{item.name}</li>;
                })}
            </ol>
          </div>
        );
      })}
    </>
  );
};

export default Faculty;
