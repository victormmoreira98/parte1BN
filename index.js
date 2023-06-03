

let ocean =  [
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
['O','O','O','O','O','O','O','O','O','O'],
];

console.log(ocean)

import ships from './ships.json' assert {type: 'json'}

let shipNames = [];

function addShips() {
    for(const ship in ships){
        shipNames.push(ship)
    }
}

addShips()

ocean.forEach((row, indexOfRow) => {
    row.forEach((pos, indexOfPos) => {
        let currentPos = indexOfRow.toString() + indexOfPos.toString()
        
        shipNames.forEach((shipName) =>{
            let shipPos = ships[shipName]
            if(shipPos.includes(parseInt(currentPos))){
                switch(shipName){
                    case 'Carrier':
                        ocean[indexOfRow][indexOfPos] = 'C'
                        document.getElementById(currentPos).style.backgroundColor = 'red'
                    break;
                    case 'Battleship':
                        ocean[indexOfRow][indexOfPos] = 'B'
                        document.getElementById(currentPos).style.backgroundColor = 'green'
                    break;
                    case 'Destroyer':
                        ocean[indexOfRow][indexOfPos] = 'D'
                        document.getElementById(currentPos).style.backgroundColor = 'pink'
                    break;
                    case 'Submarine':
                        ocean[indexOfRow][indexOfPos] = 'S'
                        document.getElementById(currentPos).style.backgroundColor = 'yellow'
                    break;
                    case 'Patrol Boat':
                        ocean[indexOfRow][indexOfPos] = 'P'
                        document.getElementById(currentPos).style.backgroundColor = 'purple'
                    break;
                }
            }
        })
    })
})

console.log(ocean)
