# calendarjs
A calendar library for CraftersMC SkyBlock

```javascript
var {Calendar} = require('/path/to/calendarjs/calendar');

var calendar = new Calendar();
// Changing the season name
calendar.setSeasonName(3, 'I love Winter')

console.log(`SkyBlock Year: ${calendar.getCurrentYear()}`)
console.log(`SkyBlock Season: ${calendar.getCurrentSeasonName()}`)
console.log(`SkyBlock Day: ${calendar.getCurrentDay()}`)
console.log(`SkyBlock Time: ${calendar.getCurrentHour()}:${calendar.getFlatMinutes()}`)
console.log(`Rain state ${calendar.isRaining()}`)
console.log(`Snow state ${calendar.isSnowing()}`)
```
