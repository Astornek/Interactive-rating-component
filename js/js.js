function activateBtn() {
  const rateBtns = document.querySelectorAll(".rate");
  const submitBtn = document.querySelector(".submit-btn");

  rateBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      rateBtns.forEach((otherBtn) => otherBtn.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  submitBtn.addEventListener("click", () => {
    const selectedBtn = document.querySelector(".rate.active");

    if (selectedBtn) {
      const selectedRating = selectedBtn.textContent;
      showThankYouMessage(selectedRating);
    }
  });
}

function showThankYouMessage(rating) {
  const wrapOne = document.querySelector(".wrap-one");
  const wrapTwo = document.querySelector(".wrap-two");

  wrapOne.style.display = "none";
  wrapTwo.style.display = "flex";

  const scoreText = document.querySelector(".score");
  scoreText.textContent = `You selected ${rating} out of 5`;
}

document.addEventListener("DOMContentLoaded", activateBtn);
