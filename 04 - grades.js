let results = [20, 87, 44, 32, 67, 19, 77, 61, 54, 11];

for(let index = 0; index < results.length; index++) {
  console.log(results[index]);
  let result = results[index];

  if( result < 50) {
    console.log("Godkänd")
  } else if (result < 80) {
    console.log("Väl Godkänd")
  } else {
    console.log("Icke godkent, IG")
  }
}