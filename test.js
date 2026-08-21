var {
    Calendar,
    FarmingContestUtils
} = require('./calendar');

var calendar = new Calendar();
// Changing the season name
calendar.setSeasonName(3, 'I love Winter')

console.log(`SkyBlock Year: ${calendar.getCurrentYear()}`)
console.log(`SkyBlock Season: ${calendar.getCurrentSeasonName()}`)
console.log(`SkyBlock Day: ${calendar.getCurrentDay()}`)
console.log(`SkyBlock Time: ${calendar.getCurrentHour()}:${calendar.getFlatMinutes()}`)
console.log(`Rain state ${calendar.isRaining()}`)
console.log(`Snow state ${calendar.isSnowing()}`)

testEventId = 29260;
console.log(`Crops for ${testEventId}: ${FarmingContestUtils.getCrops(testEventId)}`) // Cactus, Cocoa Beans, Beetroot
console.log(`Farmionaire crop for ${testEventId}: ${FarmingContestUtils.getFarmionaireCrop(testEventId)}`) // Beetroot
testEventId = 29254;
console.log(`Crops for ${testEventId}: ${FarmingContestUtils.getCrops(testEventId)}`) // Mushroom, Pumpkin, Cocoa Beans
console.log(`Farmionaire crop for ${testEventId}: ${FarmingContestUtils.getFarmionaireCrop(testEventId)}`) // Pumpkin

currentEventId = FarmingContestUtils.getEventId();
console.log(`Crops for ${currentEventId}: ${FarmingContestUtils.getCrops(currentEventId)}`)
console.log(`Farmionaire crop for ${currentEventId}: ${FarmingContestUtils.getFarmionaireCrop(currentEventId)}`) 
