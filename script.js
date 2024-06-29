document
  .getElementById("tap-effect")
  .addEventListener("click", function (event) {
    const img = this;
    const rect = img.getBoundingClientRect();
    const imgX = rect.left + rect.width / 2;
    const imgY = rect.top + rect.height / 2;

    const clickX = event.clientX;
    const clickY = event.clientY;

    const threshold = rect.width * 0.1;
    const distanceX = Math.abs(clickX - imgX);
    const distanceY = Math.abs(clickY - imgY);

    if (distanceX < threshold && distanceY < threshold) {
      img.style.transform = "scale(0.95)";
    } else {
      const rotateY = ((clickX - imgX) / rect.width) * 30;
      const rotateX = ((imgY - clickY) / rect.height) * 30;

      img.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.2)`;
    }

    const plusOne = document.createElement("div");
    plusOne.className = "plus-one";
    plusOne.innerText = "+1";
    document.body.appendChild(plusOne);

    const imgRect = img.getBoundingClientRect();
    plusOne.style.left = `${imgRect.left + imgRect.width / 2}px`;
    plusOne.style.top = `${imgRect.top + imgRect.height / 2}px`;

    setTimeout(() => {
      img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    }, 150);

    setTimeout(() => {
      plusOne.remove();
    }, 1000);
  });
