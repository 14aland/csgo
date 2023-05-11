controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (myspriteimage == 1) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 3 1 3 2 . . . . . . 
            . . . . . 3 1 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 2 . . . . . . 
            . . . . . 2 1 1 1 2 . . . . . . 
            . . . . . 2 3 1 3 2 . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -200)
    }
    if (myspriteimage == 2) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . 2 1 1 1 2 . . . . . 
            . . . . . . 2 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 200)
    }
    if (myspriteimage == 3) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 3 3 3 3 2 . . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . . . . . 2 2 2 3 3 3 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 0)
    }
    if (myspriteimage == 4) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 3 3 3 2 2 2 . . . . . 
            . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
            . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
            . . . . 2 3 3 3 3 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -200, 0)
    }
    if (myspriteimage == 5) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 2 2 2 . . . 
            . . . . . . . . . 2 3 3 1 2 . . 
            . . . . . . . . 3 1 1 1 3 2 . . 
            . . . . . . . 3 1 1 1 1 3 2 . . 
            . . . . . . . 2 1 1 1 1 2 . . . 
            . . . . . . 2 1 1 1 1 3 . . . . 
            . . . . . . 2 1 1 2 3 . . . . . 
            . . . . . 2 1 2 2 . . . . . . . 
            . . . . . 1 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, -200)
    }
    if (myspriteimage == 6) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            . . 2 1 3 3 2 . . . . . . . . . 
            . . 2 3 1 1 1 3 . . . . . . . . 
            . . 2 3 1 1 1 1 3 . . . . . . . 
            . . . 2 1 1 1 1 2 . . . . . . . 
            . . . . 3 1 1 1 1 2 . . . . . . 
            . . . . . 3 2 1 1 2 . . . . . . 
            . . . . . . . 2 2 1 2 . . . . . 
            . . . . . . . . . 2 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -200, -200)
    }
    if (myspriteimage == 7) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 2 . . . . . . . . . 
            . . . . . 2 1 2 2 . . . . . . . 
            . . . . . . 2 1 1 2 3 . . . . . 
            . . . . . . 2 1 1 1 1 3 . . . . 
            . . . . . . . 2 1 1 1 1 2 . . . 
            . . . . . . . 3 1 1 1 1 3 2 . . 
            . . . . . . . . 3 1 1 1 3 2 . . 
            . . . . . . . . . 2 3 3 1 2 . . 
            . . . . . . . . . . 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 200)
    }
    if (myspriteimage == 8) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 1 . . . . . 
            . . . . . . . 2 2 1 2 . . . . . 
            . . . . . 3 2 1 1 2 . . . . . . 
            . . . . 3 1 1 1 1 2 . . . . . . 
            . . . 2 1 1 1 1 2 . . . . . . . 
            . . 2 3 1 1 1 1 3 . . . . . . . 
            . . 2 3 1 1 1 3 . . . . . . . . 
            . . 2 1 3 3 2 . . . . . . . . . 
            . . . 2 2 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -200, 200)
    }
})
let projectilegone = 0
let myspriteimage = 0
let mySprite: Sprite = null
let projectile2: Sprite = null
projectile2 = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, mySprite, 0, 0)
let enemydead = 0
myspriteimage = 1
mySprite = sprites.create(img`
    . . . . . . . . . f f . . . . . 
    . . . . . . . . . c f . . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . . . f c c f . . . . 
    . . . . . . . . f c c f . . . . 
    . . . . . . c c c b b f . . . . 
    . . . . c c a a a c c f . . . . 
    . . . c a a b b d a a c . . . . 
    . . c a d d b b b d d a c . . . 
    . . c a b b b b b b d a c . . . 
    . . c a b b b b b b b a c . . . 
    . . c a d b b b b b b a c . . . 
    . . c a d b b b b d d a c . . . 
    . . . c a a d b d a a c . . . . 
    . . . . c c a a a c c . . . . . 
    . . . . . . c c c . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let myEnemy = sprites.create(img`
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, sprites.builtin.forestTiles10)
myEnemy.follow(mySprite, 50)
forever(function () {
    scene.cameraFollowSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level3`)
})
forever(function () {
    if (myEnemy.overlapsWith(projectile2)) {
        sprites.destroy(myEnemy)
        enemydead = 1
        sprites.destroy(projectile2)
        projectilegone = 1
    }
    if (enemydead == 1) {
        pause(5000)
        myEnemy = sprites.create(img`
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(myEnemy, sprites.builtin.forestTiles10)
        myEnemy.follow(mySprite, 50)
        enemydead += 1
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        myspriteimage = 1
        mySprite.setImage(img`
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . c f . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . f c c f . . . . 
            . . . . . . . . f c c f . . . . 
            . . . . . . c c c b b f . . . . 
            . . . . c c a a a c c f . . . . 
            . . . c a a b b d a a c . . . . 
            . . c a d d b b b d d a c . . . 
            . . c a b b b b b b d a c . . . 
            . . c a b b b b b b b a c . . . 
            . . c a d b b b b b b a c . . . 
            . . c a d b b b b d d a c . . . 
            . . . c a a d b d a a c . . . . 
            . . . . c c a a a c c . . . . . 
            . . . . . . c c c . . . . . . . 
            `)
    }
    if (controller.down.isPressed()) {
        myspriteimage = 2
        mySprite.setImage(img`
            . . . . . . . c c c . . . . . . 
            . . . . . c c a a a c c . . . . 
            . . . . c a a d b d a a c . . . 
            . . . c a d d b b b b d a c . . 
            . . . c a b b b b b b d a c . . 
            . . . c a b b b b b b b a c . . 
            . . . c a d b b b b b b a c . . 
            . . . c a d d b b b d d a c . . 
            . . . . c a a d b b a a c . . . 
            . . . . f c c a a a c c . . . . 
            . . . . f b b c c c . . . . . . 
            . . . . f c c f . . . . . . . . 
            . . . . f c c f . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . f c . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            `)
    }
    if (controller.right.isPressed()) {
        myspriteimage = 3
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c c c c . . . . . . . . 
            . . c a a a a a c f f f f . . . 
            . c a d b b d d a c b c c f f f 
            . c a d b b b d a c b c c f c f 
            c a d b b b b b d a c f f . . . 
            c a b b b b b b b a c . . . . . 
            c a d b b b b b b a c . . . . . 
            . c a b b b b d a c . . . . . . 
            . c a d d b b d a c . . . . . . 
            . . c a a a a a c . . . . . . . 
            . . . c c c c c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (controller.left.isPressed()) {
        myspriteimage = 4
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . . c a a a a a c . . 
            . . . . . . c a d b b d d a c . 
            . . . . . . c a d b b b b a c . 
            . . . . . c a b b b b b b d a c 
            . . . . . c a b b b b b b b a c 
            . . . f f c a d b b b b b d a c 
            f c f c c b c a d b b b d a c . 
            f f f c c b c a d d b b d a c . 
            . . . f f f f c a a a a a c . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (controller.up.isPressed() && controller.right.isPressed()) {
        myspriteimage = 5
        mySprite.setImage(img`
            . . . . . . . . . . . . . f . . 
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . f f f . . 
            . . . . . . . . . f f c f . . . 
            . . . . . . . . f c c f . . . . 
            . . . . c c c c d c c f . . . . 
            . . c c a a a c c d f . . . . . 
            . c a a d b b a a c . . . . . . 
            c a d d b b b d d a c . . . . . 
            c a d b b b b b b a c . . . . . 
            c a b b b b b b b a c . . . . . 
            c a b b b b b b d a c . . . . . 
            c a d d b b b b d a c . . . . . 
            . c a a d b d a a c . . . . . . 
            . . c c a a a c c . . . . . . . 
            . . . . c c c . . . . . . . . . 
            `)
    }
    if (controller.up.isPressed() && controller.left.isPressed()) {
        myspriteimage = 6
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            f f f . . . . . . . . . . . . . 
            . f f f . . . . . . . . . . . . 
            . . f c f f . . . . . . . . . . 
            . . . f c c f . c c c c c . . . 
            . . . f c c d c a a a a a c . . 
            . . . . f d c a d b b d d a c . 
            . . . . . c c a d b b b b a c . 
            . . . . . c a b b b b b b d a c 
            . . . . . c a b b b b b b b a c 
            . . . . . c a d b b b b b d a c 
            . . . . . . c a d b b b d a c . 
            . . . . . . c a d d b b d a c . 
            . . . . . . . c a a a a a c . . 
            . . . . . . . . c c c c c . . . 
            `)
    }
    if (controller.down.isPressed() && controller.right.isPressed()) {
        myspriteimage = 7
        mySprite.setImage(img`
            . . . c c c c c . . . . . . . . 
            . . c a a a a a c . . . . . . . 
            . c a d b b d d a c . . . . . . 
            . c a d b b b d a c . . . . . . 
            c a d b b b b b d a c . . . . . 
            c a b b b b b b b a c . . . . . 
            c a d b b b b b b a c . . . . . 
            . c a b b b b d a c c . . . . . 
            . c a d d b b d a c d f . . . . 
            . . c a a a a a c d c c f . . . 
            . . . c c c c c . f c c f . . . 
            . . . . . . . . . . f f c f . . 
            . . . . . . . . . . . . f f f . 
            . . . . . . . . . . . . . f f f 
            . . . . . . . . . . . . . . f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (controller.down.isPressed() && controller.left.isPressed()) {
        myspriteimage = 8
        mySprite.setImage(img`
            . . . . . . . . . c c c . . . . 
            . . . . . . . c c a a a c c . . 
            . . . . . . c a a d b d a a c . 
            . . . . . c a d b b b b d d a c 
            . . . . . c a d b b b b b b a c 
            . . . . . c a b b b b b b b a c 
            . . . . . c a b b b b b b d a c 
            . . . . . c a d d b b b d d a c 
            . . . . . . c a a b b d a a c . 
            . . . . . f d c c a a a c c . . 
            . . . . f c c d c c c c . . . . 
            . . . . f c c f . . . . . . . . 
            . . . f c f f . . . . . . . . . 
            . . f f f . . . . . . . . . . . 
            . f f f . . . . . . . . . . . . 
            . . f . . . . . . . . . . . . . 
            `)
    }
})
