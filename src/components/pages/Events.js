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
  { title: "Roots & Routes", start: "2025-10-02" },
  { title: "Project Applications Open", start: "2025-10-06", end: "2025-10-11" },
  { title: "Tapex Fundraiser", start: "2025-10-14" },
  { title: "Fall GBM #1", start: "2025-10-07" },
  { title: "Sunset Potluck Social", start: "2025-10-11" },
  { title: "Cog Sci Specialization Deep Dive #1", start: "2025-10-14" },
  { title: "Cog Sci Specialization Deep Dive #2", start: "2025-10-15" },
  { title: "Lab Open House", start: "2026-01-28" },
  { title: "Final Cram Jam", start: "2025-12-03" },
  { title: "Midterm Mind-Mash", start: "2025-10-29" },
  { title: "Intro to R and Linear Regressions", start: "2025-11-06" },
  { title: "Intro to R and Neural Networks", start: "2025-11-13" },
  { title: "Pizookies and PJ's Social", start: "2025-12-02" },
  { title: "Mentor-Mentee Program Applications Due", start: "2025-10-18" },
  { title: "Haunted Trails Social", start: "2025-10-25" },

  // --- FALL 2025 ---
  { title: "Fall Quarter Begins", start: "2025-09-22" },
  { title: "Instruction Begins", start: "2025-09-25" },
  { title: "Veterans Day Holiday", start: "2025-11-11" },
  { title: "Thanksgiving Holiday", start: "2025-11-27", end: "2025-11-29" },
  { title: "Instruction Ends", start: "2025-12-05" },
  { title: "Final Exams", start: "2025-12-06", end: "2025-12-14" },
  { title: "Fall Quarter Ends", start: "2025-12-13" },
  { title: "Winter Break", start: "2025-12-13", end: "2026-01-05" },
  { title: "New Year Holiday", start: "2025-01-01" },

  // --- WINTER 2026 ---
  { title: "Instruction Begins", start: "2026-01-05" },
  { title: "Martin Luther King, Jr. Holiday", start: "2026-01-19" },
  { title: "Presidents' Day Holiday", start: "2026-02-16" },
  { title: "Final Exams", start: "2026-03-14", end: "2026-03-22" },
  { title: "Winter Quarter Ends", start: "2026-03-21" },
    { title: "Fall Quarter Projects Showcase", start: "2026-01-09" },
  { title: "Yogurt World Fundraiser", start: "2026-01-09" },
  { title: "Ice Skating Social", start: "2026-01-16" },
  { title: "Winter Quarter GBM #2", start: "2026-01-20" },

  // --- SPRING 2026 ---
  { title: "César Chávez Holiday", start: "2026-03-27" },
  { title: "Instruction Begins", start: "2026-03-30" },
  { title: "Memorial Day", start: "2026-05-25" },
  { title: "Instruction Ends", start: "2026-06-05" },
  { title: "Final Exams", start: "2026-06-06", end: "2026-06-13" },
  { title: "Spring Quarter Ends", start: "2026-06-12" },
  { title: "Commencement Weekend", start: "2026-06-13", end: "2026-06-15" },

  // --- SUMMER 2026 ---
  { title: "Juneteenth Holiday", start: "2026-06-19" },

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
          validRange={{ start: "2025-09-01", end: "2026-06-31" }}
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
