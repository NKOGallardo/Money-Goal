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
