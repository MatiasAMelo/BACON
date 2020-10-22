const argv = require('./config/yargs').argv;
const colors = require('colors');
const { sum, minus, product, divide, power,sqrt,cbrt } = require('./operations/basic');
const {area_sqr,area_rec,area_trian,area_cir} = require('./operations/area')
const hypo = require('./operations/hypotenuse'  )


let command = argv._[0];


switch (command) {
    case 'sum':
        let sum_ab = sum(argv.a, argv.b);
        console.log(`Add ${argv.a} + ${argv.b} is equal to ${sum_ab}`.green);
        break
    case 'minus':
        let minus_ab = minus(argv.a, argv.b);
        console.log(`Minus ${argv.a} - ${argv.b} is equal to ${minus_ab}`.green);
        break
    case 'product':
        let product_ab = product(argv.a, argv.b);
        console.log(`Product ${argv.a} * ${argv.b} is equal to ${product_ab}`.green);
        break
    case 'divide':
        let divide_ab = divide(argv.a, argv.b);
        console.log(`Divide ${argv.a} / ${argv.b} is equal to ${divide_ab}`.green);
        break
    case 'hypo':
        let hypo_ab = hypo.hypotenuse(argv.a, argv.b);
        console.log(`Hypotenuse of ${argv.a} and ${argv.b} is equal to ${hypo_ab}`.green);
        break
    case 'power':
        let power_ab = power(argv.a, argv.b);
        console.log(`power ${argv.a} ^ ${argv.b} is equal to ${power_ab}`.green);
        break    
    case 'area':
        if (argv.fig === 'rec'){
            let rectangule_bh = area_rec(argv.h, argv.b);
            console.log(`Area of rectangule of base ${argv.b} and height ${argv.h} is equal to ${rectangule_bh}`.green);
        }
        if (argv.fig === 'sqr'){
            let square_ss = area_sqr(argv.s);
            console.log(`Area of square of side ${argv.s} is equal to ${square_ss}`.green);
        }
        if (argv.fig === 'trian'){
            let triangule_bh = area_trian(argv.h, argv.b);
            console.log(`Area of triangule of base ${argv.b} and height ${argv.h} is equal to ${triangule_bh}`.green);
        }
        if (argv.fig === 'cir'){
            let circle_PIr = area_cir(argv.r);
            console.log(`Area of circle of radio ${argv.r} is equal to ${circle_PIr}`.green);
        
        }
        break
    case 'sqrt':
        let sqrt_ab = sqrt(argv.a);
        console.log(`The square root ${argv.a} is equal to ${sqrt_ab}`.green);
        break                     
    case 'cbrt':
        let cbrt_ab = cbrt(argv.a);
        console.log(`The cube root ${argv.a} is equal to ${cbrt_ab}`.green);
        break
        
    default:
        console.log("Unknow command");
        break;


        
}