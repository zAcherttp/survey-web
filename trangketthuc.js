const pointsString = getUrlParameter("points");
const points = pointsString.split("-").map(Number);
const pageContent = document.querySelector(".main-frame-content");

function updateContent() {
  if (!hasValidPoints(points)) {
    pageContent.innerHTML = `
    <div class="notif-frame">
      <span class="text unselectable">
        Cảm ơn bạn đã dành thời gian quý báu để hoàn thành bài đánh giá
        tâm lý !<br />
        Kết quả cho thấy bạn đang có một tinh thần khá ổn định. Tuy nhiên,
        đừng quên dành thời gian nghỉ ngơi và thư giãn để sức khoẻ tâm lý 
        của bạn luôn tốt nhé !<br />
        Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ thêm, xin đừng ngần ngại
        liên hệ với chúng mình. Chúng mình luôn sẵn lòng lắng nghe và giúp
        đỡ bạn.<br />
        Chúc bạn một ngày tốt lành và tràn đầy năng lượng tích cực!
      </span>
    </div>

    <div>
      <button class="button" id="return">
        <span class="button-content">quay về trang chủ</span>
      </button>
    </div>`;
    document.getElementById("return").addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `index.html`;
    });
  } else {
    pageContent.innerHTML = `
    <div class="notif-frame">
      <span class="text unselectable">
        Cảm ơn bạn đã dành thời gian quý báu để hoàn thành bài đánh giá
        tâm lý !<br />
        Kết quả đánh giá cho thấy sức khỏe tinh thần của bạn cần được quan 
        tâm thêm. Chúng mình đã chuẩn bị một số thông tin và lời khuyên có 
        thể giúp bạn cảm thấy tốt hơn !<br />
        Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ thêm, xin đừng ngần ngại
        liên hệ với chúng mình. Chúng mình luôn sẵn lòng lắng nghe và giúp
        đỡ bạn.<br />
        Chúc bạn một ngày tốt lành và tràn đầy năng lượng tích cực!
      </span>
    </div>

    <div>
      <button class="button" id="next">
        <span class="button-content">xem lời khuyên</span>
      </button>
    </div>`;
    document.getElementById("next").addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `trangloikhuyen.html?points=${pointsString}`;
    });
  }
}
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get(name) || "";
}
function hasValidPoints(points) {
  return points.some((point) => point >= 70);
}

updateContent();