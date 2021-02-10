var dark_color = `#553788`
var light_color = `#9266CC`
var dark_color_hex =  `0x${dark_color.substring(1)}`
var light_color_hex = `0x${light_color.substring(1)}`
var toColor = function () {
    let r1 = parseInt(dark_color_hex.substring(2,4), 16)
    let g1 = parseInt(dark_color_hex.substring(4,6), 16)
    let b1 = parseInt(dark_color_hex.substring(6,8), 16)
    let r2 = parseInt(light_color_hex.substring(2,4), 16)
    let g2 = parseInt(light_color_hex.substring(4,6), 16)
    let b2 = parseInt(light_color_hex.substring(6,8), 16)

    console.log(` r1 = ${r1} g1 = ${g1} b1 = ${b1} r2 = ${r2} g2 = ${g2} b2 = ${b2}`)
    let r3 = Math.round((r1+r2)/2)
    let g3 = Math.round((g1+g2)/2)
    let b3 = Math.round((b1+b2)/2)
    console.log(` r3 = ${r3} g3 = ${g3} b3 = ${b3} `)
    let hex_r = r3.toString(16)
    if(hex_r < 16){
        hex_r = `0${r3.toString(16)}`
    }
    let hex_g = g3.toString(16)
    if(hex_g < 16){
        hex_g = `0${g3.toString(16)}`
    }
    let hex_b = b3.toString(16)
    if(hex_b < 16){
        hex_b = `0${b3.toString(16)}`
    }
    console.log(`hex_r ${hex_r} hex_g = ${hex_g} hex_b = ${hex_b}`)
    return `#${hex_r}${hex_g}${hex_b}`
}

var middle_color = toColor()
console.log(middle_color)
const fs = require('fs');
var decor = true
if(decor===false) {
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="${dark_color}" d="M35 26c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V6.313C1 4.104 6.791 0 9 0h20.625C32.719 0 35 2.312 35 5.375V26z"/><path fill="#CCD6DD" d="M33 30c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V6c0-4.119-.021-4 5-4h21c2.209 0 4 1.791 4 4v24z"/><path fill="#E1E8ED" d="M31 31c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z"/><path fill="${middle_color}" d="M31 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V10c0-2.209 1.791-4 4-4h21c2.209 0 4 1.791 4 4v22z"/><path fill="${light_color}" d="M29 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V12c0-2.209 1.791-4 4-4h19.335C27.544 8 29 9.456 29 11.665V32z"/><path fill="${dark_color}" d="M6 6C4.312 6 4.269 4.078 5 3.25 5.832 2.309 7.125 2 9.438 2H11V0H8.281C4.312 0 1 2.5 1 5.375V32c0 2.209 1.791 4 4 4h2V6H6z"/></svg>`
}else{
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="${dark_color}" d="M35 26c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V6.313C1 4.104 6.791 0 9 0h20.625C32.719 0 35 2.312 35 5.375V26z"/><path fill="#CCD6DD" d="M33 30c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V6c0-4.119-.021-4 5-4h21c2.209 0 4 1.791 4 4v24z"/><path fill="#E1E8ED" d="M31 31c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z"/><path fill="${middle_color}" d="M31 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V10c0-2.209 1.791-4 4-4h21c2.209 0 4 1.791 4 4v22z"/><path fill="${light_color}" d="M29 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V12c0-2.209 1.791-4 4-4h19.335C27.544 8 29 9.456 29 11.665V32z"/><path fill="${dark_color}" d="M6 6C4.312 6 4.269 4.078 5 3.25 5.832 2.309 7.125 2 9.438 2H11V0H8.281C4.312 0 1 2.5 1 5.375V32c0 2.209 1.791 4 4 4h2V6H6z"/><path xmlns="http://www.w3.org/2000/svg" fill="#E1E8ED" d="M25 18c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v2z"/></svg>`
}
fs.writeFile('book.svg', svg, function (err) {
    if (err) return console.log(err);
    console.log('book.svg Completed');
});