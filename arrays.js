var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element) {
  retarray = [element,...array]
  return retarray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  retarray = [...array,element]
  return retarray
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array  
  }
  
  function removeElementFromBeginningOfArray(array) {
    retarray = array.slice(1)
    return retarray
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
  }
  
  function removeElementFromEndOfArray(array) { 
    retarray = array.slice(0,array.length-1)
    return retarray
  }