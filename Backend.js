const Current = document.getElementById('Current');
const Goal = document.getElementById('Goal');
const Progress = document.getElementById('Progress');
const Finish = document.getElementById('Finish');

const AddAmount = document.getElementById('AddAmount');
const AddSaving = document.getElementById('AddSaving');
const GoalAmount = document.getElementById('GoalAmount');

const updateBtn = document.getElementById('updateBtn');

// Default values
let currentMoney = 0;
let goalMoney = 10000;
let monthlySaving = 1000;

// Update UI
function updateDashboard() {

    // Get values from inputs
    currentMoney += Number(AddAmount.value);
    monthlySaving = Number(AddSaving.value);
    goalMoney = Number(GoalAmount.value);

    // Calculate progress
    let progressPercent = (currentMoney / goalMoney) * 100;

    // Prevent over 100%
    if (progressPercent > 100) {
        progressPercent = 100;
    }

    // Remaining amount
    let remaining = goalMoney - currentMoney;

    // Months left
    let monthsLeft = Math.ceil(remaining / monthlySaving);

    // Finish date
    const today = new Date();

    today.setMonth(today.getMonth() + monthsLeft);

    const finishDate = today.toDateString();

    // Display data
    Current.textContent = `R${currentMoney}`;
    Goal.textContent = `R${goalMoney}`;
    Progress.textContent = `${progressPercent.toFixed(1)}%`;
    Finish.textContent = finishDate;

    // Save data
    localStorage.setItem('currentMoney', currentMoney);
    localStorage.setItem('goalMoney', goalMoney);
    localStorage.setItem('monthlySaving', monthlySaving);

    // Clear input
    AddAmount.value = '';
}

// Load saved data
function loadData() {

    const savedCurrent = localStorage.getItem('currentMoney');
    const savedGoal = localStorage.getItem('goalMoney');
    const savedSaving = localStorage.getItem('monthlySaving');

    if (savedCurrent) {
        currentMoney = Number(savedCurrent);
    }

    if (savedGoal) {
        goalMoney = Number(savedGoal);
    }

    if (savedSaving) {
        monthlySaving = Number(savedSaving);
    }

    Current.textContent = `R${currentMoney}`;
    Goal.textContent = `R${goalMoney}`;
}

// Button click
updateBtn.addEventListener('click', updateDashboard);

// Load data on page start
loadData();


///  <button id="updateBtn">Update</button>
///  