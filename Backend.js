const current = document.getElementById('Current');
const goal = document.getElementById('Goal');
const progress = document.getElementById('Progress');
const finish = document.getElementById('Finish');
const addAmount = document.getElementById('AddAmount');
const savedMoney = document.getElementById('SavedMoney');
const goalAmount = document.getElementById('GoalAmount');
const updateBtn = document.getElementById('updateBtn');
const activityHistory = document.getElementById('ActivityHistory');

function ShowGoal() {
    const DisplayGoal = goalAmount.value.trim();

    if( DisplayGoal === "" ) {

        goal.textContent = "Please enter a goal amount.";
        return;
    } else if ( DisplayGoal <= 0 ) {

        goal.textContent = "Please enter a valid goal amount.";
        return;

    } else {
        goal.textContent = `Your Goal: R${DisplayGoal}`;
    }
}

updateBtn.addEventListener('click', () => {
    ShowGoal();
});

var i = 0;
function move() {

    Goal = parseFloat(goalAmount.value);
    Saved = parseFloat(savedMoney.value);

    Remaining = Goal - Saved;

    const myBar = document.getElementById("myBar");
    const progressBar = document.getElementById("progressBar");
    const message = document.getElementById("message");

    // Simulate progress
    const interval = setInterval(() => {
        if (Remaining >= 100) {
            clearInterval(interval);
            // Show message after completion
            message.style.display = "block";
        } else {
            Remaining++;
            myBar.style.width = Remaining + "%";
            myBar.textContent = Remaining + "%";
        }
    }, 50); // speed of progress
}