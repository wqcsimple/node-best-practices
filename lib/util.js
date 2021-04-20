/**
 * Created by whis on 11/8/16.
 */

function get(obj, key) {
    return key.split('.').reduce(function (o, x) {
        return (typeof o === 'undefined' || o === null) ? o : o[x]
    }, obj)
}

function calculateDistance(lon1, lat1, lon2, lat2)
{
    if (typeof(Number.prototype.toRadians) === "undefined") {
        Number.prototype.toRadians = function() {
            return this * Math.PI / 180;
        }
    }
    var R = 6371000; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}

var Util = {
    calculateDistance: calculateDistance,
    date: require('locutus/php/datetime/date'),
    get: get
};

module.exports = Util;
