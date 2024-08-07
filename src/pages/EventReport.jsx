import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from "react-responsive-masonry";
import "./EventReport.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const EventReport = () => {
  const [data, setData] = useState([]);
  const { code } = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/event/${code}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [code]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <Navbar />
      <div className="eventreport">
        <div className="eventhero">
          <div className="eventtitle">
            <p>{data.eventname}</p>
          </div>
          <div className="eventdate">
            <div className="divdate">
              <div className="date">
                <p>{new Date(data.start).getDate()}</p>
              </div>
              <div className="month">
                <p>{month[new Date(data.start).getMonth()]}</p>
              </div>
              <div className="year">
                <p>{new Date(data.start).getFullYear()}</p>
              </div>
            </div>
            <div className="day">
              <p>{weekday[new Date(data.start).getDay()]}</p>
            </div>
          </div>
        </div>

        <div className="eventdesc">
          <div className="desc">{data.description}</div>
          <div className="poster">
            <img src={data.poster} width="300rem" alt="" />
          </div>
        </div>
        <div className="eventphotos">
          <h2 className="eventphotohead">Event Photos</h2>
        </div>
        <div className="gallery">
          <Masonry columnsCount={3} gutter="10px">
            {data.images?.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", padding: "0.5em" }}
                alt={data.eventname}
              />
            ))}
          </Masonry>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventReport;
