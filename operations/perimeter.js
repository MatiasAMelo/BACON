let peri_sqr = (s) =>{
    return s * 4
} 

let peri_rec =  (h, b) =>{
    return h + h + b +b
}

let peri_trian = (a, b, c) =>{
    return a + b + c
}

let peri_cir = (r)=>{
    return Math.PI * Math.PI * r
}


module.exports = {
    peri_sqr,
    peri_rec,
    peri_trian,
    peri_cir
}