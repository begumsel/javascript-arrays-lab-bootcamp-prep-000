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
  
}

describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })





