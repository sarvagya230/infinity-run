class distance
{
    constructor()
    {
    }
    getDistance(){
        var distanceRef  = database.ref('player1');
        distanceRef.on("value",function(data){
           Distance = data.val();
        })
    
      }
    
    
    
    
    

    
    
    player_countInfo()
    {
        var playerRef  = database.ref('gameState');
        playerRef.on("value",function(data){
           No.player = data.val();
        })
    
      }
      
    }

