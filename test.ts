//animal
interface Dog {
    name: string
    age: number
}

const animal: Dog = {
    name: 'Dog',
    age: 10
}

//Multiply
interface Pair {
    a: number
    b: number
}

const multiply = (nums: Pair) => {
    return nums.a * nums.b
}

multiply({ a:1, b:5})