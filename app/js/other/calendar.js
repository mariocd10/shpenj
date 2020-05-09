// test
async function listEvents(){
    let event_pg = document.getElementById('event_pg');
    let title = '';
    let start_date = '';
    let end_date;
    let start_time = '';
    let end_time = '';
    let event_loc = '';
    let event_reg_link = '';
    let description = '';
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

        for(e of value.items) {
            description = e.description;
            title = e.summary;
            // location = e.location;
            start_date = e.start.dateTime;
            end_date = e.end.dateTime;
            console.log('title: '+end_date);
        }
        console.log(value.items);
    })
}
listEvents();
/*
<div class="card mb-3 card-event">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img class="img-fluid" src="images/pillars/professional_dev.png" alt="Prof Event">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">Cafe Con Leche Series</h4>
            <div class="col-md-12"><i class="far fa-calendar-alt"></i> 5/1/2020</div>
            <div class="col-md-12"><i class="fas fa-clock"></i> 7:00PM - 8:00PM</div>
            <div class="col-md-12"><i class="fas fa-map-marker-alt"></i> Zoom Call</div>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    */