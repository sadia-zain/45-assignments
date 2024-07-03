"use strict";
//Album: write a funciton called make_album that build  a object describing a music album . the function should take in an artist name
// and album in an title, and it should return a object containing these two pieces of informaiton. use the function to make three 
// dictionaries reperesenting different albums. print each return value to show that object are storing the album informaiton correctly. add an optional 
//parameter to make_lbumthat allows you to store the no of tracks on an album. if the calling line includes a value for the no of tracks, add that value to the album' s object.
//male atleast one new function call that includes the no of tracks on an album. 
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album(" Sadia", " Code with Sadia");
console.log(album1);
let album2 = make_album("Saira", " Code with Saira", 10);
console.log(album2);
let album3 = make_album("Namra", "Code with Namra", 30);
console.log(album3);
