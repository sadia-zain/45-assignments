let guests_list : string[] = ["sadia", "saira", "iqra"];
for (let i=0; i < guests_list.length; i++){
    console.log(`Dear, ${guests_list[i]} : \n you are invited to dinner!\n`);
}
console.log(`unfortunately ${guests_list[1]} can't able to join us`);
guests_list[1] = "sana";
console.log("\n new lists of invitation\n");
for (let j=0; j<guests_list.length; j++){
    console.log(`Dear, ${guests_list[j]} \nyou are invited to dinner\n`);
}
console.log("Dear guest i have good news for you, I have found a bigger table, so more space available. so our new guests are:\n")
guests_list.unshift("Namra");
guests_list.splice(2,0, "Saima");
guests_list.push("Hira");
for(let i=0; i < guests_list.length; i++){
    console.log(`Dear, ${guests_list[i]} : \n you are invited to dinner`);
}