// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements by data-testid attributes
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Update the current day of the week dynamically
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeek.textContent = dayOfWeek;

    // Update the current UTC time dynamically
    currentUTCTime.textContent = Date.now() + ' milliseconds';
});
