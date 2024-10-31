input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Fabulous)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . . #
        . # . . #
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
})
basic.showIcon(IconNames.Heart)
wuKong.setLightMode(wuKong.LightMode.BREATH)
wuKong.lightIntensity(100)
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_inch, DigitalPin.P8) < 5) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    } else {
    	
    }
})
