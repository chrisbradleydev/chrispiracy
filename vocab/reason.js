const randomStringFromArray = require('../utils/randomStringFromArray')

const agendaArray = ['agenda', 'plan', 'program']
const bankArray = ['bank account', 'pocketbook', 'wallet']
const concealArray = ['conceal', 'hide', 'obfuscate']
const confuseArray = ['confuse', 'mislead', 'propagandize']
const conquestArray = ['conquest', 'subjugation', 'takeover']
const disinformationArray = ['disinformation', 'lies', 'propaganda']
const dominationArray = ['domination', 'supremacy', 'tyranny']
const emotionArray = ['fear', 'hate', 'love']
const evilArray = ['just to mess with', 'to enslave', 'to mind control']
const genocideArray = ['genocide', 'murder', 'slaughter']
const peopleArray = ['people', 'population', 'public']
const popularizeArray = ['popularize', 'promote', 'spread']
const realityArray = ['reality', 'the real world', 'the truth']

const reason = [
  `${randomStringFromArray(evilArray)} the ${randomStringFromArray(peopleArray)}`,
  `because [he's,she's,they're] that damn evil`,
  `because [he,she,they] [is,are] in bed with [country]`,
  `because [he,she,they] [is,are] in bed with [who]`,
  `because [he,she,they] done lost [his,her,their] damn mind`,
  `because you can't handle ${randomStringFromArray(realityArray)}`,
  `for galactic ${randomStringFromArray(conquestArray)}`,
  `for no reason at all`,
  `for world ${randomStringFromArray(dominationArray)}`,
  `out of ${randomStringFromArray(emotionArray)}`,
  `to ${randomStringFromArray(concealArray)} the existence of [group-unknown]`,
  `to ${randomStringFromArray(confuseArray)} the [population] ${randomStringFromArray(peopleArray)}`,
  `to ${randomStringFromArray(genocideArray)} the [population] ${randomStringFromArray(peopleArray)}`,
  `to ${randomStringFromArray(popularizeArray)} ${randomStringFromArray(disinformationArray)}`,
  `to ${randomStringFromArray(popularizeArray)} fake news`,
  `to further the climate change ${randomStringFromArray(agendaArray)}`,
  `to further the communist ${randomStringFromArray(agendaArray)}`,
  `to pad [his,her,their] ${randomStringFromArray(bankArray)}`,
]

module.exports = reason
