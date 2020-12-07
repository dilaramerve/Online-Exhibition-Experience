let img = [];

let rectx, recty;

function preload() {
  song = loadSound('assets/yannTiersenLaValseDamelie.mp3');
  font = loadFont('assets/madeGentle.otf');

  img[0] = loadImage("assets/otobus1.png");
  img[1] = loadImage("assets/otobus2.png");
  img[2] = loadImage("assets/otobus3.png");
  img[3] = loadImage("assets/otobus4.png");
  img[4] = loadImage("assets/otobus1duotone.png");
  img[5] = loadImage("assets/otobus1duotone.png"); //bigger version
  img[6] = loadImage("assets/otobus2duotone.png");
  img[7] = loadImage("assets/otobus2duotone.png"); //bigger version
  img[8] = loadImage("assets/otobus3duotone.png");
  img[9] = loadImage("assets/otobus3duotone.png"); //bigger version
  img[10] = loadImage("assets/otobus4duotone.png");
  img[11] = loadImage("assets/otobus4duotone.png"); //bigger version
}

function setup() {
  createCanvas(windowWidth, 7750);


  // F O R   I N T E R S E C T //
  rectx = 210;
  recty = 80;
  // F O R   I N T E R S E C T //

  //////////////////////////////////////////  R E S I Z E D  I M A G E S  //////////////////////////////////////////
  img[0].resize(340, 200);
  img[1].resize(340, 200);
  img[2].resize(340, 200);
  img[3].resize(340, 200);
  img[4].resize(340, 200);
  img[5].resize(680, 400);   //bigger version
  img[6].resize(340, 200);
  img[7].resize(680, 400);   //bigger version
  img[8].resize(340, 200);
  img[9].resize(680, 400);   //bigger version
  img[10].resize(340, 200);
  img[11].resize(680, 400);  //bigger version
  //////////////////////////////////////////  R E S I Z E D  I M A G E S  //////////////////////////////////////////
}


function draw() {
  background('#E7D8D1');
  otobus();
}

function otobus() {

  noFill();
  noStroke();
  rect(rectx, recty, 300, 200);
  rect(rectx+200, recty, 300, 200);
  rect(rectx+400, recty, 300, 200);
  rect(rectx+600, recty, 300, 200);

  // B U S S E S  B & W //
  image(img[3], 850, 100);
  image(img[2], 600, 100);
  image(img[1], 350, 100);
  image(img[0], 95, 100);
  // B U S S E S  B & W //

  ////////////////////////////////////////// T E X T    //////////////////////////////////////////
  fill('#D15A28');
  textFont(font);
  textSize(18);
  let a = 'İzmir halkı otobüsle 1930’lu yıllarda tanıştı. Başlangıçta çeşitli hatlarda özel şahıs şirketleri tarafından gerçekleştirilen otobüs seferleri, 1937 yılından itibaren İzmir Belediyesi tarafından yürütülmeye başlandı.';
  text(a, 100, 300, 500, 600);

  let b = '“İ.B.O” olarak anılan, “İzmir Belediyesi Otobüsleri” ilk seferlerini, Dr. Behçet Uz’un girişimleriyle Konak İskelesi Önü - Alsancak hattında, Birinci Kordon üzerinde gerçekleştirdi. Kısa süre içerisinde otobüs filosundaki araç sayısını arttıran belediye, Kordon, Tepecik, Buca, Bornova, Eşrefpaşa ve Karşıyaka hatlarını oluşturarak hizmet ağını büyüttü.';
  text(b, 100, 440, 500, 600);

  let c = '1945 yılına kadar İzmirlilere İ.B.O adıyla hizmet veren otobüsler, bu yıldan itibaren ESHOT’a bağlandı.';
  text(c, 100, 620, 500, 600);
  ////////////////////////////////////////// T E X T   //////////////////////////////////////////


  ////////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////
  if(dist (mouseX, mouseY, rectx, recty) <= 400/2-20) {
    image(img[4], 95, 100);
    image(img[5], 700, 300);
   }

  if(dist (mouseX, mouseY, rectx+350, recty) <= 400/2-20) {
     image(img[6], 350, 100);
     image(img[7], 700, 300);
  }

  if(dist (mouseX, mouseY, rectx+620, recty) <= 400/2-50) {
     image(img[8], 600, 100);
     image(img[9], 700, 300);
  }

  if(dist (mouseX, mouseY, rectx+900, recty) <= 400/2-20) {
     image(img[10], 850, 100);
     image(img[11], 700, 300);
  }
 ///////////////////////////////////////// I N T E R A C T I O N S  //////////////////////////////////////////

}
