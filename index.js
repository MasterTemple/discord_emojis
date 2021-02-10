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

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

var middle_color = toColor()
console.log(middle_color)
const fs = require('fs');
var decor = true
var outer_bookmark = false
var inner_bookmark = false

var decor_path = `<path xmlns="http://www.w3.org/2000/svg" fill="#E1E8ED" d="M25 18c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v2z"/>`
var outer_bookmark_path = `<g xmlns="http://www.w3.org/2000/svg" fill="#DD2E44"><path d="M17 4v23l4-6 4 6V4z"/><path d="M25 28c-.328 0-.644-.162-.832-.445L21 22.803l-3.168 4.752c-.245.367-.701.531-1.122.402-.421-.128-.71-.517-.71-.957V4c0-.552.448-1 1-1h8c.553 0 1 .448 1 1v23c0 .44-.288.829-.71.957-.096.029-.193.043-.29.043zm-4-8c.334 0 .646.167.832.445L24 23.697V5h-6v18.697l2.168-3.252c.186-.278.498-.445.832-.445z"/></g>`
var inner_bookmark_path = `<path xmlns="http://www.w3.org/2000/svg" fill="#DD2E44" d="M33 19s-8.056-.002-8.084 0c-.291 0-.91.139-1.255.485l-2.328 2.342c-.643.647-.643 1.695 0 2.344l2.328 2.342c.345.346.964.487 1.255.487.028.002 8.084 0 8.084 0 1.104 0 2-.897 2-2.001V21c0-1.104-.896-2-2-2z"/>`
var front_of_book = `<path fill="${middle_color}" d="M31 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V10c0-2.209 1.791-4 4-4h21c2.209 0 4 1.791 4 4v22z"/><path fill="${light_color}" d="M29 32c0 2.209-1.791 4-4 4H6c-2.209 0-4-1.791-4-4V12c0-2.209 1.791-4 4-4h19.335C27.544 8 29 9.456 29 11.665V32z"/><path fill="${dark_color}" d="M6 6C4.312 6 4.269 4.078 5 3.25 5.832 2.309 7.125 2 9.438 2H11V0H8.281C4.312 0 1 2.5 1 5.375V32c0 2.209 1.791 4 4 4h2V6H6z"/>`
var back_of_book = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="${dark_color}" d="M35 26c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V6.313C1 4.104 6.791 0 9 0h20.625C32.719 0 35 2.312 35 5.375V26z"/><path fill="#CCD6DD" d="M33 30c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V6c0-4.119-.021-4 5-4h21c2.209 0 4 1.791 4 4v24z"/><path fill="#E1E8ED" d="M31 31c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z"/>`
var svg = back_of_book+front_of_book

if(decor) {
    svg = `${svg}${decor_path}`
}
if(outer_bookmark){
    svg = `${svg}${outer_bookmark_path}`
}
if(inner_bookmark){
    svg = svg.splice(back_of_book.length,0, inner_bookmark_path)
}

svg = `${svg}</svg>`
fs.writeFile('book.svg', svg, function (err) {
    if (err) return console.log(err);
    console.log('book.svg Completed');
});