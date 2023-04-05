import {Circle} from "./khoangcach2hinhtron";

function khoangCach(circleOne: Circle,circleTwo : Circle, d : number) {
    let khoangCach=Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d,2)
    return Math.sqrt(khoangCach)
}
let circle1= new Circle(9);
let circle2= new Circle(5)
console.log(khoangCach(circle1,circle2,24))