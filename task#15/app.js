"use strict";
let guests_list = ["sadia", "saira", "iqra"];
for (let i = 0; i < guests_list.length; i++) {
    console.log(`Dear, ${guests_list[i]} : \n you are invited to dinner!\n`);
}
console.log(`unfortunately ${guests_list[1]} can't able to join us`);
guests_list[1] = "sana";
console.log("\n new lists of invitation\n");
for (let j = 0; j < guests_list.length; j++) {
    console.log(`Dear, ${guests_list[j]} \nyou are invited to dinner\n`);
}
