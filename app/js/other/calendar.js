// test
async function listEvents(){
    let event_pg = document.getElementById('event_pg');
    let api_key = "AIzaSyB-LTW9jsg9mCbvdClw0kAdgrTlWT1tcS0";
    let other = "83tln3112kb3t77cu43v4bg2og@group.calendar.google.com";
    let get_list = "https://www.googleapis.com/calendar/v3/calendars/"+other+"/events?key="+api_key;

    let response = await fetch(get_list);
    let data = response.json();
    data.then(function(value){
        if(response.status !== 200){
            console.log("error. status code: "+response.status);
            return;
        }

        renderList(value.items);
    })
};

function renderList(events) {
  let title, start_date, end_date, description;
  for(e of events) {
    description = e.description || '';
    title = e.summary || '';
    // location = e.location || '';
    start_date = e.start.dateTime;
    end_date = e.end.dateTime;
  }
  // console.log(events);
};

listEvents();

function createEventCard(title, date, start, end, description){
 let output = '<div class="card mb-3 card-event">'+ '<div class="row no-gutters">'+ '<div class="col-md-4">'+
              '<img class="img-fluid" src="images/pillars/professional_dev.png" alt="Prof Event">'+'</div>'+
              '<div class="col-md-8">'+'<div class="card-body">'+'<h4 class="card-title">'+title+'</h4>'+
              '<div class="col-md-12"><i class="far fa-calendar-alt"></i>'+ date +'</div>'+
              '<div class="col-md-12"><i class="fas fa-clock"></i> '+start+' - '+ end+'</div>'+
              '<div class="col-md-12"><i class="fas fa-map-marker-alt"></i> '+location+'</div>'+
              '<p class="card-text">'+description+'</p>'
              '<a href="#" class="btn btn-primary">Go Somewhere</a></div></div></div></div>';
return output;
}