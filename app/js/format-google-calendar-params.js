formatGoogleCalendar.init({
    calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/shpenj@gmail.com/events?key=AIzaSyB-LTW9jsg9mCbvdClw0kAdgrTlWT1tcS0',
    past: true,
    upcoming: true,
    pastTopN: 20,
    upcomingTopN: 3,
    itemsTagName: 'div',
    upcomingSelector: '#events-upcoming',
    pastSelector: '#events-past',
    upcomingHeading: '',
    pastHeading: '',
    format: ['*summary*','<div class="card-body">', '*date*', '*description*', '*location*']
  })