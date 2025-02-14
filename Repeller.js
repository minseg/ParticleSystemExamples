class Repeller {

    constructor(x, y)  {
      this.position = createVector(x, y);
      this.power = 200;
    }

    repel(particle) {
        // Step 1: Get the force direction.
        let force = p5.Vector.sub(this.position, particle.position);
    
        // Step 2: Get and constrain the distance.
        let distance = force.mag();
        distance = constrain(distance, 5, 50);
    
        // Step 3: Calculate the magnitude, using a power variable for G.
        let strength = -1 * this.power / (distance * distance);
    
        // Step 4: Make a vector out of the direction and magnitude.
        force.setMag(strength);
        return force;
    }

    move(velocity) {
        this.position.add(velocity);
    }
  
    show() {
      stroke(0);
      fill(127);
      circle(this.position.x, this.position.y, 32);
    }
  }