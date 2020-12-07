/*
 ixd3102s20
 project 2
 elçin gizem kanmaz
 dilara merve kaçmaz
*/

let song;
let img = [];
let troleybus;
let rectx, recty;
let rect2x, rect2y;

function preload(){
  song = loadSound('assets/yannTiersenLaValseDamelie.mp3');
  font = loadFont('assets/madeGentle.otf');

  img[0] = loadImage("assets/otobus1.png");
  img[1] = loadImage("assets/otobus2.png");
  img[2] = loadImage("assets/otobus3.png");
  img[3] = loadImage("assets/otobus4.png");
  img[4] = loadImage("assets/otobus1duotone.png");
  img[5] = loadImage("assets/otobus1bigger.png"); //bigger version
  img[6] = loadImage("assets/otobus2duotone.png");
  img[7] = loadImage("assets/otobus2bigger.png"); //bigger version
  img[8] = loadImage("assets/otobus3duotone.png");
  img[9] = loadImage("assets/otobus3bigger.png"); //bigger version
  img[10] = loadImage("assets/otobus4duotone.png");
  img[11] = loadImage("assets/otobus4bigger.png"); //bigger version
  img[12] = loadImage("assets/machine.png");
  img[13] = loadImage("assets/hand.png");
  img[14] = loadImage("assets/card1.png");
  img[15] = loadImage("assets/card2.png");
  img[16] = loadImage("assets/card3.png");
  img[17] = loadImage("assets/noise.jpg"); ////////// U S E   I T   L A T E R //////////
  img[18] = loadImage("assets/headline2.png");
  img[19] = loadImage("assets/bottomOfthePhoto.png");
  img[20] = loadImage("assets/headline.png");
  troleybus = loadImage("assets/troleybus.png");
}

function setup() {
  createCanvas(windowWidth, 3200);

  // F O R   I N T E R S E C T //
  rectx = 210;
  recty = 160;
  rect2x = 230;
  rect2y = 1160;
  // F O R   I N T E R S E C T //

  //////////////////////////////////////////  R E S I Z E D  I M A G E S  //////////////////////////////////////////
  img[0].resize(340, 200);   //bus1 b&w
  img[1].resize(340, 200);   //bus2 b&w
  img[2].resize(340, 200);   //bus3 b&w
  img[3].resize(340, 200);   //bus4 b&w
  img[4].resize(340, 200);   //bus1 duotone
  img[5].resize(680, 400);   //bus1 duotone bigger version
  img[6].resize(340, 200);   //bus2 duotone
  img[7].resize(680, 400);   //bus2 duotone bigger version
  img[8].resize(340, 200);   //bus3 duotone
  img[9].resize(680, 400);   //bus3 duotone bigger version
  img[10].resize(340, 200);  //bus4 duotone
  img[11].resize(680, 400);  //bus4 duotone bigger version
  img[12].resize(windowWidth/2+400, windowHeight/2+270);  //kentkart machine
  img[13].resize(windowWidth/2+130, windowHeight/2-20);   //hand
  img[14].resize(300, 200);   //card1
  img[15].resize(300, 200);   //card2
  img[16].resize(300, 200);   //card3
  img[17].resize(windowWidth, windowHeight);   //noise
  //img[18].resize(width/3+300, height/25-160);  //headline2
  //img[19].resize(width/2+500, height/6);       //bottom of the photo
  //img[20].resize(width/2+500, height/6);
  //troleybus.resize(width/5, height/5);         //troleybus
  //////////////////////////////////////////  R E S I Z E D  I M A G E S  //////////////////////////////////////////
}

function draw() {
  background('#E7D8D1');
  //image(img[5], 0, 0);  /////// N O T   L O O K I N G   G O O D ///////

  otobus();
  kentkartMachine();
  troleybusHistory();

}

function mousePressed() {
  song.play();
  song.loop();
}

function otobus() {

  noFill();
  noStroke();
  rect(rectx, recty, 300, 200);
  rect(rectx+200, recty, 300, 200);
  rect(rectx+400, recty, 300, 200);
  rect(rectx+600, recty, 300, 200);

  ///////////////////// H E A D L I N E /////////////////////
  image(img[20], 85, 20);
  ///////////////////// H E A D L I N E /////////////////////

  // B U S S E S  B & W //
  image(img[3], 850, 160);
  image(img[2], 600, 160);
  image(img[1], 350, 160);
  image(img[0], 95, 160);
  // B U S S E S  B & W //

  ////////////////////////////////////////// T E X T    //////////////////////////////////////////
  fill('#D15A28');
  textFont(font);
  textSize(16);
  let a = 'İzmir halkı otobüsle 1930’lu yıllarda tanıştı. Başlangıçta çeşitli hatlarda özel şahıs şirketleri tarafından gerçekleştirilen otobüs seferleri, 1937 yılından itibaren İzmir Belediyesi tarafından yürütülmeye başlandı.';
  text(a, 100, 360, 450, 600);

  let b = '“İ.B.O” olarak anılan, “İzmir Belediyesi Otobüsleri” ilk seferlerini, Dr. Behçet Uz’un girişimleriyle Konak İskelesi Önü - Alsancak hattında, Birinci Kordon üzerinde gerçekleştirdi. Kısa süre içerisinde otobüs filosundaki araç sayısını arttıran belediye, Kordon, Tepecik, Buca, Bornova, Eşrefpaşa ve Karşıyaka hatlarını oluşturarak hizmet ağını büyüttü.';
  text(b, 100, 480, 450, 600);

  let c = '1945 yılına kadar İzmirlilere İ.B.O adıyla hizmet veren otobüsler, bu yıldan itibaren ESHOT’a bağlandı.';
  text(c, 100, 650, 450, 600);
  ////////////////////////////////////////// T E X T   //////////////////////////////////////////


  ////////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////
  if(dist (mouseX, mouseY, rectx, recty) <= 400/2-20) {
    image(img[4], 95, 160);
    image(img[5], 645, 340);
    let a = 'MERCEDES 302T';
    text(a, 660, 670, 1200, 200);
   }

  if(dist (mouseX, mouseY, rectx+350, recty) <= 400/2-20) {
     image(img[6], 350, 160);
     image(img[7], 645, 340);
     let b = 'MAN 590';
     text(b, 660, 670, 1200, 200);
  }

  if(dist (mouseX, mouseY, rectx+620, recty) <= 400/2-50) {
     image(img[8], 600, 160);
     image(img[9], 645, 340);
     let c = 'Turist Otobüsü';
     text(c, 660, 670, 1200, 200);
  }

  if(dist (mouseX, mouseY, rectx+900, recty) <= 400/2-20) {
     image(img[10], 850, 160);
     image(img[11], 645, 340);
     let d = 'Burunlu BUSSING';
     text(d, 660, 670, 1200, 200);
  }
 ///////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////

}


function kentkartMachine() {
  //kentkart machine
  image(img[12], -10, 865);
  noFill();
  noStroke();
  rect(rect2x, rect2y, 300, 230);

  ///////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////
  let x1 = map(mouseX-100, 0, width, 100, 500);
  image(img[13], x1, 1020);  //hand

  //cards
  if(dist (mouseX, mouseY, rect2x, rect2y) <= 510/2) {
    image(img[14], width/2+370, 840);
    image(img[15], width/2+370, 1080);
    image(img[16], width/2+370, 1320);

    fill('#D15A28');
    textFont(font);
    textSize(16);
    let e = 'Piyasaya çıkan ilk akıllı kart, 1999';
    text(e, 550, 1420, 1200, 200);
   }
   ///////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////
}

//second interaction
function troleybusHistory() {
  ///////////////////// H E A D L I N E /////////////////////
  //if(mouseY >= 1700) {
   image(img[18], 70 , 1800);
  //}
 ///////////////////// H E A D L I N E /////////////////////

  if(mouseY >= 2000) {
    fill('#D15A28');
    textFont(font);
    textSize(16);
    let b = 'İlk seferlerini 28 Temmuz 1954 tarihinde Konak-Güzelyalı hattında gerçekleştirilen troleybüsler, hem yolcu taşıma kapasitesi hem de hızı nedeniyle kısa sürede İzmirliler’in en çok tercih ettiği ulaşım araçlarından biri haline geldi.';
    text(b, 85, 2100, 550, 600);
  }

  ///////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////
  //bottom of the photo
  if(mouseY >= 2500) {
  image(img[19], 520, 2800);
  }

  //troleybus
  let y1 = map(mouseY, 10, height, 100, 2400);
  if(mouseY >= 1800) {
  image(troleybus, 800 , y1);
  }
  ///////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////

  if(mouseY >= 2200) {
   fill('#D15A28');
   textFont(font);
   textSize(16);
   let c = 'İzmir Belediyesi yoğun talep üzerine troleybüs ve hat sayısını arttırmak zorunda kaldı. 1964 yılında geldiğinde ESHOT, artık kendi atölyelerinde troleybüs üretmeye başlamıştı.';
   text(c, 85, 2400, 550, 600);
  }

  if(mouseY >= 2500) {
   fill('#D15A28');
   textFont(font);
   textSize(16);
   let d = '38 yıl boyunca İzmir trafiğine soluk aldıran troleybüsler, sık sık arızalanmaları ve ayrıca otobüslerin yaygınlaşması sebebiyle 6 Mart 1992’de kent içi ulaşımından kaldırıldı.';
   text(d, 85, 2700, 550, 600);
  }

}
