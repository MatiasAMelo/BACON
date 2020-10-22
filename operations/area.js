let area_sqr = (s)=>{
    return s*s; 
}

let area_rec = (h, b)=>{
    return b*h;
}

let area_trian = (h, b)=>{
    return (b * h)/2    ;
}

let area_cir = (r)=> {
return(Math.PI * r * r)




}

module.exports  = {
    area_sqr,
    area_rec,
    area_trian,
    area_cir
}