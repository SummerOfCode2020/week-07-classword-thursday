/**
    Survivor: Island of the Emoji

    Starring Jessica Reynolds
 */
const sources = ['🐮','🥔','🐓','🌽']

/*
 Could also be written as
 `function cook (item) {}`

 */
const cook = (item) => {
    let result = '🕸'
    
 /*
    switch (item) {
        case '🐮':
            result = '🍔'
            break
        case '🥔':
            result = '🍟'
            break
        case '🐓':
            result = '🍗'
            break
        case '🌽':
            result = '🍿'
            break
    }
    */
// change switch statement to an equivalent
    return result
}

const meals = sources.map(cook)

console.log({meals})

/* 
    Immunity Challenge: 
    Replace the switch statement with an alternate implementation 
*/
