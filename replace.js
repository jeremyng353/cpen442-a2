let cipher = "TUPPRHYXBHRDPGAURYHUCKUPJAYLLDDJRUCKXAHDJDPPDKRHGKAYLLDGKHDPPRHGESEYRHGEBYJRXLVPGEBQYTEKRDGCKHYTVCDZURHUOPPDPPRHGESLUDRHYLUTHOAYLLDGTYXPQERKDODEORHGEBDVYXRGRAYLLDUZUEGJGJUPPYJJRHURYMYJRHUHYXKUTHGAHTDKZUCOPGSUPORCXUQYRQYTEAYLLDQYTEAYLLDQYTEQYRTYXPQRHUJDPPEUZUCAYLURYDEUEQGTYEQUCHYTLDEOLGPUKGZUJDPPUEVORHGKRGLUKHUKDGQDPYXQQYRGLXKRVUBURRGEBKYLUTHUCUEUDCRHUAUERCUYJRHUUDCRHQYRPURLUKUURHDRTYXPQVUJYXCRHYXKDEQLGPUKQYTEAYLLDGRHGESJYCAYLLDOYXKUUAYLLDDPGAUHDQPUDCERKUZUCDPRHGEBKYJRHGKKYCRGEHUCPUKKYEKGERHUKAHYYPCYYLAYLLDDEQRHYXBHRHGKTDKEYRDZUCOBYYQYMMYCRXEGROJYCKHYTGEBYJJHUCSEYTPUQBUAYLLDDKRHUCUTDKEYYEURYPGKRUERYHUCAYLLDKRGPPGRTDKBYYQMCDARGAURYKDOGRYZUCOUKAYLLDRHDRKDVYXRRHUCGBHRQGKRDEAUVXRRHUEGTYEQUCTHDRPDRGRXQUYCPYEBGRXQUGZUBYRRYDPGAUHDQEYGQUDTHDRPDRGRXQUTDKAYLLDYCPYEBGRXQUUGRHUCAYLLDVXRRHYXBHRRHUOTUCUEGAUBCDEQTYCQKRYKDO";

let new_cipher = ""

for (let i = 0; i < ciphertext.length; i++) {
    switch (ciphertext[i]) {
        case 'A':
            plaintext = plaintext + 'C';
            break;
        case 'B':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'C':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'D':
            plaintext = plaintext + 'A'
            break;
        case 'E':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'F':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'G':
            plaintext = plaintext + 'N'
            break;
        case 'H':
            plaintext = plaintext + "H"
            break;
        case 'I':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'J':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'K':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'L':
            plaintext = plaintext + 'M'
            break;
        case 'M':
            plaintext = plaintext + 'K'
            break;
        case 'N':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'O':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'P':
            plaintext = plaintext + 'L'
            break;
        case 'Q':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'R':
            plaintext = plaintext + 'T'
            break;
        case 'S':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'T':
            plaintext = plaintext + 'W'
            break;
        case 'U':
            plaintext = plaintext + 'E'
            break;
        case 'V':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'W':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'X':
            plaintext = plaintext + ciphertext[i]
            break;
        case 'Y':
            plaintext = plaintext + 'O'
            break;
        case 'Z':
            plaintext = plaintext + ciphertext[i]
            break;
    }
}

console.log(plaintext)