const calorieBurnRates = {
    running: 10,      // Calories burned per minute
    cycling: 8,       // Calories burned per minute
    swimming: 7,      // Calories burned per minute
    weightlifting: 6, // Calories burned per minute
    yoga: 3           // Calories burned per minute
};

document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const exerciseType = document.getElementById('exercise-type').value;
    const duration = document.getElementById('duration').value;

    if (exerciseType && duration) {
        const calories = calorieBurnRates[exerciseType] * duration;

        const workoutList = document.getElementById('workout-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${exerciseType.charAt(0).toUpperCase() + exerciseType.slice(1)} - ${duration} min, ${calories} calories burned`;
        workoutList.appendChild(listItem);

        // Clear the form fields
        this.reset();
    }
});

document.getElementById('set-goal-button').addEventListener('click', function() {
    const goalDescription = document.getElementById('goal-description').value;
    const goalValue = document.getElementById('goal-value').value;

    const goalStatus = document.getElementById('goal-status');
    goalStatus.textContent = `Current Goal: ${goalDescription} - ${goalValue}`;
    
    // Clear the goal fields
    document.getElementById('goal-description').value = '';
    document.getElementById('goal-value').value = '';
});
