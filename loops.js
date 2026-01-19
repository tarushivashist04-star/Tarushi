for(let i=0;i<6;i++){
  console.log(i)
}

//to add forst n natural numbers
let sum =0
let n= prompt("enter the value of n")
n=Number.parseInt(n)
for(let i=0;i<n;i++){
  sum+=(i+1)
}
console.log("Sum of first"+n+"natural number is "+sum)