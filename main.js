// Get the canvas and its context
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

//  draw a point
function drawPoint(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

// Draw the circle boundary
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.strokeStyle = "orange";
ctx.stroke();

// Monte Carlo Pi Estimation

function monteCarloPI(numPoints) {
    let insideCircle = 0;
    let totalPoints = 0;
    const batchSize = 100;

    function step() {
        if (totalPoints < numPoints) {
            for (let i = 0; i < batchSize && totalPoints < numPoints; i++) {
                // Random point coordinates
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;

                const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

                // Check if point is inside the circle
                if (distance <= radius) {
                    insideCircle++;
                    drawPoint(x, y, 'red');
                } else {
                    drawPoint(x, y, 'green');
                }

                totalPoints++;
            }

            // Update Pi estimate and error rate
            const piEstimate = 4 * (insideCircle / totalPoints);
            document.getElementById("pi").textContent = `Estimated Pi: ${piEstimate.toFixed(4)}`;
            const errorRate = ((piEstimate - Math.PI) / Math.PI) * 100;
            document.getElementById("error").textContent = `Error Rate: ${errorRate.toFixed(2)}%`;

            // Update progress bar
            const progress = (totalPoints / numPoints) * 100;
            document.getElementById("progress-bar").style.width = `${progress}%`;
            document.getElementById("progress-text").textContent = `${progress.toFixed(2)}%`;


            requestAnimationFrame(step);
        }
    }

    step();
}
