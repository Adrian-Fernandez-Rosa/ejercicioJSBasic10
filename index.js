import {suma, multiplica} from './controller.js';
import chalk from 'chalk';

console.log(suma(2,4))
console.log(chalk.green(multiplica(suma(1,2), suma(4, 5))));