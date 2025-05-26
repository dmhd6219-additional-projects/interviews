function countSymbols(str){
    const map = new Map();
    for (const char of str){
        map.set(char, map.has(char) ? map.get(char) + 1 : 1 )
    }
    for (const [key, value] of map.entries()){
        console.log(key, value)
    }
}

countSymbols('wtf brooo')