
/*
***************************************************************************
 **************************************************************************
 *********************Favorite Coffee Flavor*******************************
 **************************************************************************
 */
/*
 A survey was taken asking the favorite flavor of a coffee drink a person prefers.
 Responses werere V= Vanilla c_caramel M=Mocha H = hazelnt P = Plain. Construct categorical
 frequency distribution for the data. Which class has teh most data values and which class
 has the fewest?
 */
//variables (classes)

let unsortedString = "VCPPMMPPMCMMVMMMVMMMPVCMVMCPMPMMMPMMCVMCCPMPMHHPHP";
let v = "";
let c = "";
let m = "";
let h = "";
let p = "";
let letter = "";
let checkStringAll = ""

for(i = 0; i <= unsortedString.length; i++){
    letter = unsortedString.substring(i -1, i); // not sure if this works
    checkStringAll += letter;
    switch(letter){
        case "V":
            v += letter
            break;
        case "C":
            c += letter
            break;
        case "M":
            m += letter
            break;
        case "H":
            h += letter
            break;
        case "P":
            p += letter
            break;
        
    }
}
console.log(v);
v = v.length;
console.log(v);
let c = c.length;
let m = m.length;
let h = h.length;
let p = p.length;

    //test cases

    // console.log("v is " + v);
    // console.log(unsortedString + "\n" + checkStringAll);
    // console.log("assortedString and checkStringAll are the same?  ---> " + (unsortedString == checkStringAll));