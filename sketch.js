let linkAsianBRCA;
let linkWhiteBRCA;
let linkIndianBRCA;
let linkAsianLUAD;
let linkWhiteLUAD;
let linkIndianLUAD;
function setup() {
  createCanvas(1500, 1000);
    let displayWidth = height
    linkAsianBRCA = createA('https://docs.google.com/spreadsheets/d/1QUiOCaXBLiJsvYbiWbFjqV8tyL2GPLPjThW4Zoff0tw/edit#gid=0', 'this is a link','_blank');
   linkAsianBRCA.position(203, 287);
  linkWhiteBRCA = createA('https://docs.google.com/spreadsheets/d/1QUiOCaXBLiJsvYbiWbFjqV8tyL2GPLPjThW4Zoff0tw/edit#gid=0', 'this is a link','_blank');
  
  
  
  
  
   linkWhiteBRCA.position(203, 434);
  linkIndianBRCA = createA('https://docs.google.com/spreadsheets/d/1QUiOCaXBLiJsvYbiWbFjqV8tyL2GPLPjThW4Zoff0tw/edit#gid=0', 'this is a link','_blank');
   linkIndianBRCA.position(203, 581);
  linkAsianLUAD = createA('https://docs.google.com/spreadsheets/d/1QUiOCaXBLiJsvYbiWbFjqV8tyL2GPLPjThW4Zoff0tw/edit#gid=0', 'this is a link','_blank');
   linkAsianLUAD.position(350, 287);
  linkWhiteLUAD = createA('https://docs.google.com/spreadsheets/d/1QUiOCaXBLiJsvYbiWbFjqV8tyL2GPLPjThW4Zoff0tw/edit#gid=0', 'this is a link','_blank');
   linkWhiteLUAD.position(350, 434);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  linkIndianLUAD = createA('https://docs.google.com/spreadsheets/d/1QUiOCaXBLiJsvYbiWbFjqV8tyL2GPLPjThW4Zoff0tw/edit#gid=0', 'this is a link','_blank');
   linkIndianLUAD.position(350, 581);
}
function draw() {
  background(220);
  textSize(height / 15)
  text('Gene Mutation Interactive Tool', width / 3 - 35, height / 7 + 21);
  fill("green")
  rect(0, height / 5, 3000, 7);
  textSize(35)
 
  
  
  
  
  
  
  text('Asian', 50, 300)
  text('BRCA', 196, 245)
  text('LUAD', 343, 245)
  text('White', 50, 447)
  text('Indian', 50, 594)
}
