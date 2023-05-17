 ////exemplo 1
 var c = document.getElementById("meuCanvas");
 var ctx = c.getContext("2d");

 ctx.moveTo(0, 0);
 ctx.lineTo(200, 100);
 ctx.stroke();
 ctx.moveTo(0, 90);
 ctx.lineTo(200, 100);
 ctx.stroke();
 /////

 ////exemplo 2
 var d = document.getElementById("meuCanvas2");
 var dtx = d.getContext("2d");

 //LINHA VERDE
 dtx.beginPath(); //inicando o desenho
 dtx.lineWidth = "5"; //expressura linha
 dtx.strokeStyle = "green"; //cor linha
 dtx.moveTo(0, 75); //ponto inicial
 //CORDENADAS (x,y) - as coordenadas sao de acordo com a altura e largura da caixa, que o desenho foi aplicado
 dtx.lineTo(290, 75); //ponto final
 dtx.stroke(); //

 //LINHA ROXA
 dtx.beginPath();
 dtx.strokeStyle = "purple";
 dtx.moveTo(50, 0);
 dtx.lineTo(150, 130);
 dtx.stroke();
 //////

 ///exemplo 3

 var e = document.getElementById("meuCanvas3");
 var etx = e.getContext("2d");

 etx.font = "30px Arial";

 // hello word 1
 etx.strokeText("Hello Word", 10, 50);
 etx.fillText("Hello Word", 10, 50);

 // hello word 2
 etx.strokeText("Hello Word", 10, 100);

 
 
 //exemplo 4
 //------------------Gradiente---------------------
 var f = document.getElementById("meuCanvas4Ver2");
 var ctx4 = f.getContext("2d");

 //x inicial, y inicial. x final, y final
 var grd = ctx4.createLinearGradient(0, 0, 200, 0);
 grd.addColorStop(0, "blue");
 grd.addColorStop(1, "white");

 //preenchimento
 ctx4.fillStyle = grd;

 ctx4.fillRect(0, 0, 200, 100);

 //versao laranja e vermelho
 var f2 = document.getElementById("meuCanvas4");
 var ctx42 = f2.getContext("2d");

 //x inicial, y inicial. x final, y final
 var grd2 = ctx4.createLinearGradient(60, 0, 200, 0);
 grd2.addColorStop(0, "orange");
 grd2.addColorStop(1, "red");

 //preenchimento
 ctx42.fillStyle = grd2;

 ctx42.fillRect(10, 10, 150, 80);
 
 //versao azul , roxo, rosa
 var f3 = document.getElementById("meuCanvas4Ver3");
 var ctx43 = f3.getContext("2d");

 //x inicial, y inicial. x final, y final
 var grd3 = ctx43.createLinearGradient(0, 0, 90, 90);
 grd3.addColorStop(0, "blue");
 grd3.addColorStop(0.5, "purple");
 grd3.addColorStop(1,"pink");

 //preenchimento
 ctx43.fillStyle = grd3;

 ctx43.fillRect(5, 5, 190, 90);

 ///exemplo 5
 var g = document.getElementById("meuCanvas5");
 var gtx = g.getContext("2d");

 gtx.beginPath()
 gtx.arc(100,75,50,0,2 * Math.PI);
 gtx.stroke();
 
 gtx.beginPath()
 gtx.arc(150,275,30,0,2 * Math.PI);
 gtx.stroke();
 ///////