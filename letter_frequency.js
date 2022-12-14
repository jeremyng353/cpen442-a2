let ciphertext = "TUPPRHYXBHRDPGAURYHUCKUPJAYLLDDJRUCKXAHDJDPPDKRHGKAYLLDGKHDPPRHGESEYRHGEBYJRXLVPGEBQYTEKRDGCKHYTVCDZURHUOPPDPPRHGESLUDRHYLUTHOAYLLDGTYXPQERKDODEORHGEBDVYXRGRAYLLDUZUEGJGJUPPYJJRHURYMYJRHUHYXKUTHGAHTDKZUCOPGSUPORCXUQYRQYTEAYLLDQYTEAYLLDQYTEQYRTYXPQRHUJDPPEUZUCAYLURYDEUEQGTYEQUCHYTLDEOLGPUKGZUJDPPUEVORHGKRGLUKHUKDGQDPYXQQYRGLXKRVUBURRGEBKYLUTHUCUEUDCRHUAUERCUYJRHUUDCRHQYRPURLUKUURHDRTYXPQVUJYXCRHYXKDEQLGPUKQYTEAYLLDGRHGESJYCAYLLDOYXKUUAYLLDDPGAUHDQPUDCERKUZUCDPRHGEBKYJRHGKKYCRGEHUCPUKKYEKGERHUKAHYYPCYYLAYLLDDEQRHYXBHRHGKTDKEYRDZUCOBYYQYMMYCRXEGROJYCKHYTGEBYJJHUCSEYTPUQBUAYLLDDKRHUCUTDKEYYEURYPGKRUERYHUCAYLLDKRGPPGRTDKBYYQMCDARGAURYKDOGRYZUCOUKAYLLDRHDRKDVYXRRHUCGBHRQGKRDEAUVXRRHUEGTYEQUCTHDRPDRGRXQUYCPYEBGRXQUGZUBYRRYDPGAUHDQEYGQUDTHDRPDRGRXQUTDKAYLLDYCPYEBGRXQUUGRHUCAYLLDVXRRHYXBHRRHUOTUCUEGAUBCDEQTYCQKRYKDO";

let map = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'E': 0,
    'F': 0,
    'G': 0,
    'H': 0,
    'I': 0,
    'J': 0,
    'K': 0,
    'L': 0,
    'M': 0,
    'N': 0,
    'O': 0,
    'P': 0,
    'Q': 0,
    'R': 0,
    'S': 0,
    'T': 0,
    'U': 0,
    'V': 0,
    'W': 0,
    'X': 0,
    'Y': 0,
    'Z': 0
}

for (let i = 0; i < ciphertext.length; i++) {
    map[ciphertext[i]]++;
}

let arr = []
for (let letter in map) {
    arr.push([letter, map[letter]]);
}

arr.sort((a, b) => b[1] - a[1])

let length = ciphertext.length;

arr_percentages = []
for (let i = 0; i < arr.length; i++) {
    arr_percentages.push([arr[i][0], Math.round(arr[i][1] / length * 100 * 100) / 100])
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr_percentages[i][0], arr_percentages[i][1]);
}

return arr_percentages
