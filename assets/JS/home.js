console.log('Home script loaded');

$('#AboutBtn').on('click', (event)=>{
    event.preventDefault();
    console.log('About button clicked!...');
    $('#about').css('visibility', 'visible');
});

$('#createNewTask').on('click', (event)=>{
    event.preventDefault();
    console.log('create task btn clicked!...');
    $('#createClass').css('visibility', 'visible');
});

$('#createTask').on('click', (event)=>{
    event.preventDefault();
    console.log('create task btn clicked!...');
    $('#createClass').css('visibility', 'visible');
});

$('#CreateTaskCancelBtn').on('click', (event)=>{
    event.preventDefault();
    console.log('cancel new task btn clicked!...');
    $('#createClass').css('visibility', 'hidden');
});

$('#AboutExit').on('click', (event)=>{
    event.preventDefault();
    console.log('About Cancel button clicked!...');
    $('#about').css('visibility', 'hidden');
});

$('#homeBtn').on('click', (event)=>{
    alert(` 😁😁😉 This is the home page. Let's Check other functionality. Thank you for using our product. `);
    alert(`We didn't implemented full features still, but basic functionalities will work due to lack of time I am submitting this project here now. Thank you for reviewed it.`);
});

$('#star').on('click', (event)=>{
    console.log('Star button is clicked!...');
});

$('#CreateTaskCreateBtn').css('backgroundColor', '#02AA02');