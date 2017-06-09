function event(name, date, time_start, time_end) {
  this.name = name;
  this.date = date;
  this.time_start = time_start;
  this.time_end = time_end;
}

function time(hour, minute) {
  this.hour = hour;
  this.minute = minute;
}

var array = [];
var conflicts = [];

array.push(new event("Interview at The Portal", "Feb 23, 2017", new time(15, 0), new time(16, 30)));
array.push(new event("Lunch with Cindy", "Feb 25, 2017", new time(12, 0), new time(13, 0)));
array.push(new event("Dinner with John", "Feb 24, 2017", new time(17, 0), new time(17, 30)));
array.push(new event("Conference", "Feb 24, 2017", new time(11, 0), new time(17, 30)));
array.push(new event("Dinner with Albert", "Feb 27, 2017", new time(17, 0), new time(17, 30)));
array.push(new event("Vet Appointment", "Feb 24, 2017", new time(10, 0), new time(11, 30)));
array.push(new event("Class", "Feb 27, 2017", new time(17, 0), new time(17, 30)));
array.push(new event("Watch TV", "Feb 25, 2017", new time(14, 0), new time(15, 30)));

var minutes = function(t) {
    var result = 0;
    result += t.hour * 60;
    result += t.minute;
    return result;
};

for(var i = 0; i < array.length; i++) {
  for(var x = i+1; x < array.length; x++) {
      console.log("hi");
      if(array[i].date == array[x].date){
        if(minutes(array[x].time_start.hour) >= minutes(array[i].time_start.hour) || minutes(array[x].time_start.hour) <= minutes(array[i].time_end.hour) || minutes(array[x].time_end.hour) >= minutes(array[i].time_start.hour) || minutes(array[x].time_end.hour) <= minutes(array[i].time_end.hour))
        {
            var ini = false;
            var inx = false;
            for(var y = 0; y < conflicts.length; y++)
            {
                if(array[i].name == conflicts[y])
                {
                    ini = true;
                }
                if(array[x].name == conflicts[y]){
                  inx = true;
                }
            }
            if(ini == false)
            {
              conflicts.push(array[i].name);
            }
            if(inx == false)
            {
              conflicts.push(array[x].name);
            }
        }
      }
  }
}

for(var i = 0; i < conflicts.length; i++) {
    console.log(conflicts[i]);
}
