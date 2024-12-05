# Monte Carlo Pi Estimation


https://github.com/user-attachments/assets/047c51c4-8d25-4b32-ba25-2220a9c8c23b


## Project Description  
This project visualizes the process of estimating the value of π (Pi) using the Monte Carlo method. It uses random point generation within a square that bounds a circle to approximate Pi.  

The visualization includes:  
- **Red points**: Represent points inside the circle.  
- **Green points**: Represent points outside the circle.  
- A **progress bar**: Displays the simulation progress.  
- Real-time updates: Shows the current Pi estimate and error rate compared to the true value of π.

---

## How It Works  

### The Algorithm  
1. Initialize `circle_points`, `square_points`, and `interval` to 0.  
2. Generate a random point `x`.  
3. Generate a random point `y`.  
4. Calculate \( d = x \cdot x + y \cdot y \).  
5. If \( d <= 1 \), increment `circle_points`.  
6. Increment `square_points`.  
7. Increment `interval`.  
8. If `interval` < `NO_OF_ITERATIONS`, repeat from step 2.  
9. Calculate \( \pi = 4 \cdot (\text{circle_points} / \text{square_points}) \).  
10. Terminate.  


### Features  
1. **Dynamic Point Generation**:  
   - Points are randomly generated and drawn in batches for efficiency.  
2. **Interactive Visualization**:  
   - Displays points on a canvas in real-time.  
3. **Progress Feedback**:  
   - A progress bar tracks the completion percentage of the simulation.  
4. **Real-Time Insights**:  
   - Displays the estimated Pi value and the error rate dynamically.  


## Technologies Used  
- **HTML5**: For structuring the page and creating the canvas element.  
- **CSS3**: For styling the visualization and progress bar.  
- **JavaScript**: For implementing the Monte Carlo algorithm and visualization logic.  


## Usage  
1. Clone or download the repository.  
2. Open the `index.html` file in any modern browser.  
3. Click the **"Start Simulation"** button to begin.  
4. Observe:  
   - The canvas updates with red and green points.  
   - The progress bar indicates the simulation progress.  
   - Real-time Pi estimate and error rate updates.


## Key Achievements  
- Approximated the value of Pi using **1,000,000 random points**.  
- Achieved an estimated value of Pi close to **3.1416**, with a minimal error rate.  
- Created an interactive and educational visualization of Pi estimation.

![Result](https://github.com/user-attachments/assets/a1b572b0-cc98-47f8-bbb3-985d5e4ed32c)
  

