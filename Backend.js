const currentText = document.getElementById('Current');
const goalText = document.getElementById('Goal');
const remainingText = document.getElementById('Remaining');
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

    } else if (DisplayCurrent < 0 || DisplayGoal <= 0) {

        progressText.textContent = "Please enter valid amounts.";
        return;

    } else if (DisplayCurrent > DisplayGoal) {

        progressText.textContent = "Congratulations! You've exceeded your goal!";
        return;
    
    } else if (DisplayCurrent === DisplayGoal) {

        progressText.textContent = "Congratulations! You've reached your goal!";
        return;
    
    } else if (DisplayCurrent === 0) {

        progressText.textContent = "Progress: 0%";
        return;
      
    } else if (DisplayGoal === 0) {

        progressText.textContent = "Goal amount cannot be zero.";
        return;    
    
    } else if (isNaN(DisplayCurrent)) {

        progressText.textContent = "Please enter saved amount.";
        return;

    } else if (isNaN(DisplayGoal)) {

        progressText.textContent = "Please enter goal amount.";
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

function Reset() {

    window.alert("Are you sure you want to reset your progress? This action cannot be undone.");
    window.alert("All data will be lost.");

    savedMoney.value = "";
    goalAmount.value = "";
    currentText.textContent = "Current Savings: R0";
    goalText.textContent = "Your Goal: R0";
    progressText.textContent = "Progress: 0%";
}

function addtosavings() {
    const amountToAdd = parseFloat(addAmount.value);
    const currentAmount = parseFloat(savedMoney.value);

    if (isNaN(amountToAdd) || amountToAdd <= 0) {
        window.alert("Please enter a valid amount to add.");
        return;
    } else if (amountToAdd > 0) {
        const newAmount = currentAmount + amountToAdd;
        savedMoney.value = newAmount.toFixed(2);
        ShowCurrent();
        ShowProgress();
    }

}