//if num is multiple of three, print "Loopy"
//if num is multiple of 4, print "Lighthouse"
//if num is both multiple of 3 and 4, print "Loopy Lighthouse"

function loopyLighthouse() {
  for (var i = 100; i <= 200; i++){
    if (i % 3 === 0 && i % 4 === 0){
      console.log("Loopy Lighthouse");
    } else if (i % 3 === 0) {
      console.log("Loopy");
    } else if (i % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse();
