const scoreList = document.getElementById("score-list");
const evaluateBtn = document.getElementById("evaluate-btn");

evaluateBtn.addEventListener("click", () => {
  // 1. Parent-to-Child access: get all <li> child elements inside <ul>
  const students = scoreList.children;

  // 2. For loop: iterate through every child <li> element
  for (let i = 0; i < students.length; i++) {
    const studentItem = students[i];
    const score = Number(studentItem.getAttribute("data-score"));

    // 3. If statement: check if score meets the 70% passing threshold
    if (score >= 70) {
      studentItem.classList.add("passed");
      studentItem.classList.remove("failed");
    } else {
      studentItem.classList.add("failed");
      studentItem.classList.remove("passed");
    }
  }

  // 4. Child-to-Parent access: style the parent container (<ul id="score-list">)
  // or its parent (<body>) once evaluation finishes
  const parentContainer = students[0].parentElement;
  parentContainer.parentElement.classList.add("all-evaluated");
});