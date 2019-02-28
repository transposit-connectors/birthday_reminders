(params) => {
  var eventName = params.name + "'s Birthday";
  var dateArr = params.date.split("/");
  
  var year = new Date().getFullYear();
  
  var newDateString = (year + "-" + params.date).replace("/", "-");
  var bodyParams = {summary: eventName, recurrence: ["RRULE:FREQ=YEARLY"], start: {date: newDateString}, end: {date: newDateString}};
  
 
  var result = api.run("google_calendar.create_calendar_event", {calendarId: "primary", $body: bodyParams});
  
  return {id: result[0].id};

}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */