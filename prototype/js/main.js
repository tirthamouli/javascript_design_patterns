(function () {
    /**
     * Constuctor function - creates a new animal
     * @param {String} name 
     */
    function Animal(name) {
        this.name = name
    }
    Animal.prototype.move = function () {
        console.log(this.name, "is moving")
    }

    /**
     * Cat extends animal
     * @param {String} name 
     * @param {String} breed 
     */
    function Cat(name, color) {
        Animal.apply(this, [name])
        this.color = color
    }
    Cat.prototype = Object.create(Animal.prototype) // This is the what inherits
    Cat.prototype.speak = function () {
        console.log(this.name, "says meow")
    }

    // Animal object
    console.log("-----------------------ANIMAL-----------------------")
    var grumpy = new Animal("Grumpy")
    console.log(grumpy)
    grumpy.move()

    // Cat object
    console.log("-------------------------CAT-------------------------")
    var butterFingers = new Cat("Butter Fingers", "orange")
    console.log(butterFingers)
    butterFingers.move()
    butterFingers.speak()
})()