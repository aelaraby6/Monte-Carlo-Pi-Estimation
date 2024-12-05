# Monte-Carlo-Pi-Estimation

# Monte Carlo Pi Estimation

## Project Description  
This project visualizes the process of estimating the value of π (Pi) using the Monte Carlo method. It uses random point generation within a square that bounds a circle to approximate Pi.  

The visualization includes:  
- **Red points**: Represent points inside the circle.  
- **Green points**: Represent points outside the circle.  
- A **progress bar**: Displays the simulation progress.  
- Real-time updates: Shows the current Pi estimate and error rate compared to the true value of π.

---

## How It Works  
The Monte Carlo method estimates Pi based on the ratio of points inside a circle to the total points generated within the bounding square.  

### Mathematical Concept  
- **Circle Area Formula**: \( A = \pi r^2 \)  
- **Square Area Formula**: \( A = (2r)^2 \)  
- The ratio of the areas of the circle to the square is proportional to \( \pi/4 \).  

By generating random points and calculating how many fall inside the circle, Pi can be estimated as:  
\[
\pi \approx 4 \times \frac{\text{Points inside the circle}}{\text{Total points}}
\]

### Features  
1. **Dynamic Point Generation**:  
   - Points are randomly generated and drawn in batches for efficiency.  
2. **Interactive Visualization**:  
   - Displays points on a canvas in real-time.  
3. **Progress Feedback**:  
   - A progress bar tracks the completion percentage of the simulation.  
4. **Real-Time Insights**:  
   - Displays the estimated Pi value and the error rate dynamically.  

---

## Technologies Used  
- **HTML5**: For structuring the page and creating the canvas element.  
- **CSS3**: For styling the visualization and progress bar.  
- **JavaScript**: For implementing the Monte Carlo algorithm and visualization logic.  

---

## Usage  
1. Clone or download the repository.  
2. Open the `index.html` file in any modern browser.  
3. Click the **"Start Simulation"** button to begin.  
4. Observe:  
   - The canvas updates with red and green points.  
   - The progress bar indicates the simulation progress.  
   - Real-time Pi estimate and error rate updates.

---

## Key Achievements  
- Approximated the value of Pi using **1,000,000 random points**.  
- Achieved an estimated value of Pi close to **3.1416**, with a minimal error rate.  
- Created an interactive and educational visualization of Pi estimation.



