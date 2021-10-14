const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build a Javascript project.",
  "Build a React project.",
  "Build another web3 project.",
  "Learn the best frontend patterns."
];
learning.category = "Frontend Development";
learning.topicImportance = "High";
console.log(learning);

learning.topic = "Javascript";
learning.learningGoals.splice(2, 1);
console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
