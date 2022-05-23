var {
    Calendar,
    SEASON_WINTER,
    SEASON_LENGTH,
    FarmingContestUtils
} = require('./calendar');

var calendar = new Calendar();
console.log(`SkyBlock Year: ${calendar.getCurrentYear()}`)
console.log(`SkyBlock Season: ${calendar.getCurrentSeasonName()}`)
console.log(`SkyBlock Day: ${calendar.getCurrentDay()}`)
console.log(`SkyBlock Time: ${calendar.getCurrentHour()}:${calendar.getFlatMinutes()}`)

testEventId = 29260;
console.log(`Crops for ${testEventId}: ${FarmingContestUtils.getCrops(testEventId)}`) // Cactus, Cocoa Beans, Beetroot
testEventId = 29254;
console.log(`Crops for ${testEventId}: ${FarmingContestUtils.getCrops(testEventId)}`) // Mushroom, Pumpkin, Cocoa Beans