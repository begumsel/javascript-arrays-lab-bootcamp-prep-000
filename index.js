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

describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })




