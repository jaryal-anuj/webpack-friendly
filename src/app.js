
let messages = ["Hi there", "I'm good thanks", "How are you"];

for(let i=0;i<messages.length;i++){
    setTimeout(function() {
        console.log(messages[i]);
    }, i*(Math.floor(Math.random()*2500+1500)));
}