var divider = require("../../services/divider")

describe("divider tests ", function() {
    var _numberA
    var _numberB

    it("should return numberA divided by numberB", function() {
        _numberA = 6
        _numberB = 2
        var result = divider.divide(_numberA, _numberB)

        expect(result).toEqual(3)
    })
})
