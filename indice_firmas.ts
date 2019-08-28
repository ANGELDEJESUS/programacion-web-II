interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[],
    [extraProp: string]: any
}
 
let fourthLake: Lakes = {
    name: 'Tanganyika',
    depth: 1470,
    length: 676,
    area: 32600,
    isFreshwater: true,
    countries: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma:'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
}

interface Enemy {
    readonly tamaño: number,
    vida: number,
    rango: number,
    readonly danio: number
}
 
let tanque: Enemy = {
    tamaño: 50,
    vida: 100,
    rango: 60,
    danio: 12
}

 
// Correcto
tanque.vida = 95;
 
// Incorrecto porque daño es de solo lectura
//tanque.danio = 10;


interface EnemyHit {
    (name: Enemy, damageDone: number): number;
}
 
let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number) {
    tankName.vida -= damageDone;
    return tankName.vida;
}