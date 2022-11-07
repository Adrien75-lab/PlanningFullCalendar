let evenements = [{
    "title": "Planning Adrien",
    "start": "2022-11-21",
    "end": "2022-11-26"
}, {
    "title": "Planning Adrien",
    "start": "2022-12-05",
    "end": "2022-12-10"
}, {
    "title": "Planning Adrien",
    "start": "2023-01-02",
    "end": "2023-01-07"
}, {
    "title": "Planning Adrien",
    "start": "2023-01-30",
    "end": "2023-02-04"
}, {
    "title": "Planning Adrien",
    "start": "2023-02-20",
    "end": "2023-02-25"
}, {
    "title": "Planning Adrien",
    "start": "2023-03-13",
    "end": "2023-03-18"
}, {
    "title": "Planning Adrien",
    "start": "2023-04-11",
    "end": "2023-04-15"
}, {
    "title": "Planning Adrien",
    "start": "2023-05-02",
    "end": "2022-05-06"
}, {
    "title": "Planning Adrien",
    "start": "2023-05-30",
    "end": "2023-06-03"
}, {
    "title": "Planning Adrien",
    "start": "2023-06-26",
    "end": "2023-07-01"
}]
window.onload = () => {
    console.log("bonjour")
    var calendarEl = document.getElementById('calendar');
    console.log(calendarEl);
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'timeGrid', 'list'],
        defaultView: 'dayGridMonth',
        locale: 'fr',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,list'
        },
        buttonText: {
            today: 'Aujourd\'hui',
            month: 'Mois',
            week: 'Semaine',
            list: 'Liste'
        },
        events: evenements
    });
    calendar.render();
}