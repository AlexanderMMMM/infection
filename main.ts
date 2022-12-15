namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const GUI = SpriteKind.create()
    export const plr1 = SpriteKind.create()
    export const plr2 = SpriteKind.create()
    export const plr3 = SpriteKind.create()
    export const plr4 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Stamina = StatusBarKind.create()
    export const Status = StatusBarKind.create()
}
controller.player4.onEvent(ControllerEvent.Connected, function () {
    plr4Connected = 1
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player3Sprite == 0) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 1) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f e e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f e e e e e e e f e f 
                f f f e e e e f f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                . 4 f b b b b b f e 4 e 
                . 4 f d d d d d e d d 4 
                . e f f f f f f e e 4 . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f f e e e e e f e f 
                f f f f f e e e e f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 e f b b b b b f 4 . 
                4 d d e d d d d d f 4 . 
                . 4 e e f f f f f f e . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 2) {
            animation.runImageAnimation(
            player3,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c f f . 
                . f f c c c c c c c c f f . 
                . f f c c c c c c f f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . . e f f f f f f f f 4 e . 
                . . 4 f 3 3 3 3 3 e d d 4 . 
                . . e f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f f c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f f c c c c c c f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f e . . 
                . 4 d d e 3 3 3 3 3 f 4 . . 
                . . 4 e e f f f f f f e . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 3) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        if (stopPlr2Select == 1) {
            plr2Check.destroy()
            stopPlr2Select = 0
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player2Sprite == 0) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 1) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                f f 4 d 4 d d d d f . . 
                . f f f 4 d d b b f . . 
                . 4 d d e 4 4 4 e f . . 
                . e d d e 1 1 1 1 f . . 
                . f e e f 6 6 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                . f 4 d 4 d d d d f . . 
                . f f f e e d b b f . . 
                . . f 4 d d e 4 e f . . 
                . . f e d d e 1 1 f . . 
                . f f f e e f 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 2) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . f f 4 d 4 1 f d d c f . . 
                . . f f f 4 d d d d f . . . 
                . . 4 d d e 4 4 4 e f . . . 
                . . e d d e 3 3 3 3 f . . . 
                . . f e e f 6 6 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f e e d d d f . . . 
                . . . f 4 d d e 4 e f . . . 
                . . . f e d d e 3 3 f . . . 
                . . f f f e e f 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 3) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        if (stopPlr4Select == 1) {
            plr4Check.destroy()
            stopPlr4Select = 0
        }
    }
})
info.onCountdownEnd(function () {
    repeated = 1
    mainGameManager()
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player3Sprite == 0) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 1) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 2) {
            animation.runImageAnimation(
            player3,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d 4 e f e . 
                . f e f f b b b e d d 4 e . 
                . e 4 f b 3 3 3 e d d e . . 
                . . . f 6 6 6 6 f e e . . . 
                . . . f f f f f f f . . . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . e f e 4 d d d d d f f . . 
                . e 4 d d e b b b f f e f . 
                . . e d d e 3 3 b e f 4 e . 
                . . . e e f 6 6 6 6 f . . . 
                . . . . f f f f f f f . . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 3) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player4Sprite == 0) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 1) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 2) {
            animation.runImageAnimation(
            player4,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d 4 e f e . 
                . f e f f b b b e d d 4 e . 
                . e 4 f b 3 3 3 e d d e . . 
                . . . f 6 6 6 6 f e e . . . 
                . . . f f f f f f f . . . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . e f e 4 d d d d d f f . . 
                . e 4 d d e b b b f f e f . 
                . . e d d e 3 3 b e f 4 e . 
                . . . e e f 6 6 6 6 f . . . 
                . . . . f f f f f f f . . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 3) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        if (stopPlr3Select == 1) {
            plr3Check.destroy()
            stopPlr3Select = 0
        }
    }
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player4Sprite == 0) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 1) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f . 
                . . f b b d e e f f f . 
                . . f e 4 e d d 4 f . . 
                . . f 1 1 e d d e f . . 
                . f f 6 6 f e e f f f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f f 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e d d 4 . 
                . . f 1 1 1 1 e d d e . 
                . f f 6 6 6 6 f e e f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 2) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d e e f f f . . 
                . . . f e 4 e d d 4 f . . . 
                . . . f 3 3 e d d e f . . . 
                . . f f 6 6 f e e f f f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f c d d f 1 4 d 4 f f . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e d d 4 . . 
                . . . f 3 3 3 3 e d d e . . 
                . . f f 6 6 6 6 f e e f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 3) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            200,
            true
            )
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        if (stopPlr1Select == 1) {
            plr1Check.destroy()
            stopPlr1Select = 0
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        plr2Check = sprites.create(assets.image`Player 2 Check`, SpriteKind.GUI)
        plr2Check.setPosition(65, 70)
        stopPlr2Select = 1
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        plr3Check = sprites.create(assets.image`Player 3 Check`, SpriteKind.GUI)
        plr3Check.setPosition(105, 70)
        stopPlr3Select = 1
    }
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player3Sprite == 0) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 1) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                f f 4 d 4 d d d d f . . 
                . f f f 4 d d b b f . . 
                . 4 d d e 4 4 4 e f . . 
                . e d d e 1 1 1 1 f . . 
                . f e e f 6 6 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                . f 4 d 4 d d d d f . . 
                . f f f e e d b b f . . 
                . . f 4 d d e 4 e f . . 
                . . f e d d e 1 1 f . . 
                . f f f e e f 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 2) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . f f 4 d 4 1 f d d c f . . 
                . . f f f 4 d d d d f . . . 
                . . 4 d d e 4 4 4 e f . . . 
                . . e d d e 3 3 3 3 f . . . 
                . . f e e f 6 6 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f e e d d d f . . . 
                . . . f 4 d d e 4 e f . . . 
                . . . f e d d e 3 3 f . . . 
                . . f f f e e f 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 3) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player3Sprite == 0) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 1) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f . 
                . . f b b d e e f f f . 
                . . f e 4 e d d 4 f . . 
                . . f 1 1 e d d e f . . 
                . f f 6 6 f e e f f f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f f 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e d d 4 . 
                . . f 1 1 1 1 e d d e . 
                . f f 6 6 6 6 f e e f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 2) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d e e f f f . . 
                . . . f e 4 e d d 4 f . . . 
                . . . f 3 3 e d d e f . . . 
                . . f f 6 6 f e e f f f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f c d d f 1 4 d 4 f f . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e d d 4 . . 
                . . . f 3 3 3 3 e d d e . . 
                . . f f 6 6 6 6 f e e f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `],
            200,
            true
            )
        } else if (player3Sprite == 3) {
            animation.runImageAnimation(
            player3,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            200,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (sprite == player1) {
    	
    }
    if (sprite == player2) {
    	
    }
    if (sprite == player3) {
    	
    }
    if (sprite == player4) {
    	
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (menu == 2) {
        plr4Check = sprites.create(assets.image`Player 4 Check`, SpriteKind.GUI)
        plr4Check.setPosition(145, 70)
        stopPlr4Select = 1
    }
})
// up, up, down, down, left, right, left, right, B, A
controller.combos.attachSpecialCode(function () {
    while (true) {
        game.showLongText("Why you do it :(, game will crash", DialogLayout.Full)
        specialComboCrash = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Player)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player2Sprite == 0) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 1) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f . 
                . . f b b d e e f f f . 
                . . f e 4 e d d 4 f . . 
                . . f 1 1 e d d e f . . 
                . f f 6 6 f e e f f f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f f 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e d d 4 . 
                . . f 1 1 1 1 e d d e . 
                . f f 6 6 6 6 f e e f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 2) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d e e f f f . . 
                . . . f e 4 e d d 4 f . . . 
                . . . f 3 3 e d d e f . . . 
                . . f f 6 6 f e e f f f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f c d d f 1 4 d 4 f f . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e d d 4 . . 
                . . . f 3 3 3 3 e d d e . . 
                . . f f 6 6 6 6 f e e f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 3) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            200,
            true
            )
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player1Sprite == 0) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 1) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . f f f f f . . . . 
                . . f e e e e e f f . . 
                . f e e e e e e e f f . 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                f f e 4 4 f f 4 e 4 f f 
                . f f d d d d 4 d 4 f . 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e e f . . 
                . . f 1 1 1 e d d 4 . . 
                . . f 1 1 1 e d d e . . 
                . . f 6 6 6 f e e f . . 
                . . . f f f f f f . . . 
                . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f . 
                . . f b b d e e f f f . 
                . . f e 4 e d d 4 f . . 
                . . f 1 1 e d d e f . . 
                . f f 6 6 f e e f f f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . . f e e e e e f f f . 
                . f e e e e e e e f f f 
                f e e e e e e e f f f f 
                f e e 4 e e e f f f f f 
                f e e 4 4 e e e f f f f 
                f f e 4 4 4 4 4 f f f f 
                . f e 4 4 f f 4 e 4 f f 
                . . f d d d d 4 d 4 f f 
                . . f b b d d 4 f f f . 
                . . f e 4 4 4 e d d 4 . 
                . . f 1 1 1 1 e d d e . 
                . f f 6 6 6 6 f e e f . 
                . f f f f f f f f f f . 
                . . f f f . . . f f . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 2) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d e e f f f . . 
                . . . f e 4 e d d 4 f . . . 
                . . . f 3 3 e d d e f . . . 
                . . f f 6 6 f e e f f f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f c d d f 1 4 d 4 f f . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e d d 4 . . 
                . . . f 3 3 3 3 e d d e . . 
                . . f f 6 6 6 6 f e e f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 3) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            200,
            true
            )
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player1Sprite == 0) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 1) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f e e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f e e e e e e e f e f 
                f f f e e e e f f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                . 4 f b b b b b f e 4 e 
                . 4 f d d d d d e d d 4 
                . e f f f f f f e e 4 . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f f e e e e e f e f 
                f f f f f e e e e f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 e f b b b b b f 4 . 
                4 d d e d d d d d f 4 . 
                . 4 e e f f f f f f e . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 2) {
            animation.runImageAnimation(
            player1,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c f f . 
                . f f c c c c c c c c f f . 
                . f f c c c c c c f f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . . e f f f f f f f f 4 e . 
                . . 4 f 3 3 3 3 3 e d d 4 . 
                . . e f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f f c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f f c c c c c c f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f e . . 
                . 4 d d e 3 3 3 3 3 f 4 . . 
                . . 4 e e f f f f f f e . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 3) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            200,
            true
            )
        }
    }
})
function menuHandler () {
    if (menu == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.GUI)
        scene.setBackgroundImage(assets.image`Main Menu Background`)
        title = sprites.create(assets.image`Title`, SpriteKind.GUI)
        title.setPosition(80, 20)
        startingDialogue = textsprite.create("Press A button to start", 0, 15)
        startingDialogue.setPosition(80, 100)
        while (menu == 0) {
            startingDialogue.y += -1
            pause(500)
            startingDialogue.y += 1
            pause(500)
        }
    } else if (menu == 2) {
        startingDialogue.destroy()
        sprites.destroyAllSpritesOfKind(SpriteKind.GUI)
        scene.setBackgroundImage(assets.image`Character Select Background`)
        charSelectDialogue = textsprite.create("Character Select (D-Pad)", 0, 1)
        charSelectDialogue.setPosition(80, 100)
        plr1SelectBorder = sprites.create(assets.image`Player 1 Selection Border`, SpriteKind.GUI)
        plr1SelectBorder.setPosition(20, 60)
        plr2SelectBorder = sprites.create(assets.image`Player 2 Selection Border`, SpriteKind.GUI)
        plr2SelectBorder.setPosition(60, 60)
        plr3SelectBorder = sprites.create(assets.image`Player 3 Selection Border`, SpriteKind.GUI)
        plr3SelectBorder.setPosition(100, 60)
        plr4SelectBorder = sprites.create(assets.image`Player 4 Selection Border`, SpriteKind.GUI)
        plr4SelectBorder.setPosition(140, 60)
        character1Plr1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.plr1)
        character1Plr1.setPosition(20, 60)
        character2Plr2 = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.plr2)
        character2Plr2.setPosition(60, 60)
        character3Plr3 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.plr3)
        character3Plr3.setPosition(100, 60)
        character4Plr4 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.plr4)
        character4Plr4.setPosition(140, 60)
        if (plr2Connected == 0) {
            player2AFlash = textsprite.create("")
            player2AFlash.setIcon(assets.image`Player 2 A Prompt`)
            player2AFlash.setPosition(plr2SelectBorder.x, plr2SelectBorder.y + 19)
            animation.runImageAnimation(
            player2AFlash,
            [img`
                . . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                . . . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                . . . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                . . . 6 7 7 8 8 8 8 8 8 8 7 7 6 . 
                . . . 6 9 7 8 7 7 7 7 7 8 7 9 6 . 
                . . . 6 9 9 7 7 7 7 7 7 7 9 9 6 . 
                . . . 6 6 6 9 9 9 9 9 9 9 6 6 6 . 
                . . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . . . . . . 6 6 6 6 6 6 6 . . . . 
                `,img`
                . . . . 6 6 6 6 6 6 6 . . . . . . 
                . . 6 6 7 7 7 7 7 7 7 6 6 . . . . 
                . 6 6 7 7 7 8 8 8 7 7 7 6 6 . . . 
                . 6 7 7 7 8 8 7 8 8 7 7 7 6 . . . 
                . 6 7 7 8 8 8 8 8 8 8 7 7 6 . . . 
                . 6 9 7 8 7 7 7 7 7 8 7 9 6 . . . 
                . 6 9 9 7 7 7 7 7 7 7 9 9 6 . . . 
                . 6 6 6 9 9 9 9 9 9 9 6 6 6 . . . 
                . . 6 6 6 6 6 6 6 6 6 6 6 . . . . 
                . . . . 6 6 6 6 6 6 6 . . . . . . 
                `],
            300,
            true
            )
        }
        if (plr3Connected == 0) {
            Player3AFlash = textsprite.create("")
            Player3AFlash.setIcon(assets.image`Player 3 A Prompt`)
            Player3AFlash.setPosition(plr3SelectBorder.x, plr3SelectBorder.y + 19)
            animation.runImageAnimation(
            Player3AFlash,
            [img`
                . . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                . . . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                . . . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                . . . 6 7 7 8 8 8 8 8 8 8 7 7 6 . 
                . . . 6 9 7 8 7 7 7 7 7 8 7 9 6 . 
                . . . 6 9 9 7 7 7 7 7 7 7 9 9 6 . 
                . . . 6 6 6 9 9 9 9 9 9 9 6 6 6 . 
                . . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . . . . . . 6 6 6 6 6 6 6 . . . . 
                `,img`
                . . . . 6 6 6 6 6 6 6 . . . . . . 
                . . 6 6 7 7 7 7 7 7 7 6 6 . . . . 
                . 6 6 7 7 7 8 8 8 7 7 7 6 6 . . . 
                . 6 7 7 7 8 8 7 8 8 7 7 7 6 . . . 
                . 6 7 7 8 8 8 8 8 8 8 7 7 6 . . . 
                . 6 9 7 8 7 7 7 7 7 8 7 9 6 . . . 
                . 6 9 9 7 7 7 7 7 7 7 9 9 6 . . . 
                . 6 6 6 9 9 9 9 9 9 9 6 6 6 . . . 
                . . 6 6 6 6 6 6 6 6 6 6 6 . . . . 
                . . . . 6 6 6 6 6 6 6 . . . . . . 
                `],
            300,
            true
            )
        }
        if (plr4Connected == 0) {
            Player4AFlash = textsprite.create("")
            Player4AFlash.setIcon(assets.image`Player 4 A Prompt`)
            Player4AFlash.setPosition(plr4SelectBorder.x, plr4SelectBorder.y + 19)
            animation.runImageAnimation(
            Player4AFlash,
            [img`
                . . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . . 6 6 7 7 7 7 7 7 7 6 6 . . 
                . . . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
                . . . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
                . . . 6 7 7 8 8 8 8 8 8 8 7 7 6 . 
                . . . 6 9 7 8 7 7 7 7 7 8 7 9 6 . 
                . . . 6 9 9 7 7 7 7 7 7 7 9 9 6 . 
                . . . 6 6 6 9 9 9 9 9 9 9 6 6 6 . 
                . . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . . . . . . 6 6 6 6 6 6 6 . . . . 
                `,img`
                . . . . 6 6 6 6 6 6 6 . . . . . . 
                . . 6 6 7 7 7 7 7 7 7 6 6 . . . . 
                . 6 6 7 7 7 8 8 8 7 7 7 6 6 . . . 
                . 6 7 7 7 8 8 7 8 8 7 7 7 6 . . . 
                . 6 7 7 8 8 8 8 8 8 8 7 7 6 . . . 
                . 6 9 7 8 7 7 7 7 7 8 7 9 6 . . . 
                . 6 9 9 7 7 7 7 7 7 7 9 9 6 . . . 
                . 6 6 6 9 9 9 9 9 9 9 6 6 6 . . . 
                . . 6 6 6 6 6 6 6 6 6 6 6 . . . . 
                . . . . 6 6 6 6 6 6 6 . . . . . . 
                `],
            300,
            true
            )
        }
    } else {
    	
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player1Sprite == 0) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 1) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                f f 4 d 4 d d d d f . . 
                . f f f 4 d d b b f . . 
                . 4 d d e 4 4 4 e f . . 
                . e d d e 1 1 1 1 f . . 
                . f e e f 6 6 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                . f 4 d 4 d d d d f . . 
                . f f f e e d b b f . . 
                . . f 4 d d e 4 e f . . 
                . . f e d d e 1 1 f . . 
                . f f f e e f 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 2) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . f f 4 d 4 1 f d d c f . . 
                . . f f f 4 d d d d f . . . 
                . . 4 d d e 4 4 4 e f . . . 
                . . e d d e 3 3 3 3 f . . . 
                . . f e e f 6 6 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f e e d d d f . . . 
                . . . f 4 d d e 4 e f . . . 
                . . . f e d d e 3 3 f . . . 
                . . f f f e e f 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 3) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player4Sprite == 0) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 1) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f e e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f e e e e e e e f e f 
                f f f e e e e f f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                . 4 f b b b b b f e 4 e 
                . 4 f d d d d d e d d 4 
                . e f f f f f f e e 4 . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f f e e e e e f e f 
                f f f f f e e e e f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 e f b b b b b f 4 . 
                4 d d e d d d d d f 4 . 
                . 4 e e f f f f f f e . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 2) {
            animation.runImageAnimation(
            player4,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c f f . 
                . f f c c c c c c c c f f . 
                . f f c c c c c c f f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . . e f f f f f f f f 4 e . 
                . . 4 f 3 3 3 3 3 e d d 4 . 
                . . e f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f f c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f f c c c c c c f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f e . . 
                . 4 d d e 3 3 3 3 3 f 4 . . 
                . . 4 e e f f f f f f e . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 3) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            200,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Speed Boost`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    if (sprite == player1) {
        player1StaminaBar.value = 100
    }
    if (sprite == player2) {
        player2StaminaBar.value = 100
    }
    if (sprite == player3) {
        player3StaminaBar.value = 100
    }
    if (sprite == player4) {
        player4StaminaBar.value = 100
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player2Sprite == 0) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 1) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f e e e e e e f e f 
                f f f f e e e e f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 f b b b b b b f 4 e 
                4 d f d d d d d d c d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f e e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f e e e e e e e f e f 
                f f f e e e e f f f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                . 4 f b b b b b f e 4 e 
                . 4 f d d d d d e d d 4 
                . e f f f f f f e e 4 . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f e e e e e e e f f . 
                f f e f e e e e e e f f 
                f f f e e e e e e e e f 
                f f f f e e e e e f e f 
                f f f f f e e e e f f f 
                f f f f f f f f f f f f 
                f f f f f f f f f f f f 
                . f f f f f f f f f f . 
                . e f f f f f f f f e . 
                e 4 e f b b b b b f 4 . 
                4 d d e d d d d d f 4 . 
                . 4 e e f f f f f f e . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 2) {
            animation.runImageAnimation(
            player2,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c f f . 
                . f f c c c c c c c c f f . 
                . f f c c c c c c f f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . . e f f f f f f f f 4 e . 
                . . 4 f 3 3 3 3 3 e d d 4 . 
                . . e f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f f c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f f c c c c c c f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f e . . 
                . 4 d d e 3 3 3 3 3 f 4 . . 
                . . 4 e e f f f f f f e . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 3) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            200,
            true
            )
        }
    }
})
function mainGameManager () {
    if (repeated == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        player1isInfected = 0
        player2isInfected = 0
        player3isInfected = 0
        player4isInfected = 0
    } else {
        scene.setBackgroundImage(assets.image`Character Selection Background`)
        tiles.setCurrentTilemap(tilemap`Main Game`)
        charSelectDialogue.destroy()
        sprites.destroyAllSpritesOfKind(SpriteKind.plr1)
        sprites.destroyAllSpritesOfKind(SpriteKind.plr2)
        sprites.destroyAllSpritesOfKind(SpriteKind.plr3)
        sprites.destroyAllSpritesOfKind(SpriteKind.plr4)
        sprites.destroyAllSpritesOfKind(SpriteKind.GUI)
        if (plr2Connected == 0) {
            player2AFlash.destroy()
        }
        if (plr3Connected == 0) {
            Player3AFlash.destroy()
        }
        if (plr4Connected == 0) {
            Player4AFlash.destroy()
        }
    }
    randomInfectedPicker = randint(1, plr2Connected + (plr3Connected + plr4Connected) + 1)
    if (plr1Connected == 1) {
        if (player1Sprite == 0) {
            player1 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Player)
        } else if (player1Sprite == 1) {
            player1 = sprites.create(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `, SpriteKind.Player)
        } else if (player1Sprite == 2) {
            player1 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        } else if (player1Sprite == 3) {
            player1 = sprites.create(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        }
        tiles.placeOnTile(player1, tiles.getTileLocation(0, 0))
        scene.cameraFollowSprite(player1)
        controller.moveSprite(player1, 50, 50)
        player1StaminaBar = statusbars.create(20, 4, StatusBarKind.Stamina)
        player1StaminaBar.attachToSprite(player1, 2, 0)
        player1StaminaBar.positionDirection(CollisionDirection.Bottom)
        player1InfectedStatus = statusbars.create(4, 4, StatusBarKind.Status)
        player1InfectedStatus.setLabel("P1")
        player1InfectedStatus.attachToSprite(player1)
        if (randomInfectedPicker == 1) {
            player1isInfected = 1
            game.showLongText("Player 1 has been infected!", DialogLayout.Bottom)
            player1InfectedStatus.setColor(2, 2)
        } else {
            player1InfectedStatus.setColor(7, 7)
        }
    }
    if (plr2Connected == 1) {
        if (player2Sprite == 0) {
            player2 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Player)
        } else if (player2Sprite == 1) {
            player2 = sprites.create(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `, SpriteKind.Player)
        } else if (player2Sprite == 2) {
            player2 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        } else if (player2Sprite == 3) {
            player2 = sprites.create(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        }
        tiles.placeOnTile(player2, tiles.getTileLocation(49, 0))
        controller.player2.moveSprite(player2, 50, 50)
        splitScreen.splitScreenCameraFollow(player2)
        player2StaminaBar = statusbars.create(20, 4, StatusBarKind.Stamina)
        player2StaminaBar.attachToSprite(player2, 2, 0)
        player2StaminaBar.positionDirection(CollisionDirection.Bottom)
        player2InfectedStatus = statusbars.create(4, 4, StatusBarKind.Status)
        player2InfectedStatus.setLabel("P2")
        player2InfectedStatus.attachToSprite(player2)
        if (randomInfectedPicker == 2) {
            player2isInfected = 1
            game.showLongText("Player 2 has been infected!", DialogLayout.Bottom)
            player2InfectedStatus.setColor(2, 2)
        } else {
            player2InfectedStatus.setColor(7, 7)
        }
    }
    if (plr3Connected == 1) {
        if (player3Sprite == 0) {
            player3 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Player)
        } else if (player3Sprite == 1) {
            player3 = sprites.create(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `, SpriteKind.Player)
        } else if (player3Sprite == 2) {
            player3 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        } else if (player3Sprite == 3) {
            player3 = sprites.create(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        }
        tiles.placeOnTile(player3, tiles.getTileLocation(49, 49))
        controller.player3.moveSprite(player3, 50, 50)
        player3StaminaBar = statusbars.create(20, 4, StatusBarKind.Stamina)
        player3StaminaBar.attachToSprite(player3, 2, 0)
        player3StaminaBar.positionDirection(CollisionDirection.Bottom)
        player3InfectedStatus = statusbars.create(4, 4, StatusBarKind.Status)
        player3InfectedStatus.setLabel("P3")
        player3InfectedStatus.attachToSprite(player3)
        if (randomInfectedPicker == 3) {
            player3isInfected = 1
            game.showLongText("Player 3 has been infected!", DialogLayout.Bottom)
            player3InfectedStatus.setColor(2, 2)
        } else {
            player3InfectedStatus.setColor(7, 7)
        }
    }
    if (plr4Connected == 1) {
        if (player4Sprite == 0) {
            player4 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Player)
        } else if (player4Sprite == 1) {
            player4 = sprites.create(img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `, SpriteKind.Player)
        } else if (player4Sprite == 2) {
            player4 = sprites.create(img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        } else if (player4Sprite == 3) {
            player4 = sprites.create(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `, SpriteKind.Player)
        }
        tiles.placeOnTile(player4, tiles.getTileLocation(0, 49))
        controller.player4.moveSprite(player4, 50, 50)
        player4StaminaBar = statusbars.create(20, 4, StatusBarKind.Stamina)
        player4StaminaBar.attachToSprite(player4, 2, 0)
        player4StaminaBar.positionDirection(CollisionDirection.Bottom)
        player4InfectedStatus = statusbars.create(4, 4, StatusBarKind.Status)
        player4InfectedStatus.setLabel("P4")
        player4InfectedStatus.attachToSprite(player4)
        if (randomInfectedPicker == 4) {
            player4isInfected = 1
            game.showLongText("Player 4 has been infected!", DialogLayout.Bottom)
            player4InfectedStatus.setColor(2, 2)
        } else {
            player4InfectedStatus.setColor(7, 7)
        }
    }
    info.startCountdown(15)
}
controller.player1.onEvent(ControllerEvent.Connected, function () {
    plr1Connected = 1
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    plr2Connected = 1
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player4Sprite == 0) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 1) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                f f 4 d 4 d d d d f . . 
                . f f f 4 d d b b f . . 
                . 4 d d e 4 4 4 e f . . 
                . e d d e 1 1 1 1 f . . 
                . f e e f 6 6 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e e f . . 
                f f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f . 
                . f 4 d 4 d d d d f . . 
                . f f f e e d b b f . . 
                . . f 4 d d e 4 e f . . 
                . . f e d d e 1 1 f . . 
                . f f f e e f 6 6 f f . 
                . f f f f f f f f f f . 
                . . f f . . . f f f . . 
                `,img`
                . . . . f f f f f . . . 
                . . f f e e e e e f . . 
                . f f e e e e e e e f . 
                f f f f e e e e e e e f 
                f f f f f e e e 4 e e f 
                f f f f e e e 4 4 e e f 
                f f f f 4 4 4 4 4 e f f 
                f f 4 e 4 f f 4 4 e f f 
                . f 4 d 4 d d d d f f . 
                . f f f 4 d d b b f . . 
                . . f e e 4 4 4 e f . . 
                . . 4 d d e 1 1 1 f . . 
                . . e d d e 1 1 1 f . . 
                . . f e e f 6 6 6 f . . 
                . . . f f f f f f . . . 
                . . . . f f f . . . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 2) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . f f 4 d 4 1 f d d c f . . 
                . . f f f 4 d d d d f . . . 
                . . 4 d d e 4 4 4 e f . . . 
                . . e d d e 3 3 3 3 f . . . 
                . . f e e f 6 6 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f e e d d d f . . . 
                . . . f 4 d d e 4 e f . . . 
                . . . f e d d e 3 3 f . . . 
                . . f f f e e f 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        } else if (player4Sprite == 3) {
            animation.runImageAnimation(
            player4,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player2Sprite == 0) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 1) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 2) {
            animation.runImageAnimation(
            player2,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d 4 e f e . 
                . f e f f b b b e d d 4 e . 
                . e 4 f b 3 3 3 e d d e . . 
                . . . f 6 6 6 6 f e e . . . 
                . . . f f f f f f f . . . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . e f e 4 d d d d d f f . . 
                . e 4 d d e b b b f f e f . 
                . . e d d e 3 3 b e f 4 e . 
                . . . e e f 6 6 6 6 f . . . 
                . . . . f f f f f f f . . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        } else if (player2Sprite == 3) {
            animation.runImageAnimation(
            player2,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    plr3Connected = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 99) {
        if (player1Sprite == 0) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 1) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 2) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            200,
            true
            )
        } else if (player1Sprite == 3) {
            animation.runImageAnimation(
            player1,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 0) {
        menu = 2
        menuHandler()
    } else if (menu == 2) {
        plr1Check = sprites.create(assets.image`Player 1 Check`, SpriteKind.GUI)
        plr1Check.setPosition(25, 70)
        stopPlr1Select = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (menu == 99) {
        if (sprite == player1) {
            if (otherSprite == player2 && player2isInfected == 1) {
                player1isInfected = 1
                player1InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player3 && player3isInfected == 1) {
                player1isInfected = 1
                player1InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player4 && player4isInfected == 1) {
                player1isInfected = 1
                player1InfectedStatus.setColor(2, 2)
            }
        }
        if (sprite == player2) {
            if (otherSprite == player1 && player1isInfected == 1) {
                player2isInfected = 1
                player2InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player3 && player3isInfected == 1) {
                player2isInfected = 1
                player2InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player4 && player4isInfected == 1) {
                player2isInfected = 1
                player2InfectedStatus.setColor(2, 2)
            }
        }
        if (sprite == player3) {
            if (otherSprite == player1 && player1isInfected == 1) {
                player3isInfected = 1
                player3InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player2 && player2isInfected == 1) {
                player3isInfected = 1
                player3InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player4 && player4isInfected == 1) {
                player3isInfected = 1
                player3InfectedStatus.setColor(2, 2)
            }
        }
        if (sprite == player4) {
            if (otherSprite == player1 && player1isInfected == 1) {
                player4isInfected = 1
                player4InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player2 && player2isInfected == 1) {
                player4isInfected = 1
                player4InfectedStatus.setColor(2, 2)
            } else if (otherSprite == player3 && player3isInfected == 1) {
                player4isInfected = 1
                player4InfectedStatus.setColor(2, 2)
            }
        }
    }
})
let character3Plr4: Sprite = null
let character2Plr4: Sprite = null
let character1Plr4: Sprite = null
let character4Plr3: Sprite = null
let character2Plr3: Sprite = null
let character1Plr3: Sprite = null
let character4Plr2: Sprite = null
let character3Plr2: Sprite = null
let character1Plr2: Sprite = null
let character4Plr1: Sprite = null
let character3Plr1: Sprite = null
let character2Plr1: Sprite = null
let player4InfectedStatus: StatusBarSprite = null
let player3InfectedStatus: StatusBarSprite = null
let player2InfectedStatus: StatusBarSprite = null
let player1InfectedStatus: StatusBarSprite = null
let plr1Connected = 0
let randomInfectedPicker = 0
let player4isInfected = 0
let player3isInfected = 0
let player2isInfected = 0
let player1isInfected = 0
let player4StaminaBar: StatusBarSprite = null
let player3StaminaBar: StatusBarSprite = null
let player2StaminaBar: StatusBarSprite = null
let player1StaminaBar: StatusBarSprite = null
let Player4AFlash: TextSprite = null
let Player3AFlash: TextSprite = null
let plr3Connected = 0
let player2AFlash: TextSprite = null
let plr2Connected = 0
let character4Plr4: Sprite = null
let character3Plr3: Sprite = null
let character2Plr2: Sprite = null
let character1Plr1: Sprite = null
let plr4SelectBorder: Sprite = null
let plr3SelectBorder: Sprite = null
let plr2SelectBorder: Sprite = null
let plr1SelectBorder: Sprite = null
let charSelectDialogue: TextSprite = null
let startingDialogue: TextSprite = null
let title: Sprite = null
let player1Sprite = 0
let specialComboCrash: Sprite = null
let player1: Sprite = null
let plr1Check: Sprite = null
let stopPlr1Select = 0
let plr3Check: Sprite = null
let stopPlr3Select = 0
let player4: Sprite = null
let player4Sprite = 0
let repeated = 0
let plr4Check: Sprite = null
let stopPlr4Select = 0
let player2: Sprite = null
let player2Sprite = 0
let plr2Check: Sprite = null
let stopPlr2Select = 0
let player3: Sprite = null
let player3Sprite = 0
let menu = 0
let plr4Connected = 0
menuHandler()
forever(function () {
    if (menu == 2) {
        if (stopPlr1Select == 0) {
            if (controller.right.isPressed()) {
                sprites.destroyAllSpritesOfKind(SpriteKind.plr1)
                character1Plr1 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `, SpriteKind.plr1)
                character1Plr1.setPosition(20, 60)
                player1Sprite = 0
            } else if (controller.left.isPressed()) {
                sprites.destroyAllSpritesOfKind(SpriteKind.plr1)
                character2Plr1 = sprites.create(img`
                    . . . . f f f f . . . . 
                    . . f f e e e e f f . . 
                    . f f e e e e e e f f . 
                    f f f f 4 e e e f f f f 
                    f f f 4 4 4 e e f f f f 
                    f f f 4 4 4 4 e e f f f 
                    f 4 e 4 4 4 4 4 4 e 4 f 
                    f 4 4 f f 4 4 f f 4 4 f 
                    f e 4 d d d d d d 4 e f 
                    . f e d d b b d d e f . 
                    . f f e 4 4 4 4 e f f . 
                    e 4 f b 1 1 1 1 b f 4 e 
                    4 d f 1 1 1 1 1 1 f d 4 
                    4 4 f 6 6 6 6 6 6 f 4 4 
                    . . . f f f f f f . . . 
                    . . . f f . . f f . . . 
                    `, SpriteKind.plr1)
                character2Plr1.setPosition(20, 60)
                player1Sprite = 1
            } else if (controller.up.isPressed()) {
                sprites.destroyAllSpritesOfKind(SpriteKind.plr1)
                character3Plr1 = sprites.create(img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c 4 4 c c c c f . 
                    . f f c c 4 4 4 4 c c f f . 
                    . f f f b f 4 4 f b f f f . 
                    . f f 4 1 f d d f 1 4 f f . 
                    . . f f d d d d d d f f . . 
                    . . e f e 4 4 4 4 e f e . . 
                    . e 4 f b 3 3 3 3 b f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `, SpriteKind.plr1)
                character3Plr1.setPosition(20, 60)
                player1Sprite = 2
            } else if (controller.down.isPressed()) {
                sprites.destroyAllSpritesOfKind(SpriteKind.plr1)
                character4Plr1 = sprites.create(img`
                    . . . . f f f f . . . . . 
                    . . f f f f f f f f . . . 
                    . f f f f f f c f f f . . 
                    f f f f f f c c f f f c . 
                    f f f c f f f f f f f c . 
                    c c c f f f e e f f c c . 
                    f f f f f e e f f c c f . 
                    f f f b f e e f b f f f . 
                    . f 4 1 f 4 4 f 1 4 f . . 
                    . f e 4 4 4 4 4 4 e f . . 
                    . f f f e e e e f f f . . 
                    f e f b 7 7 7 7 b f e f . 
                    e 4 f 7 7 7 7 7 7 f 4 e . 
                    e e f 6 6 6 6 6 6 f e e . 
                    . . . f f f f f f . . . . 
                    . . . f f . . f f . . . . 
                    `, SpriteKind.plr1)
                character4Plr1.setPosition(20, 60)
                player1Sprite = 3
            }
        }
        if (plr2Connected == 1) {
            if (stopPlr2Select == 0) {
                if (controller.player2.isPressed(ControllerButton.Right)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr2)
                    character1Plr2 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.plr2)
                    character1Plr2.setPosition(60, 60)
                    player2Sprite = 0
                } else if (controller.player2.isPressed(ControllerButton.Left)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr2)
                    character2Plr2 = sprites.create(img`
                        . . . . f f f f . . . . 
                        . . f f e e e e f f . . 
                        . f f e e e e e e f f . 
                        f f f f 4 e e e f f f f 
                        f f f 4 4 4 e e f f f f 
                        f f f 4 4 4 4 e e f f f 
                        f 4 e 4 4 4 4 4 4 e 4 f 
                        f 4 4 f f 4 4 f f 4 4 f 
                        f e 4 d d d d d d 4 e f 
                        . f e d d b b d d e f . 
                        . f f e 4 4 4 4 e f f . 
                        e 4 f b 1 1 1 1 b f 4 e 
                        4 d f 1 1 1 1 1 1 f d 4 
                        4 4 f 6 6 6 6 6 6 f 4 4 
                        . . . f f f f f f . . . 
                        . . . f f . . f f . . . 
                        `, SpriteKind.plr2)
                    character2Plr2.setPosition(60, 60)
                    player2Sprite = 1
                } else if (controller.player2.isPressed(ControllerButton.Up)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr2)
                    character3Plr2 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.plr2)
                    character3Plr2.setPosition(60, 60)
                    player2Sprite = 2
                } else if (controller.player2.isPressed(ControllerButton.Down)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr2)
                    character4Plr2 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.plr2)
                    character4Plr2.setPosition(60, 60)
                    player2Sprite = 3
                }
            }
        }
        if (plr3Connected == 1) {
            if (stopPlr3Select == 0) {
                if (controller.player3.isPressed(ControllerButton.Right)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr3)
                    character1Plr3 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.plr3)
                    character1Plr3.setPosition(100, 60)
                    player3Sprite = 0
                } else if (controller.player3.isPressed(ControllerButton.Left)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr3)
                    character2Plr3 = sprites.create(img`
                        . . . . f f f f . . . . 
                        . . f f e e e e f f . . 
                        . f f e e e e e e f f . 
                        f f f f 4 e e e f f f f 
                        f f f 4 4 4 e e f f f f 
                        f f f 4 4 4 4 e e f f f 
                        f 4 e 4 4 4 4 4 4 e 4 f 
                        f 4 4 f f 4 4 f f 4 4 f 
                        f e 4 d d d d d d 4 e f 
                        . f e d d b b d d e f . 
                        . f f e 4 4 4 4 e f f . 
                        e 4 f b 1 1 1 1 b f 4 e 
                        4 d f 1 1 1 1 1 1 f d 4 
                        4 4 f 6 6 6 6 6 6 f 4 4 
                        . . . f f f f f f . . . 
                        . . . f f . . f f . . . 
                        `, SpriteKind.plr3)
                    character2Plr3.setPosition(100, 60)
                    player3Sprite = 1
                } else if (controller.player3.isPressed(ControllerButton.Up)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr3)
                    character3Plr3 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.plr3)
                    character3Plr3.setPosition(100, 60)
                    player3Sprite = 2
                } else if (controller.player3.isPressed(ControllerButton.Down)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr3)
                    character4Plr3 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.plr3)
                    character4Plr3.setPosition(100, 60)
                    player3Sprite = 3
                }
            }
        }
        if (plr4Connected == 1) {
            if (stopPlr4Select == 0) {
                if (controller.player4.isPressed(ControllerButton.Right)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr4)
                    character1Plr4 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.plr4)
                    character1Plr4.setPosition(140, 60)
                    player4Sprite = 0
                } else if (controller.player4.isPressed(ControllerButton.Left)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr4)
                    character2Plr4 = sprites.create(img`
                        . . . . f f f f . . . . 
                        . . f f e e e e f f . . 
                        . f f e e e e e e f f . 
                        f f f f 4 e e e f f f f 
                        f f f 4 4 4 e e f f f f 
                        f f f 4 4 4 4 e e f f f 
                        f 4 e 4 4 4 4 4 4 e 4 f 
                        f 4 4 f f 4 4 f f 4 4 f 
                        f e 4 d d d d d d 4 e f 
                        . f e d d b b d d e f . 
                        . f f e 4 4 4 4 e f f . 
                        e 4 f b 1 1 1 1 b f 4 e 
                        4 d f 1 1 1 1 1 1 f d 4 
                        4 4 f 6 6 6 6 6 6 f 4 4 
                        . . . f f f f f f . . . 
                        . . . f f . . f f . . . 
                        `, SpriteKind.plr4)
                    character2Plr4.setPosition(140, 60)
                    player4Sprite = 1
                } else if (controller.player4.isPressed(ControllerButton.Up)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr4)
                    character3Plr4 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.plr4)
                    character3Plr4.setPosition(140, 60)
                    player4Sprite = 2
                } else if (controller.player4.isPressed(ControllerButton.Down)) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.plr4)
                    character4Plr4 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.plr4)
                    character4Plr4.setPosition(140, 60)
                    player4Sprite = 3
                }
            }
        }
        if (plr2Connected == 1) {
            player2AFlash.destroy()
        }
        if (plr3Connected == 1) {
            Player3AFlash.destroy()
        }
        if (plr4Connected == 1) {
            Player4AFlash.destroy()
        }
        if (stopPlr1Select == 1 && plr2Connected == 0 && (plr3Connected == 0 && plr4Connected == 0)) {
            menu = 99
            mainGameManager()
        } else if (stopPlr1Select == 1 && (plr2Connected == 1 && stopPlr2Select == 1) && (plr3Connected == 0 && plr4Connected == 0)) {
            menu = 99
            mainGameManager()
        } else if (stopPlr1Select == 1 && (plr2Connected == 1 && stopPlr2Select == 1) && (stopPlr3Select == 1 && plr3Connected == 1 && plr4Connected == 0)) {
            menu = 99
            mainGameManager()
        } else if (stopPlr1Select == 1 && (plr2Connected == 1 && stopPlr2Select == 1) && (stopPlr3Select == 1 && plr3Connected == 1 && (stopPlr4Select == 1 && plr4Connected == 1))) {
            menu = 99
            mainGameManager()
        }
    }
    if (menu == 99) {
        if (controller.B.isPressed()) {
            if (player1StaminaBar.value > 0) {
                player1StaminaBar.value += -0.5
                player1.x += controller.dx(50)
                player1.y += controller.dy(50)
            }
        }
        if (stopPlr1Select == 1 && (plr2Connected == 1 && stopPlr2Select == 1) && (plr3Connected == 0 && plr4Connected == 0)) {
            if (controller.player2.isPressed(ControllerButton.B)) {
                if (player2StaminaBar.value > 0) {
                    player2StaminaBar.value += -0.5
                    player2.x += controller.player2.dx(50)
                    player2.y += controller.player2.dy(50)
                }
            }
        }
        if (stopPlr1Select == 1 && (plr2Connected == 1 && stopPlr2Select == 1) && (stopPlr3Select == 1 && plr3Connected == 1 && plr4Connected == 0)) {
            if (controller.player3.isPressed(ControllerButton.B)) {
                if (player3StaminaBar.value > 0) {
                    player3StaminaBar.value += -0.5
                    player3.x += controller.player3.dx(50)
                    player3.y += controller.player3.dy(50)
                }
            }
        }
        if (stopPlr1Select == 1 && (plr2Connected == 1 && stopPlr2Select == 1) && (stopPlr3Select == 1 && plr3Connected == 1 && (stopPlr4Select == 1 && plr4Connected == 1))) {
            if (controller.player4.isPressed(ControllerButton.B)) {
                if (player4StaminaBar.value > 0) {
                    player4StaminaBar.value += -0.5
                    player4.x += controller.player4.dx(50)
                    player4.y += controller.player4.dy(50)
                }
            }
        }
    }
})
