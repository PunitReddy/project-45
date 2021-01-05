class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.title = createElement('h2');
    }
    hide(){
      
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }

    display(){
      this.title.html("Drivers Test");
      this.title.position(displayWidth/2 - 50, 100);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{
      //input.hide();
      //button.hide();
      candidate.name = this.input.value()
      candidate.update()
      this.input.hide()
      this.button.hide()
      });
  
    }
}