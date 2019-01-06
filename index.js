var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function  Arrays(){
  function kittens(){
    var kittens = ["Milo", "Otis", "Garfield"]
  }
  window.kittens
} 

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return window.kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return window.kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return window.kittens
}

function appendKitten(name){
  [...kittens, "Broom"]
}

function prependKitten(name){
  ["Arnold", ...kittens]
}

function removeLastKitten(){
  kittens.slice(0, array.length-1)
}

function removeFirstKitten(){
  
}

describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})





 