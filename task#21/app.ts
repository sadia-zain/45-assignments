interface type
 {
    title: string; author: string; publishingYear: number
 }
   let obj: type = { title:"The Hobbit", author: "Robert Hook", publishingYear: 1987};
console.log(`typescriptObjects: ${obj.title} by${obj.author},published in ${obj.publishingYear}`);
console.log(`/n The title is ${obj.title}`);
console.log(`/n The author of this is the ${obj.author}`);
console.log(`/n The publishing yuear of this is ${obj.publishingYear}`);
