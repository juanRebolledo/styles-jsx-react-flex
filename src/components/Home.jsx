import React, {useContext} from "react";

import Card from "components/Card/Card";

import { StylessheetContext } from 'context/StylessheetsState'

import "styles/Home.css";

export default function Home() {
  const {cardStyles, containerStyles} = useContext(StylessheetContext)
  
  const data = [
    {
      id: 1,
      srcImage:
        "https://images.unsplash.com/photo-1596589720778-7ee9fada2984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "Paisaje",
    },
    {
      id: 2,
      srcImage:
        "https://images.unsplash.com/photo-1556036518-705db5129896?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Motos",
    },
    {
      id: 3,
      srcImage:
        "https://images.unsplash.com/photo-1596564211273-4707f6b992f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      title: "Carro",
    },
    {
      id: 4,
      srcImage:
        "https://images.unsplash.com/photo-1595422049448-a0617a13316e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
      title: "Dance",
    },
  ];
  return (
    <main style={containerStyles}>
      {data.map((cardItem) => (
        <Card
          cardStyles = {cardStyles}
          cardTitle={cardItem.title}
          cardImage={cardItem.srcImage}
          key={cardItem.id}
        />
      ))}
    </main>
  );
}
