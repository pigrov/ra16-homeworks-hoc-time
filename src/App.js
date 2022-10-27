import "./App.css";
import React, { useState } from "react";
import moment from "moment";
import Moment from "react-moment";
import { v4 as uuidv4 } from "uuid";

const DateTime = (date) => date;
const DateTimePretty = (date) => <Moment fromNow date={new Date(date)} />;

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="date">{DateTimePretty(DateTime(props.date))}</p>
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => (
    <Video key={uuidv4()} url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-01-12 15:24:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-10-12 15:24:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-10-22 15:24:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-10-23 05:24:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-10-23 18:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
