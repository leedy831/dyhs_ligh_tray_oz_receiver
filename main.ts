radio.onReceivedNumber(function (receivedNumber) {
    received_number = receivedNumber
    if (received_number == 1) {
        doBlue()
    } else if (received_number == -1) {
        doORANGE()
    } else if (received_number == 0) {
        doWhite()
    } else {
    	
    }
})
function doORANGE () {
    strip_1 = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
    strip_1.setBrightness(100)
    strip_1.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip_2 = neopixel.create(DigitalPin.P14, 22, NeoPixelMode.RGB)
    strip_2.setBrightness(100)
    strip_2.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip_3 = neopixel.create(DigitalPin.P15, 22, NeoPixelMode.RGB)
    strip_3.setBrightness(100)
    strip_3.showColor(neopixel.colors(NeoPixelColors.Orange))
}
function doWhite () {
    strip_1 = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
    strip_1.setBrightness(100)
    strip_1.showColor(neopixel.colors(NeoPixelColors.White))
    strip_2 = neopixel.create(DigitalPin.P14, 22, NeoPixelMode.RGB)
    strip_2.setBrightness(100)
    strip_2.showColor(neopixel.colors(NeoPixelColors.White))
    strip_3 = neopixel.create(DigitalPin.P15, 22, NeoPixelMode.RGB)
    strip_3.setBrightness(100)
    strip_3.showColor(neopixel.colors(NeoPixelColors.White))
}
function doRainbow () {
    strip_1 = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
    strip_1.setBrightness(100)
    strip_1.showRainbow(1, 360)
    strip_2 = neopixel.create(DigitalPin.P14, 22, NeoPixelMode.RGB)
    strip_2.setBrightness(100)
    strip_2.showRainbow(1, 360)
    strip_3 = neopixel.create(DigitalPin.P15, 22, NeoPixelMode.RGB)
    strip_3.setBrightness(100)
    strip_3.showRainbow(1, 360)
}
function doBlue () {
    strip_1 = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
    strip_1.setBrightness(100)
    strip_1.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip_2 = neopixel.create(DigitalPin.P14, 22, NeoPixelMode.RGB)
    strip_2.setBrightness(100)
    strip_2.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip_3 = neopixel.create(DigitalPin.P15, 22, NeoPixelMode.RGB)
    strip_3.setBrightness(100)
    strip_3.showColor(neopixel.colors(NeoPixelColors.Blue))
}
let strip_3: neopixel.Strip = null
let strip_2: neopixel.Strip = null
let strip_1: neopixel.Strip = null
let received_number = 0
radio.setGroup(33)
doRainbow()
basic.forever(function () {
	
})
