const questionsContainer = document.getElementById("question-container");

const objectsTools = {
  DesignToolsName: [
    "Sketch",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma",
  ],
  DesignToolsSRC: [
    "Assets/Images/Sketch.png",
    "Assets/Images/XD-New.png",
    "Assets/Images/IllustratorNew.png",
    "Assets/Images/Photoshop.png",
    "Assets/Images/Figma.png",
  ],
  DevelopmentToolsName: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
  DevelopmentToolsSRC: [
    "Assets/Images/HTML.png",
    "Assets/Images/CSS.png",
    "Assets/Images/JS.png",
    "Assets/Images/React.png",
    "Assets/Images/Bootstrap.png",
  ],
};

const questionsAnswers = {
  questions: [
    "What timezone are you in?",
    "Do we make a contract?",
    "How much do you charge for a website?",
    "Do you charge by the hour?",
    "Are you working with a team?",
  ],
  answers: [
    "I am in the Eastern Standard Time (EST) timezone.",
    "No, we do not make a contract unless there is a specific agreement or legal arrangement between us that outlines the terms and conditions of such a contract. Verbal or written agreement is necessary to establish a contract legally.",
    "The cost of a website can vary significantly based on factors such as complexity, features, design, and the specific requirements of the project. ",
    "I do not charge by the hour. I prefer to eliminate the stress of counting the hours. Instead, I charge a flat fee per project, regardless of duration.",
    "Yes, I'm working with a team.",
  ],
};

function questionPageCreator() {
  for (let index = 0; index < questionsAnswers.questions.length; index++) {
    questionsContainer.innerHTML += `
            <div class="questions" onclick="questionToggler(${index})">
            <p class="bold"><i class="bi bi-plus"></i>${questionsAnswers.questions[index]}</p>
            <p class="individual-answers"></p>
            <hr>
            </div>`;
  }
}

function questionToggler(index) {
  const Questions = document.querySelectorAll(".questions");
  const dashNplusIcon = document.querySelectorAll(".questions i");
  if (dashNplusIcon[index].className == "bi bi-plus") {
    Questions[index].innerHTML = `
            <p class="bold"><i class="bi bi-dash"></i>${questionsAnswers.questions[index]}</p>
            <p class="answers">${questionsAnswers.answers[index]}</p>
            <hr>
        `;
    dashNplusIcon[index].className = "bi bi-dash";
  } else if (dashNplusIcon[index].className == "bi bi-dash") {
    Questions[index].innerHTML = `
            <p class="bold"><i class="bi bi-plus"></i>${questionsAnswers.questions[index]}</p>
            <p class="answers"></p>
            <hr>
        `;
    dashNplusIcon[index].className = "bi bi-plus";
  }
}

function sliderContent(data) {
  const DesignSlider = document.getElementById("Design");
  const DevelopmentSlider = document.getElementById("Development");
  const contentsSlide = document.querySelector(".slide-contents");
  // console.log(data + ": " + contentsSlide.innerHTML);
  if (data === "Design") {
    DevelopmentSlider.className = " slider ";
    DesignSlider.className += " active ";
    contentsSlide.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      contentsSlide.innerHTML += `
                <div class="dividers">
                    <p>${objectsTools.DesignToolsName[i]}</p>
                    <img src="${objectsTools.DesignToolsSRC[i]}" alt="${objectsTools.DesignToolsName[i]}">
                </div>`;
    }
  }
  if (data === "Development") {
    DesignSlider.className = " slider ";
    DevelopmentSlider.className += " active ";
    contentsSlide.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      contentsSlide.innerHTML += `
                <div class="dividers">
                    <p>${objectsTools.DevelopmentToolsName[i]}</p>
                    <img src="${objectsTools.DevelopmentToolsSRC[i]}" alt="${objectsTools.DevelopmentToolsName[i]}">
                </div>`;
    }
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.querySelector(".up").style.display = "flex";
  } else if (window.screenY < 300) {
    document.querySelector(".up").style.display = "none";
  }
});

if (document.getElementById("section-question")) {
  document
    .getElementById("section-question")
    .addEventListener("load", questionPageCreator());
}

if (document.getElementById("tools-section")) {
  document
    .getElementById("tools-section")
    .addEventListener("load", sliderContent("Design"));
}
