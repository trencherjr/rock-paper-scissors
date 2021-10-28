radio.onReceivedNumber(function (receivedNumber) {
    other = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    _var = _var + 1
    if (_var > 2) {
        _var = 0
    }
    if (_var == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (_var == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (_var == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(_var)
    ready = 1
})
let other = 0
let ready = 0
let _var = 0
_var = 0
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
ready = 0
radio.setGroup(1)
basic.forever(function () {
	
})
