//large_shirt : make_shirts ()function so that shirts are large by default with message that read i love type script.
// make the large and medium with the default msg and shirt with small and any size with different msg 
function make_shirts (size : string = "large", msg: string = "i love typescript" ){
    console.log(`creating a shirt with size ${size} with msg of ${msg}`)

}
make_shirts();
make_shirts("medium");
make_shirts("small", " i love java script");