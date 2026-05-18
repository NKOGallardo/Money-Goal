const current = document.getElementById('Current');
const goal = document.getElementById('Goal');
const progress = document.getElementById('Progress');
const finish = document.getElementById('Finish');
const addAmount = document.getElementById('AddAmount');
const savedMoney = document.getElementById('SavedMoney');
const goalAmount = document.getElementById('GoalAmount');
const updateBtn = document.getElementById('updateBtn');
const activityHistory = document.getElementById('ActivityHistory');

function ShowCurrent() {
    const DisplayCurrent = savedMoney.value.trim();

    if( DisplayCurrent === "" ) {

        current.textContent = "Please enter a saved amount.";
        return;

    } else if ( DisplayCurrent < 0 ) {

        current.textContent = "Please enter a valid saved amount.";
        return;
        
    } else {

        current.textContent = `Current Savings: R${DisplayCurrent}`;

    }           

}

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

function ShowProgress() {
    const DisplayProgress = progress.value.trim();

    addAmount
}

updateBtn.addEventListener('click', () => {
    ShowGoal();
    ShowCurrent();
    ShowProgress();
});

var i = 0;
function move() {

    Goal = parseFloat(goalAmount.value);
    Saved = parseFloat(savedMoney.value);

    Remaining = Goal - Saved;
    
}