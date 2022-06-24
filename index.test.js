const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy of the object', ()=>{
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect(input).toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] return object with trimmed properties', ()=>{
    const input = {name:'Eric    ', role: '    student   '}
    const check = utils.trimPropertiesMutation(input)
    const expected = {name:'Eric', role: 'student'}
    expect(check).toEqual(expected)
  })
  test('[4] return same object with trimmed properties', ()=>{
    const input = {name:'Eric    ', role: '    student   '}
    utils.trimPropertiesMutation(input)
    const expected = {name:'Eric', role: 'student'}
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns largest number within array of objs',()=>{
    const input = [{integer:1},{integer:2},{integer:3},{integer:4},]
    const expected = 4
    const check = utils.findLargestInteger(input)
    expect(check).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
    counting = count =>{
      for(let i =0;i<count;i++){
        counter.countDown()
      }
    }
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    counting(1)
    expect(counter.counter).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counting(2)
    expect(counter.counter).toEqual(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counting(10)
    expect(counter.counter).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
    cycleSeason = count =>{
      for(let i =0;i<count;i++){
      seasons.next()
    }}
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    cycleSeason(1)
    expect(seasons.currentSeason).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    cycleSeason(2)
    expect(seasons.currentSeason).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    cycleSeason(3)
    expect(seasons.currentSeason).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    cycleSeason(4)
    expect(seasons.currentSeason).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    cycleSeason(5)
    expect(seasons.currentSeason).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    cycleSeason(40)
    expect(seasons.currentSeason).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(30)
    expect(focus.odometer).toBeGreaterThan(0)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(focus.tank).toBeLessThan(20)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(60)
    expect(focus.tank).toEqual(18)
    focus.refuel(1)
    expect(focus.tank).toEqual(19)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(5)
    expect(focus.tank).toEqual(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync',  () => {
  test('[19] resolves true if passed an even number', async () => {
    const check = await utils.isEvenNumberAsync(2)
    expect(check).toBe(true)
  })
  test('[20] resolves false if passed an odd number', () => {

  })
})
