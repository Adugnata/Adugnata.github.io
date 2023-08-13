document.addEventListener("DOMContentLoaded", function() {
    const circleContainer = document.getElementById("container");
    const widthInput = document.getElementById("widthInput");
    const growthAmountInput = document.getElementById("growthAmountInput");
    const growRateInput = document.getElementById("growRateInput");
    const numberCirclesInput = document.getElementById("numberCirclesInput");
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function() {
        const width = parseInt(widthInput.value);
        const growthAmount = parseInt(growthAmountInput.value);
        const growRate = parseInt(growRateInput.value);
        const numberCircles = parseInt(numberCirclesInput.value);

        for (let i = 0; i < numberCircles; i++) {
            createCircle(width, growthAmount, growRate);
        }
    });

    function createCircle(initialWidth, growthAmount, growRate) {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.width = initialWidth + "px";
        circle.style.height = initialWidth + "px";
        circleContainer.appendChild(circle);

        circle.addEventListener("click", function() {
            circleContainer.removeChild(circle);
        });

        const interval = setInterval(function() {
            const currentWidth = parseInt(circle.style.width);
            const newWidth = currentWidth + growthAmount;
            circle.style.width = newWidth + "px";
            circle.style.height = newWidth + "px";
        }, growRate);
    }
});
