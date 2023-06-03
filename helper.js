//file to help me write a lot of code without actually writing a lot of code

for(let i=0; i<=9; i++){
    for(let j=0; j<=9; j++){
        let id = i.toString() + j.toString()
        console.log('<div class="mapTile" id="' + id + '"> </div>');
    }
}