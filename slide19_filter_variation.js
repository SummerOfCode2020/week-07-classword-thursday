const sources = ['🐮','🥔','🐓','🌽']

/*
 Could also be written as
 `function isVegan (item) {}`

 */
const isVegan = (item) => {
    let result = false

    switch (item) {
        case '🥔':
        case '🌽':
            result = true
            break
    }

    return result
}

const veganFoods = sources.filter(isVegan)

console.log({veganFoods})
