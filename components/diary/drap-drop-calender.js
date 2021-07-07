import React, { useState } from "react";
import myEventsList from "./event";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

function DrapDropCalendars() {
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);
  const [events, setEvents] = useState(myEventsList);
  const [draggedEvent, setDraggedEvent] = useState(null);

  const localizer = momentLocalizer(moment);

  function moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end, allDay }
        : existingEvent;
    });
    setEvents(nextEvents);
    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  function resizeEvent({ event, start, end }) {
    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });
    setEvents(nextEvents);
    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  function newEvent(_event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }

  function dragFromOutsideItem() {
    return draggedEvent;
  }

  function handleDragStart(event) {
    setDraggedEvent(event);
  }

  function onDropFromOutside({ start, end, allDay }) {
    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    };

    setDraggedEvent(null);
    moveEvent({ event, start, end });
  }

  return (
    <DragAndDropCalendar
      selectable
      localizer={localizer}
      events={events}
      onEventDrop={moveEvent}
      //   resizable
      onEventResize={resizeEvent}
      onSelectSlot={newEvent}
      onDragStart={(x) => console.log(x)}
      //   defaultView={Views.MONTH}
      //   defaultDate={new Date()}
      popup={true}
      dragFromOutsideItem={displayDragItemInCell ? dragFromOutsideItem : null}
      onDropFromOutside={onDropFromOutside}
      handleDragStart={handleDragStart}
    />
  );
}

export default DrapDropCalendars;
