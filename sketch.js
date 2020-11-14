var ball;

var database, position;

function setup() {
    database = firebase.database()

    // console.log(database)

    createCanvas(500, 500)

    ball = createSprite(250, 250, 30, 30)
    ball.shapeColor = "red"

    ball2 = createSprite(250, 200, 30, 30)
    ball2.shapeColor = "blue"

    var ballPosition = database.ref('ball/position')
    ballPosition.on("value", readPosition)

    var ballPosition2 = database.ref('ball2/position2')
    ballPosition2.on("value", readPosition2)


}

function draw() {
    background(0)

    if (keyDown(UP_ARROW)) {
        writePosition(0, -2)
    }
    if (keyDown(DOWN_ARROW)) {
        writePosition(0, 2)
    }
    if (keyDown(RIGHT_ARROW)) {
        writePosition(2, 0)
    }
    if (keyDown(LEFT_ARROW)) {
        writePosition(-2, 0)
    }

    if (keyDown("W")) {
        writePosition2(0, -2)
    }
    if (keyDown("S")) {
        writePosition2(0, 2)
    }
    if (keyDown("D")) {
        writePosition2(2, 0)
    }
    if (keyDown("A")) {
        writePosition2(-2, 0)
    }


    



    drawSprites()
}

function writePosition(x, y) {
    database.ref("ball/position").set({
        'x': position.x + x,
        'y': position.y + y
    })


}

function readPosition(data) {
    position = data.val();
    ball.x = position.x
    ball.y = position.y

}

function writePosition2(x, y) {
    database.ref("ball2/position2").set({
        'x': position2.x + x,
        'y': position2.y + y
    })


}

function readPosition2(data) {
    position2 = data.val();
    ball2.x = position2.x
    ball2.y = position2.y

}
