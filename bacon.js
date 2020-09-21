const argv = require('./config/yargs').argv;
const colors = require('colors');
const { sum, minus, product, divide, power } = require('./operations/basic');
const {area_square} = require('./operations/area-perimeter')
const hypo = require('./operations/hypotenuse')


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
        if (argv.fig === 'square'){
            let resultarea_square = area_square(argv.s);
            console.log(`Area of square of side ${argv.s} is equal to ${resultarea_square}`.green);
        }
        break  
          
    
        //  case 'root2':
    //      let root2_ab = root(argv.a, argv.b);
    //      console.log(`square ${argv.a}   is equal to ${root2_ab}`.green);
    //     break    
        
    default:
        console.log("Unknow command");
        break;


        
}