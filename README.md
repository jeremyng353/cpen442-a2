# CPEN 442 Assignment 2
### In-Lab part
- groups.py: https://github.com/jeremyng353/cpen442-a2/blob/main/groups.py 

### At-Home part
- playfair.js: https://github.com/jeremyng353/cpen442-a2/blob/main/playfair.js 
  - playfair(): takes in key and ciphertext to produce plaintext
  - tryExample(): tests the function playfair with the example given in Playfair Cipher mechanics pdf (https://www.dropbox.com/s/2uykh1e24k5hr10/02-Playfair%20Cipher.pdf)
  - permutations(): regression function takes an array (in our case the default key matrix) and gives an array of all permutations of the argument array, in this case - all possible keys
  - getKeys(): iterative function, takes an array (key matrix) and tests this key to check if it produces plaintext
  - randomKeys(): returns a random permutation of the alphabet as the key
- pseudo.js
  - NGram_Score produces a score for plain text based on similarities to the English Language. This was adapted from http://practicalcryptography.com/cryptanalysis/text-characterisation/quadgrams/.
  - main(): runs endlessly, generating random keys and printing out plaintexts that have a better ngram_score than our previous best.
