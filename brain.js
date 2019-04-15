const { action, country, instrument, reason, victim, who } = require('./vocab')
const randomStringFromArray = require('./utils/randomStringFromArray')

const randomObjectFromArray = (arr, key) => {
  const val = randomStringFromArray(arr.map(obj => obj[key]))
  const scopedArr = arr.filter(obj => obj[key] === val)
  return scopedArr[0]
}

const keyIncludes = (arr, val) => {
  let list = arr.map(obj => obj.key.includes(val) && obj.name)
  return list.filter(Boolean)
}

const lowerThe = string => {
  return string.replace(/^The\s/, `the `)
}

const actionVictimKeys = [`event`, `group`, `thing`]
const randomActionVictimKey = randomStringFromArray(actionVictimKeys)
const filteredAction = keyIncludes(action, randomActionVictimKey)
const filteredVictim = keyIncludes(victim, randomActionVictimKey)

const say = () => {
  const whoDoneIt = randomObjectFromArray(who, 'name')

  let filteredWhoArray = who.filter(obj => obj.name !== whoDoneIt.name)

  const whoHelped = randomObjectFromArray(filteredWhoArray, 'name')
  filteredWhoArray = filteredWhoArray.filter(obj => obj.name !== whoHelped.name)

  const whoElse = randomObjectFromArray(filteredWhoArray, 'name')
  filteredWhoArray = filteredWhoArray.filter(obj => obj.name !== whoElse.name)

  let groupUnknownArray = filteredWhoArray.filter(obj => obj.type === 'group-unknown')

  const groupUnknown = randomObjectFromArray(groupUnknownArray, 'name')
  filteredWhoArray = filteredWhoArray.filter(obj => obj.name !== groupUnknown.name)
  groupUnknownArray = groupUnknownArray.filter(obj => obj.name !== groupUnknown.name)

  const isGroup = whoDoneIt.type === `group-known` || whoDoneIt.type === `group-unknown`
  const isMan = whoDoneIt.type === `man`
  const whoModifier1 = isGroup ? `they` : isMan ? `he` : `she`
  const whoModifier2 = isGroup ? `their` : isMan ? `his` : `her`
  const whoModifier3 = isGroup ? `they're` : isMan ? `he's` : `she's`

  const action = randomStringFromArray(filteredAction)
  const scopedVictim = randomStringFromArray(filteredVictim)

  let scopedInstrument = randomStringFromArray(instrument)
  scopedInstrument = scopedInstrument.replace(`[who]`, lowerThe(whoHelped.name))

  let scopedReason = randomStringFromArray(reason)
  scopedReason = scopedReason.replace(`[he,she,they]`, whoModifier1)
  scopedReason = scopedReason.replace(`[his,her,their]`, whoModifier2)
  scopedReason = scopedReason.replace(`[he's,she's,they're]`, whoModifier3)
  scopedReason = scopedReason.replace(`[is,are]`, isGroup ? `are` : `is`)
  scopedReason = scopedReason.replace(`[who]`, lowerThe(whoElse.name))

  const scopedCountry = randomObjectFromArray(country, 'name')
  scopedReason = scopedReason.replace(`[country]`, scopedCountry.name)
  scopedReason = scopedReason.replace(`[population]`, scopedCountry.population)
  scopedReason = scopedReason.replace(`[group-unknown]`, lowerThe(groupUnknown.name))

  return `${whoDoneIt.name} ${action} ${scopedVictim} with ${scopedInstrument} ${scopedReason}.`
}

console.log(say())
console.log(say())
console.log(say())
console.log(say())
console.log(say())
console.log(say())
console.log(say())

module.exports = {
  say,
}
