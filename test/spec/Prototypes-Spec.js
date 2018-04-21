
//Test Suite
describe('prototypes', function () {

	describe('Problem 1 - String Prototype Reverse ', function () {
	
		var string1 = 'Hello my name is what?'
		var reversed1 = '?tahw si eman ym olleH'

		var string2 = 'My name is who?'
		var reversed2 = '?ohw si eman yM'
		
		var string3 = 'My name is Slim Shady?'
		var reversed3 = '?ydahS milS si eman yM'

		it('should exist', function () {
			expect(string1.reverse).toBeDefined()
		})
		it('should be a function', function () {
			expect(typeof string1.reverse).toBe('function')
		})
		it('should return a string', function () {
			expect(typeof string1.reverse()).toBe('string')
		})
		
		it('should work on sample text', function () {
			expect(string1.reverse()).toBe(reversed1)
			expect(string2.reverse()).toBe(reversed2)
			expect(string3.reverse()).toBe(reversed3)
		})
		it('should work on random text', function () {
			var text, reversedText, randomLength;
			for(let t = 0; t < 5; t++){
				text = ''
				reversedText = ''
				randomLength = Math.floor(Math.random() * 20) + 10;
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!., '";

  				for (var i = 0, char; i < randomLength; i++){
					char = possible.charAt(Math.floor(Math.random() * possible.length));
					text += char;
					reversedText = char += reversedText;
				}
	
				expect(text.reverse()).toBe(reversedText)
			}
			
		})
	})

	describe('Problem 2 - ', function () {
		var james = new Person('James', 30);

		it('drinkCoffe should be a function', function () {
			expect(typeof james.drinkCoffee).toEqual('function')
		})
		it('readDocumentation should be a function', function () {
			expect(typeof james.readDocumentation).toEqual('function')
		})
		it(' drinkCoffe should return a object', function () {
			expect(typeof james.drinkCoffee()).toBe('object')
		})
		it('readDocumentation should return a object', function () {
			expect(typeof james.readDocumentation()).toBe('object')
		})
		it('readDocumentaion should behave correctly', function () {
			james.readDocumentation();
			expect(james.age).toBe(30)
			expect(james.name).toBe('James')
			expect(james.energy).toBe(20)
			expect(james.linesOfCode).toBe(-10)
			expect(james.qualityOfCode).toBe(10)
		})
		it('drinkCoffee should behave correctly', function () {
			james.drinkCoffee();
			expect(james.age).toBe(30)
			expect(james.name).toBe('James')
			expect(james.energy).toBe(30)
			expect(james.linesOfCode).toBe(40)
			expect(james.qualityOfCode).toBe(9)
		})
	})

	
})