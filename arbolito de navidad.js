function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let max = height * 2 -1
    let media = Math.floor(max/2) 
    let tree = ''
    for(let i=0; i <  height; i++){
        for(let t = 0; t < max; t++){
            if(t >= media - i && t <= media + i){
                tree += '*'
            }else{
                tree += '_'
            }
        }
        tree += '\n'
    }

    for(let m = 0; m< 2; m++){
        for(let m = 0; m< max; m++){
            if(m > media - 1 && m < media + 1){
                tree += '#'
            }else{
                tree += '_'
            }
        }
        tree += '\n'
    }

    return tree.trim()
  }
//  console.log(createXmasTree(10))



function otra(number){
    let tree = ""
    for(let i=1; i<=number; i++){
        let gio = '_'.repeat(number - i)
        let gio2 = '_'.repeat(number -1)
        let rama = '*'.repeat(i * 2 -1)
        tree += `${gio + rama + gio2}\n`
    }
    return tree
}

console.log(otra(3))