let questionSets = [
  {
    title: "Áp lực điểm số do gia đình",
    questions: [
      "Bạn có cảm thấy luôn phải cố gắng hết sức để làm hài lòng gia đình?",
      "Bạn có cảm thấy như mình không bao giờ đạt được kỳ vọng của gia đình?",
      "Bạn có cảm thấy bị cô lập hoặc thiếu sự hỗ trợ từ gia đình?",
      "Bạn có thường xuyên suy nghĩ về việc khiến gia đình thất vọng?",
      "Bạn có thường xuyên so sánh bản thân với những người khác, đặc biệt là anh chị em hoặc bạn bè?",
      "Bạn có hay tranh cãi với gia đình về việc học tập hoặc các vấn đề khác?",
      "Bạn có cảm thấy xa cách hoặc thiếu sự kết nối với gia đình?",
      "Bạn có hay cảm thấy như mình không được gia đình thấu hiểu hoặc hỗ trợ?",
      "Bạn có hay che giấu cảm xúc hoặc suy nghĩ của mình khỏi gia đình?",
      "Bạn có hay cảm thấy như mình phải luôn cố gắng tỏ ra mạnh mẽ và hoàn hảo trước mặt gia đình?",
    ],
    answers: [],
  },
  {
    title: "Áp lực điểm số do kỳ vọng bản thân",
    questions: [
      "Bạn có cảm thấy sợ hãi khi mắc sai lầm trong bài thi?",
      "Bạn có cảm thấy luôn phải cố gắng hết sức để đạt điểm cao nhất?",
      "Bạn có cảm thấy thất vọng, buồn bã, hoặc tức giận khi không đạt được điểm cao như mong muốn?",
      "Bạn có hay so sánh điểm số của mình với điểm số của bạn bè hoặc các bạn học khác?",
      "Bạn có hay suy nghĩ tiêu cực về bản thân và khả năng học tập của mình?",
      "Bạn có hay tự trách móc bản thân khi mắc sai lầm trong bài thi?",
      "Bạn có hay nghĩ rằng mình không đủ giỏi để đạt điểm cao?",
      "Bạn có hay học tập quá sức và bỏ bê các hoạt động khác?",
      "Bạn có hay có những vấn đề về giấc ngủ, như khó ngủ hoặc ngủ quá nhiều trước hoặc sau khi thi?",
      "Bạn có hay có những thay đổi về tâm trạng, như dễ cáu kỉnh, buồn bã, hoặc lo lắng trước hoặc sau khi thi?",
    ],
    answers: [],
  },
  {
    title: "Áp lực điểm số do tương quan với tương lai",
    questions: [
      "Bạn có cảm thấy xã hội đặt nhiều kỳ vọng vào điểm số của bạn?",
      "Bạn có cảm thấy xã hội liên kết điểm số cao với thành công trong tương lai?",
      "Bạn có cảm thấy gánh nặng điểm số để làm hài lòng xã hội?",
      "Bạn có bi quan về việc tìm kiếm việc làm sau khi tốt nghiệp?",
      "Bạn có tin rằng điểm số cao sẽ giúp bạn có cơ hội tốt hơn trong việc tìm kiếm việc làm?",
      "Bạn có cảm thấy áp lực cạnh tranh điểm với những người khác để có được công việc tốt?",
      "Bạn có thường xuyên lo lắng về tương lai của mình?",
      "Nếu bạn có thể biết trước tương lai của mình, bạn có muốn biết không?",
      "Bạn không tin những người thành công mà không có điểm số cao?",
      "Bạn có nghĩ rằng điểm số là yếu tố quan trọng nhất quyết định thành công trong cuộc sống?",
    ],
    answers: [],
  },
  {
    title: "Áp lực điểm số do các nguyên nhân khách quan",
    questions: [
      "Bạn có cảm thấy thường xuyên phải học tập và ôn thi liên tục?",
      "Bạn có cảm thấy chương trình học tập trung quá nhiều vào việc đạt điểm cao mà không chú trọng đến việc phát triển kỹ năng và kiến thức thực tế?",
      "Bạn có cảm thấy giáo viên thường xuyên đặt áp lực lên bạn để đạt điểm cao?",
      "Bạn có cảm thấy giáo viên có những phản hồi tiêu cực khi bạn không đạt được điểm cao như mong đợi?",
      "Bạn có cảm thấy lo lắng về việc xếp hạng trong lớp hoặc trong kỳ thi?",
      "Bạn có cảm thấy áp lực phải luôn đạt điểm cao để được khen ngợi và ghi nhận?",
      "Bạn có cảm thấy các bài kiểm tra và bài thi thường xuyên được tổ chức quá nhiều?",
      "Bạn có cảm thấy các bài kiểm tra và bài thi quá khó hoặc không công bằng?",
      "Bạn có cảm thấy bạn nhận được đủ sự hỗ trợ từ giáo viên trong quá trình học tập?",
      "Bạn có cảm thấy nhà trường tạo ra môi trường học tập thoải mái và giảm bớt áp lực cho học sinh?",
    ],
    answers: [],
  },
];
const points = [0, 0, 0, 0];
const titleText = document.querySelector(".title");
const frame = document.querySelector(".main-frame");

let setIndex = 0;
function updateContent() {
  frame.innerHTML = "";

  const currentSet = questionSets[setIndex];

  titleText.textContent = currentSet.title;
  currentSet.questions.forEach((question, questionIndex) => {
    const generatedQs = createQuestion(question);
    frame.appendChild(generatedQs);

    const yesButton = generatedQs.querySelector(".yes-button");
    const noButton = generatedQs.querySelector(".no-button");

    yesButton.addEventListener("click", () => {
      handleAnswerClick(questionIndex, "yes");
    });
    noButton.addEventListener("click", () => {
      handleAnswerClick(questionIndex, "no");
    });

    if (questionSets[setIndex].answers[questionIndex] === "yes") {
      yesButton.classList.add("selected");
    } else if (questionSets[setIndex].answers[questionIndex] === "no") {
      noButton.classList.add("selected");
    }
  });

  const nextPageButton = document.createElement("div");
  nextPageButton.innerHTML = `
      <button class="next-button">
        <span class="next-button-content">mục tiếp theo</span>
      </button>`;
  frame.appendChild(nextPageButton);
  nextPageButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleNextPageClick();
  });

  if (getAnsweredNum(questionSets) === 30) {
    const endSurveybutton = document.createElement("div");
    endSurveybutton.innerHTML = `
      <button class="end-button">
        <span class="next-button-content">hoàn thành bài đánh giá</span>
      </button>`;
    frame.appendChild(endSurveybutton);
    endSurveybutton.addEventListener("click", (event) => {
      event.preventDefault();
      redirectToEndingPage();
    });
  }
  console.log("Điểm:", points[0], points[1], points[2], points[3]);
}

function createQuestion(questionText) {
  const questionFrame = document.createElement("div");
  questionFrame.className = "question-frame";
  questionFrame.innerHTML = `
      <div class="question-frame">
      <div class="question-bubble">
        <span class="question-content"> ${questionText} </span>
      </div>
      <div class="answer-frame">
        <button class="yes-button">
          <span class="yes-button-content">có</span>
        </button>
        <button class="no-button">
          <span class="no-button-content">không</span>
        </button>
      </div>
    </div>
      `;
  const questionContentSpan = questionFrame.querySelector(".question-content");
  questionContentSpan.classList.add("unselectable");
  return questionFrame;
}
function handleNextPageClick() {
  setIndex = (setIndex + 1) % questionSets.length;
  window.scrollTo(0, 0);
  updateContent();
}
function handleAnswerClick(questionIndex, answer) {
  const yesButton = document.querySelectorAll(".yes-button")[questionIndex];
  const noButton = document.querySelectorAll(".no-button")[questionIndex];

  if (answer === "yes") {
    if (noButton.classList.contains("selected")) {
      noButton.classList.remove("selected");
    }
    if (!yesButton.classList.contains("selected")) {
      yesButton.classList.add("selected");
      points[setIndex] += 10;
    }
  } else if (answer === "no") {
    if (yesButton.classList.contains("selected")) {
      points[setIndex] -= 10;
      yesButton.classList.remove("selected");
    }
    if (!noButton.classList.contains("selected")) {
      noButton.classList.add("selected");
    }
  }

  questionSets[setIndex].answers[questionIndex] = answer;
}
function redirectToEndingPage() {
  const pointsString = points.join('-');
  window.location.href = `trangketthuc.html?points=${pointsString}`;
}
function getAnsweredNum(questionSets) {
  let count = 0;
  questionSets.forEach((set) => {
    count += set.answers.length;
  });
  console.log("Answered:", count);
  return count;
}

updateContent();
