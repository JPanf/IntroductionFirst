"use strict"
let workers = [
  {q: 5, s: 10000},
  {q: 15, s: 25000},
  {q: 40, s: 50000},
  {q: 10, s: 100000}
];
//console.log(workers);
let tax=0;
let quant=0;
for (let worker of workers){
  quant=quant+worker.q;
  tax=tax+(worker.q*worker.s*0.2);
}
//console.log(quant);
console.log("суммарные налоговые отчисления со всех зарплат"+": "+tax+" рублей;");
console.log("средние налоговые отчисления на человека в рублях"+ ": "+Math.floor(tax/quant));
