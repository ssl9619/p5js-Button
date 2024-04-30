class button {
    constructor(x, y, w, h, round) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.round = round;
      this.hov = false;
    }
  
    drawButton(defColor, hovColor) {
      // hover value detected from outside to be able to change the color
      push();
      if(this.hov) 
      {
        fill(hovColor);
      } 
      else 
      {
        fill(defColor);
      }
  
      //hardcoded
      let roundVal = 10;
      if(this.round) 
      {
        rect(this.x, this.y, this.w, this.h, roundVal, roundVal, roundVal, roundVal);
      } 
      else 
      {
        rect(this.x, this.y, this.w, this.h);
      }
      pop();
      
    }
  
    drawText(t, tSize, defColor, hovColor, defStr, hovStr, strokeW) {
      
      push();
  
      textAlign(CENTER);
      stroke(0,0,0);
      if(!this.hov) 
      {
        fill(defColor);
        stroke(defStr);
      } 
      else 
      {
        fill(hovColor);
        stroke(hovStr);
      }
      strokeWeight(strokeW);
      
      textSize(tSize);

      text(t, 
            this.x + this.w/2, 
            (this.y + this.h/2) + (textDescent()/2)
        );
  
      pop();
    }
  
    // returns either true or false
    detectHover() {
      
      if(mouseX > this.x 
        && mouseX < this.x + this.w
        && mouseY > this.y
        && mouseY < this.y + this.h
      ) 
      {
        this.hov = true;
      } 
      else 
      {
        this.hov = false;
      }
    }

    pressed() {
        if(this.hov && mouseIsPressed) {
            return true;
        }
        return false;
    }
  }
  