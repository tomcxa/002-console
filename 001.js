import yargs from "yargs"
import {hideBin} from "yargs/helpers"
import dayjs from 'dayjs'

const args = yargs(hideBin(process.argv)).option(
    'date', {
        alias: 'd',
        description: 'Показать текущий день месяца'
    }
).option(
    'month', {
        alias: 'm',
        description: 'Показать текущий месяц'
    }
).option(
    'year', {
        alias: 'y',
        type: 'boolean',
        description: 'Показать текущий год'
    }
).parse()

if (args._.includes('current')) {
    if (args.y) {
        console.log("Текущий год:", dayjs().year())
    } else if (args.m) {
        console.log("Текущий месяц:", dayjs().month())
    } else if (args.d) {
        console.log("Дата в календарном месяце:", dayjs().date())
    } else {
        console.log("Текущая дата и время в формате ISO:", dayjs().toISOString())
    }
}

if (args._.includes('add')) {
    if (args.d) {
        console.log("Текущий год:", dayjs().add(args.d, 'day').toISOString())
    } else if (args.m) {
        console.log("Текущий месяц:", dayjs().add(args.m, 'month').toISOString())
    }
}

if (args._.includes('sub')) {
    if (args.d) {
        console.log("Текущий год:", dayjs().subtract(args.d, 'day').toISOString())
    } else if (args.m) {
        console.log("Текущий месяц:", dayjs().subtract(args.m, 'month').toISOString())
    }
}