#!/usr/bin/env node
import greeting from '../src/cli.js';
import { isEven, playGame} from '../src/brain-even-logic.js';

const name = greeting()
const countOfGames = 3
console.log(playGame(countOfGames,name))
