#!/usr/bin/env node
import play from '../src/play.js';
import { description, generateRound } from '../src/games/brain-calc-logic.js';

play(description, generateRound);
