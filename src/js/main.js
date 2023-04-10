function printTime() {
    var d = new Date();
    var hourse = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    switch (day) {
        case 0:
            day = 'sunday'
            break;
        case 1:
            day = 'monday'
            break;
        case 2:
            day = 'tuesday'
            break;
        case 3:
            day = 'wednesday'
            break;
        case 4:
            day = 'thursday'
            break;
        case 5:
            day = 'friday'
            break;
        case 6:
            day = 'tuesday'
            break;
    }

    if(hourse < 10) {
        hourse = '0' + hourse
    }
    if(mins < 10) {
        mins = '0' + mins
    }
    if(secs < 10 ) {
        secs = '0' + secs
    }

    month = month + 1; document.getElementById('test').innerHTML = hourse+':'+mins+':'+secs
    document.getElementById('ttt').innerHTML = day + ', ' + date + '/' + month + '/' + year    
} 

setInterval(printTime, 1000);