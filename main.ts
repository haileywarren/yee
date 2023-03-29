input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(247, music.beat(BeatFraction.Half))
})
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
