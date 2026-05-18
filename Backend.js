const currentText = document.getElementById('Current');
const goalText = document.getElementById('Goal');
const progressText = document.getElementById('Progress');
const finish = document.getElementById('Finish');
const addAmount = document.getElementById('AddAmount');
const savedMoney = document.getElementById('SavedMoney');
const goalAmount = document.getElementById('GoalAmount');
const updateBtn = document.getElementById('updateBtn');
const activityHistory = document.getElementById('ActivityHistory');

function ShowCurrent() {
    const DisplayCurrent = savedMoney.value.trim();

    if( DisplayCurrent === "" ) {

        currentText.textContent = "Please enter a saved amount.";
        return;

    } else if ( DisplayCurrent < 0 ) {

        currentText.textContent = "Please enter a valid saved amount.";
        return;
        
    } else {

        currentText.textContent = `Current Savings: R${DisplayCurrent}`;

    }           

}

function ShowGoal() {
    const DisplayGoal = goalAmount.value.trim();

    if( DisplayGoal === "" ) {

        goalText.textContent = "Please enter a goal amount.";
        return;

    } else if ( DisplayGoal <= 0 ) {

        goalText.textContent = "Please enter a valid goal amount.";
        return;

    } else {

        goalText.textContent = `Your Goal: R${DisplayGoal}`;

    }
}

function ShowProgress() {
    const DisplayCurrent = parseFloat(savedMoney.value);
    const DisplayGoal = parseFloat(goalAmount.value);

    if (isNaN(DisplayCurrent) || isNaN(DisplayGoal)) {

        progressText.textContent = "Please enter both amounts.";
        return;

    }

    if (DisplayCurrent < 0 || DisplayGoal <= 0) {

        progressText.textContent = "Please enter valid amounts.";
        return;

    }

    const percentage = (DisplayCurrent / DisplayGoal) * 100;

    progressText.textContent = `Progress: ${Math.round(percentage)}%`;

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