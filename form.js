class intro {

    constructor() {
      this.input = createInput("Name: ");
      this.button = createButton('get started');
      this.greeting = createElement('h1');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
      this.index=null
    }
    display()
    {
       // background("red")
        this.title.html("RACE");
        this.title.position(displayWidth/2 - 50, 0);
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth-100,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount=playerCount+2
            g=1

            
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          });
        
    
    }
    getPlayer(){
      var playerCountRef = database.ref('no_of_players');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    writeNoOfPlayer(playerCount)
      {
      
          
          database.ref('/').update({
        
              no_of_players: playerCount
            });
          
          }   
  
}