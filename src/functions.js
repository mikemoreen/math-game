const getRandomNum = (min = 1,max = 100) => Math.floor(Math.random() * (max - min + 1)) + min


const isEven = (num) => num%2===0?"yes":"no"


export{getRandomNum,
    isEven,
}
