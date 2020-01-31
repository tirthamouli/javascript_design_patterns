class A {
    constructor(name){
        this.name = name
    }
    hello = () => {
        console.log(this)
    }
}

a = new A("Boom")
b = a.hello
console.log(a)
console.log(b)
b()
