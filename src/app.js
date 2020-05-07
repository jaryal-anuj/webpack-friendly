var sounds = {
    name:"anuj",
    meow(){
        return 'Meow'
    },
    hiss(){
        return 'Hiss'
    }
}

var name = 'Mabel';
var mabel = {name,sounds}
console.log(mabel)