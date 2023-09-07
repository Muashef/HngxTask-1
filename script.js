const background = document.querySelector('.background');
const container = document.querySelector('.container');

function displayDateTime() {
  const currentDate = new Date();

  const dayOfWeek = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const formattedDayOfWeek = `${dayOfWeek}`;

  const dayOfWeekDiv = document.getElementById('dayOfWeek');

  dayOfWeekDiv.textContent = formattedDayOfWeek;

  const options = {
    timeZone: 'UTC',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formattedTime = currentDate.toLocaleTimeString('en-US', options);

  const currentTimeDiv = document.getElementById('currentTimeInMilliseconds');

  currentTimeDiv.textContent = `Current UTC Time: ${formattedTime}`;
}

setInterval(displayDateTime, 1000);

// Initial call to displayDateTime function
displayDateTime();
