(function () {
    // Simple events
    console.log("-------------------------------------------------SIMPLE EVENTS-------------------------------------------------")
    var ll = ["a", "b"]
    emitter.on("add", (a, b, c) => {
        console.log([...ll, a, b, c])
    })
    emitter.on("add", (a, b, c) => {
        console.log(a + b + c)
    })
    emitter.emit("add", 1, 2, 3)
    console.log("\n\n\n\n")

    // Removing one call back
    console.log("----------------------------------------REMOVING ONE CALLBACK----------------------------------------")
    emitter.removeCallback("add", 0)
    emitter.emit("add", 1, 2, 3)
    console.log("\n\n\n\n")

    // Removing one call back
    console.log("----------------------------------------DELETING THE EVENT----------------------------------------")
    emitter.removeEvent("add")
    console.log(emitter.emit("add", 1, 2, 3))
})()