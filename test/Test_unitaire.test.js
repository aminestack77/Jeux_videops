import { describe, expect, test } from "vitest";
import { mapLinear, randFloatSpread, lerp } from "../src/math";

describe ('randFloatSpread',() => {
test ('test si le randfloatspread egale ou inferieru à 1', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1)
})
})

describe ('randFloatSpreadneg',() => {
test ('test si le randfloatspread egale ou superieur à -1', () => {
    expect(randFloatSpread(-1)).toBeGreaterThanOrEqual(-1)
})
})
describe ('mapLinear3',()=>{
test ('test si le map linear vaut 3 ', () => {
    expect(mapLinear(1,2,3,4,5)).toBe(3)
    })
})

describe ('mapLineardecimal',()=>{
test ('test si le map linear return 0.88', () =>{
    expect (mapLinear(1,20,3,40,5)).toBeCloseTo(0.882352941176471)
    })
})


describe ('Lerp ',()=>{
test ('test si le Lerp return 41', () =>{
    expect (lerp(1,3,20)).toBe(45)
    })
})

describe ('Lerp_neg',()=>{
test ('test si le Lerp return -15.3', () =>{
    expect (lerp(1.3,-7,2)).toBeCloseTo(-15.3)
    })
})