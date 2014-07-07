enchant();
gsettings = {                  //ゲームウィンドウの幅，高さ，fpsを定義
    width:320
   ,height:320
   ,fps:15
};

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  var stage = game.rootScene;

  game.onload = function(){
  };

  game.start();

};

