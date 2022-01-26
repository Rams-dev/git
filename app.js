function getCoins(change) {
    let coins = []
    let money = change
    coins[0] = 1 
    coins[1] = 2 
    coins[2] = 5 
    coins[3] = 10 
    coins[4] = 20 
    coins[5] = 50 
    // ¡No olvides compartir tu solución en redes!

    let coinsChange = []
// console.log(money);
    // console.log(coins.filter(c => c <= change))
    while (money > 0) {
        if(coins[5] < money){
            coinsChange[5] ? coinsChange[5]++ : coinsChange[5] = 1
            money = money - coinsChange[5] 
        }else{
            for(let index in coins){
                // console.log(coins[index]);
                if(coins[index] > money){
                    coinsChange[index - 1] ? coinsChange[index - 1]++ : coinsChange[index - 1] = 1
                    money = money - coins[index - 1]
                    break
                }
            }        
        }
    }   
    console.log(money);
    console.log(coinsChange);
}


console.log(getCoins(51));  // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimo

