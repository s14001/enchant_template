enchant();
gs = {                  //ゲームウィンドウの幅，高さ，fpsを定義
    width:320
   ,height:320
   ,fps:15
};

window.onload = function(){

  game = new Core(gs.width,gs.height);
  game.fps=gs.fps;
  var stage = game.rootScene;

  game.onload = function(){
  };

  game.start();

};

