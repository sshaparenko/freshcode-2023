// O(n^2)
// for insode of for is ^2

/*
  O(n^3)
  for
    for
      for

  O(n^2)
  for
    for
*/


for(let i = 0; i < 3; i++) {
  // bconsole.log(i);
  for(let j =1; j < 3; j++) {
    console.log(j*i);
  }
}