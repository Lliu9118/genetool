let sel;

function setup() {
  textAlign(CENTER);
  background(200);
  createCanvas(1000,1000);
  sel = createSelect();
  sel.position(width / 2, height / 2);
  sel.option('Asian');
  sel.option('White');
  sel.option('Black');
  sel.selected('Indian');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();
  background(200);
}
