#!/usr/bin/env node
import play from '../src/play.js';
import { description, generateRound } from '../src/games/brain-prime-logic.js';

play(description, generateRound);
