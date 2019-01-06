var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function  Arrays(){
  function kittens(){
    var kittens = ["Milo", "Otis", "Garfield"]
  }
} 

describe('Arrays', function() {
  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
