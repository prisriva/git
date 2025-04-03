const colors = ["#232323", "#2c2c2c", "#3a3a3a"]; // Dark car-magazine style colors
console.log("The first color in the array is:", colors[0]);

const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for Dark Grey, 1 for Charcoal, 2 for Midnight Black");

const userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
};

// Apply user-selected background color
document.body.style.backgroundColor = userInfo.selectedColor;
