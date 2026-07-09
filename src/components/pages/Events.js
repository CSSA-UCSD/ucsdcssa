import React from "react";

import EventsCard from "../components/events/EventsCard";
import PrevEventsCard from "../components/events/PrevEventsCard";
import prevEventsData from "../data/events/prevEventsData";
import upcomingEventsData from "../data/events/upcomingEventsData";
import AOS from "aos";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class Events extends React.Component {
  componentDidMount() {
    AOS.init({ duration: 2000 });
  }

  render() {
    const sortedUpcomingEvents = upcomingEventsData.sort(
      (a, b) => a.id - b.id
    );
    const upcomingComponent = sortedUpcomingEvents.map((item) => (
      <EventsCard key={item.id} item={item} />
    ));
    const previousComponent = prevEventsData.map((item, key) => (
      <PrevEventsCard
        key={`${key}: ${item.date.split(" ")[1]}`}
        item={item}
      />
    ));

const events = [
  // --- YOUR EXISTING EVENTS ---
  { title: "Merch Design Competition Start", start: "2026-07-10" },
  { title: "Merch Design Submissions Due", start: "2026-08-08" },

  // --- FALL 2026 ---
  

  // --- WINTER 2027 ---
  
  // --- SPRING 2027 ---
  

  // --- SUMMER 2026 ---
  

  // Session I
  { title: "Session I Instruction Begins", start: "2026-06-29" },
  { title: "Independence Day Holiday", start: "2026-07-03" },
  { title: "Session I Instruction Ends", start: "2026-07-31" },
  { title: "Session I Final Exams", start: "2026-07-31", end: "2026-08-02" },

  // Session II
  { title: "Session II Instruction Begins", start: "2026-08-03" },
  { title: "Session II Instruction Ends", start: "2026-09-04" },
  { title: "Labor Day Holiday", start: "2026-09-07" },
  { title: "Session II Final Exams", start: "2026-09-04", end: "2026-09-06" }
];


    return (
      <div className="container events">

        {/* Calendar Styles */}
        <style>{`
          /* Event blocks wrap */
          .fc-daygrid-event {
            display: block;
            white-space: normal;
            word-wrap: break-word;
            border: none;
            background-color: transparent;
            font-size: 0.75rem;
          }

          .custom-event {
          background: #3b82f6;
          color: white;
          border-radius: 6px;
          padding: 3px 6px;
          text-align: center;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          font-size: 0.7rem;
          margin-bottom: 4px; /* <<< spacing added */
          }


          .custom-event:hover {
            background-color: #2563eb;
          }

          .fc .fc-daygrid-day-number {
            font-size: 0.8rem;
          }

          .fc .fc-toolbar-title {
            font-weight: 600;
            font-size: 1.5rem;
          }

          .fc-daygrid-day-events {
            max-height: none !important;
          }

          /* MOBILE FIX – large title, smaller buttons */
          @media (max-width: 600px) {

            .fc .fc-toolbar {
              flex-direction: column;
              align-items: center;
              gap: 0.35rem;
              text-align: center;
            }

            .fc .fc-toolbar-chunk {
              width: 100%;
              display: flex;
              justify-content: center;
            }

            .fc .fc-toolbar-title {
              font-size: 1.5rem;
              line-height: 1.2;
              white-space: normal;
            }

            .fc .fc-button {
              font-size: 0.75rem;
              padding: 3px 8px;
            }

            .fc .fc-col-header-cell-cushion {
              font-size: 0.75rem;
            }

            .custom-event,
            .fc-daygrid-event {
              font-size: 0.65rem;
            }
          }
        `}</style>

        <div className="row">
          <div className="col-sm-8 order-sm-2 pb-5">
            <h1>Events</h1>
            <p>
              We host a variety of events year-round, including professional
              development workshops, academic seminars, and networking
              opportunities.
            </p>
          </div>
        </div>

        {/* FullCalendar */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          validRange={{ start: "2025-09-01", end: "2026-09-31" }}
          events={events}
          eventContent={(arg) => {
            const fullTitle = arg.event.title;
            return {
              html: `
                <div class="custom-event">
                  ${fullTitle}
                </div>
              `,
            };
          }}
        />

        <div className="events-section-title">
          <br />
          <br />
          <h2>Upcoming Events</h2>
          <hr />
        </div>
        <div className="events-section row">{upcomingComponent}</div>

        <div className="events-section-title">
          <h2>Previous Events</h2>
          <hr />
        </div>
        <div className="events-section row">{previousComponent}</div>
      </div>
    );
  }
}

export default Events;
