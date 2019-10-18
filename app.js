$(document).ready(function() {

    // variables 
        // today's date 
    var date = moment().format('MMMM Do YYYY, h:mm a')
    var hour = moment().hour();
    var dateDiv = $('#date');
    var scheduleTable = $('#schedule-table');
    var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var displayHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};
    console.log(hours);
    
    
    
    
    // helper functions
    function createTable() {
    for (var i = 0; i < hours.length; i++) {
    var block = $('<div class="row"><div class="col-md-2 time-style">' + displayHours[i] + ':00' + '</div><textarea class="col-md-8 text-area-style" id="hour-'  + hours[i] + '"></textarea><span class="span-style col-md-2 js-save" data-key="hour-' + hours[i] + '"><button class="btn btn-light">Save</button></span></div>');
    
    var currentHour = hours[i];
    if (currentHour < hour) {
        console.log(currentHour);
    block.attr('style', 'background: #FE8A88;font-style: italic;')
    }
    else if (currentHour === hour) {
    block.attr('style', 'background: #92D8FB; font-weight: bold;')
    }
    else {
    block.attr('style', 'background: #AFFE88;')
    }
    block.appendTo(scheduleTable);
    }
    };
    
    function createDate() {
        $('<div>' + date + ' ' + '</div>').appendTo(dateDiv);
    }
    
    
    
    createTable();
    createDate();
    
       
        
       
    
    // events 
    
    $('.js-save').on('click', function() {
        console.log('hi');
    
        // get the key and the value 
        var key = $(this).data('key');
        console.log(key);
        var value = $(`#${key}`).val();
        console.log(value);
    
    
        // save to local storage 
        dailyTasks[key] = value;
        console.log(dailyTasks);
        localStorage.setItem('myDay', JSON.stringify(dailyTasks));
    })
    
        // click save event 
            // add to local storage 
    
    
    
    // init 
    
        // create table and rows using for loop 
        // load saved events from local storage 
        $('#hour-9').val(dailyTasks['hour-9']);
        $('#hour-10').val(dailyTasks['hour-10']);
        $('#hour-11').val(dailyTasks['hour-11']);
        $('#hour-12').val(dailyTasks['hour-12']);
        $('#hour-13').val(dailyTasks['hour-13']);
        $('#hour-14').val(dailyTasks['hour-14']);
        $('#hour-15').val(dailyTasks['hour-15']);
        $('#hour-16').val(dailyTasks['hour-16']);
        $('#hour-17').val(dailyTasks['hour-17']);
        // color boxes based on current time - past, current, future
    });