const background = document.querySelector('.background');
const container = document.querySelector('.container');

function displayDateTime() {
    // Get the current date and time
    const currentDate = new Date();
  
    const dayOfWeek = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
  
    const formattedDayOfWeek = `${dayOfWeek}`;
  
    const dayOfWeekDiv = document.getElementById('dayOfWeek');
  
    dayOfWeekDiv.textContent = formattedDayOfWeek;
  
    const currentTimeInMilliseconds = Date.now();
  
    const currentTimeDiv = document.getElementById('currentTimeInMilliseconds');
  
    currentTimeDiv.textContent = `Current UTC Time: ${currentTimeInMilliseconds}`;
  }
  
  // Update the displayed date and time every second
  setInterval(displayDateTime, 1000);
  
  displayDateTime();



