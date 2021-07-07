import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Card from "../ui/card";
import events from "./events";
import DndResource from "./dndresource";

// moment.locale("en-GB");
const localizer = momentLocalizer(moment);
// const allViews = Object.keys(ReactBigCalendar.Views).map(
//   (k) => ReactBigCalendar.Views[k]
// );

function ReactBigCalendar() {
  function onDoubleClickEvent(e) {
    alert("double click is delete");
    console.log("double click ", e);
  }
  return (
    <>
      <Card>
        <DndResource />
      </Card>

      <Card>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          step={60}
          //views={allViews}
          defaultDate={new Date()}
          onDoubleClickEvent={onDoubleClickEvent}
        />
      </Card>
    </>
  );
}

export default ReactBigCalendar;
