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
      { title: "Roots & Routes", start: "2025-10-02" },
      { title: "Project Applications Open", start: "2025-10-06", end: "2025-10-11" },
      { title: "Tapex Fundraiser", start: "2025-10-14" },
      { title: "Fall GBM #1", start: "2025-10-07" },
      { title: "Sunset Potluck Social", start: "2025-10-11" },
      { title: "Cog Sci Specialization Deep Dive #1", start: "2025-10-14" },
      { title: "Cog Sci Specialization Deep Dive #2", start: "2025-10-15" },
      { title: "Lab Open House", start: "2025-11-18" },
      { title: "Midterm Mind-Mash", start: "2025-10-29" },
      { title: "Cram Jam", start: "2025-12-02" },
    ];
    
    return (
      <div className="container events">
        {/* Inline styles for the calendar */}
        <style>{`
          /* Make event titles wrap to multiple lines */
          .fc-daygrid-event {
            display: block;
            white-space: normal;
            word-wrap: break-word;
            border: none;
            background-color: transparent;
            font-size: 0.8rem;
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
          }

          .custom-event:hover {
            background-color: #2563eb;
          }

          /* Ensure the day cells expand to fit taller content */
          .fc-daygrid-day-events {
            max-height: none !important;
          }

          .fc .fc-daygrid-day-number {
            font-size: 0.9rem;
          }

          .fc .fc-toolbar-title {
            font-weight: 600;
          }
        `}</style>

        <div className="row">
          <div className="col-sm-8 order-sm-2 pb-5">
            <h1>Events</h1>
            <p>
              We host a variety of events year-round, including professional
              development workshops, academic seminars, and networking
              opportunities. Join us to learn more about the field of cognitive
              science, connect with like-minded individuals, and grow both
              academically and professionally.
            </p>
          </div>
        </div>

        {/* FullCalendar Component */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          validRange={{ start: "2024-10-01", end: "2025-12-31" }}
          events={events}
          eventContent={(arg) => {
            // Show full title (no truncation)
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
