var emnum = (strings, ...keys)=>{
    console.log(strings)
    console.log(keys)
    keys.forEach((value, index)=>{
        if(typeof value == 'number'){
            keys[index] = `<em>${value}</em>`
        }
    })

    var result = strings[0];
    for(let i=0;i<keys.length;i++){
        result +=keys[i]+strings[i+1]
    }

    return result
}

var name = 'Alex';
var messagecount =20

var greeting = emnum`Hi, ${name} you have ${messagecount} messages`;

console.log(greeting);