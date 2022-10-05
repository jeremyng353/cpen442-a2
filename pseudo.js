import {readFileSync, promises as fsPromises} from 'fs';
/*
1. Generate a random key, called the 'parent', decipher the ciphertext 
    using this key. 
2. Rate the fitness of the deciphered text, store the result.
3. for(TEMP = 10;TEMP >= 0; TEMP = TEMP - STEP) 
      for (count = 50,000; count>0; count--)
         Change the parent key slightly (e.g. swap two characters in the 
           key at random) to get child key, 
         Measure the fitness of the deciphered text using the child key
         set dF = (fitness of child - fitness of parent)
         If dF > 0 (fitness of child is higher than parent key), 
             set parent = child
         If dF < 0 (fitness of child is worse than parent), 
             set parent = child with probability e^(dF/T).
*/
const ciphertext = "OPRSRMFTRARVEHCFDIQERAHEHIRVKMLKHUWEKNUIMXSNEZNKHOPLMPSROPRAHUWEKNKEASCNHNTFOPGCHOHTILNERIMLVEITBSMURPHUWECHMFIUKMRKRSSIOPRAHEHIHXFOIUEDDGDMZDRSTXLHREMPPLDEATSLHOITDEFMSRZHARFLBIOPKMWIHRITSRVEMNGEOHUSOPRSHNOPRICERVDMOPVIHEZXMRIMEWDCNKHOHNTFOPBQKEZNDMZSMPNGKMHOITVWEMVEHMXDMFIUGBEHGEVOOPSMOPMIGMHIADDNHXFOIUPLHPKIURSMVEKMCLDSEDIROSCBGZHXFOIUUKTRWIMZKNPHZEKMHKMHOSSIOHOPVIFTMSTFORITPHGERAITSROPRALHASLKHEHIIPLGVMSMCBDMSKHOPLPEDEHEKEASHSITDLVORHTMDCPFIUXDMFIUKMCDMONPSIHXFOIUKMLGSUKMOHIWBYICHOOPRMVMREMNOPSIMULKHEHIIPCNCLEKQOATWESISMEHSRCBHXFOIUKMKDHOILDSKWRDRMRZZEOPRVLDTRSVPHRVHNEVITKWVNTNFHCHMFIUVMWHUAMSHSITALVHPHORITXMSEIHMFIUOPPETDSIELSIZAAYLHWDUCOSITEGDKHOOPPEDEOPVMSMHNOLRSHNRZZEOPRVLDTRSVPHRVWEVUMZSVHXFOIUKMCGMZTDWIDIQEREITOEFPMUSLHOTDRSMUHISIHNKFKMHKLHASIGZOITTDMTVDMFIUKMIKORRSTDWQDMZSITIGVEMZOHORITOIKMISHSITOENHFTHOCZHNVOOPRAHEHIMNOPVMMUVEKWTKTFGIMNOPNTRVLDTRSVPHRVHXFOIUEKLCMXTMORITIEXDDPDMVDMFIUKMHSITSRDETNIMHIWEXIMXMSHVSIALOPOPMIGBRPIPEHEHRKSMRTRSGDRAHNSHFTHOCZIQVFELSIOPRVPHRVDMOHOPTIMZVRKMHKIWIVHSITFMOSITEPRWSIHOOPSMTDVIUITMZEKUUAOSHOITIEXDDPDMEKDKEKLCAUIUXOHMGEOHUSRZQIPSMFUQGMEPDKGMHDVIMFIUNMELUIEGSROPVUALCFWBFTVBWUMZEOSIHOIQXGMZITHWIMMLDKXUKWZVITIEXDDPDMEKDKOPRAHEHIMLSVRHMONPSIPEMXMUXMOPRSHXFOIUKMHSITMKSHFTHOCZHXFOIUKMHSITDNPHNPOPMATLMUKNHNEPVOOPVMMUVEHXFOIUXMROWELFMFITSRHXFOIUEKLCMXVIMFIUOPRSMAEKBSMUSHRVRSVHMFIUKMKDMXVIMZDCDLTROHLVNTEDSHHOHEDEOPRVUIMUVOOPRVMZOPHXFOIUEKLCKMHOITVLMFIUNMELIPTRURSMOPRSMUDKVRSMHEHNVOOPRVMZOPDEOPVIMZOSVBMNOPVAEUCDDMSNHNEHUIOHDCHXFOIUEKLCOPREILSLIUXDMFIUOPPEHEDEOPRVUIMUVOOPRARVSHHOKMHSIPVHMZOSVBHXFOIUPLRSREITALDGAMRDCEVIMFIUDEEBIRLGZVITALDQSIALVHPHORITARVEHXFOIUPLFPMZDCIUASZXZIRSRDQEMAXBMZAWVNVRCIRSKWGCHOOPSMFTOPDEXUPHIMHXFOIUEKLCOPTMDCIWCGHXFOIUKMIKEHEVSIUSDEOPRVUISUSRPEISVRSEOPPEEGVFTFGMKNOPDEIWDKMNHTHNEHIULFUACHMFIUXUISWEHXFOIUZXBALDDIQEREFHCERAHEIZNKHOHNTFOPZGSUKMOHTNUWVOOPDEHXFOIUNMSVITMRHRHFMSCBUIMXUKCFHRITVRVEEWDSTATMWHSIHOITSEMUSVVRMISIOHBSAMTROPSADMCIMUSESIIEXDDPDMVDMFIUNMSEITUCFOIMCLPERIZVMONPMZVOOPMATLKMKGRSHIAMNRKMLGSUKMOHARTAWITNHNEPRNFTOPRIHERHTMDCPFIUXDMFIUTDREMONPMNOLRSIQAWDKUWIWXDSIOPTAMHOSMXOPVMSMHNOLRSXMVRHXFOIUPLLDRVITHXGMERHNMSHXFOIURPXHMFIUOPSRMAMKTNIRFXTXLHSIHOPEMXIVOPVIWAHIKMUSHSMPRDPEVIMFIUMXPLLHLPKEBFHEERMDFGDUHXFOIUPLHEVIIPDWIUSWRDREHNTFOPZYHOHOITHLVZMNMIRSWIKNOPRIHERHTMDCPFIUOSMONPOPRVIWERLFMFITSFNTVIMFIUKMCIQEDMBSMUHSITPFSLTNMDVHMFIUKEASCHMFIUDEZXBEMKIMHNTFOPVQMFIUXUISWEUVVDMFIUKMRKRSSIOPVIILDCHXFOIUHFNPDMYBAWDKLSUCDSITSEMUSVHNVOOPSMZXEIGESZHOHOITHLVZMNMIRSWIKNHNOZRSIPKTHTALCFDIRIQZMZHNRPITSRDEOPDEHLVZKEASCNHNTFOPGCHOHEDEVMQIRHUCOSITIVOSRSMNOPVIMZOSVBHXFOIUKMCLVSBISIGZHTHXFOIUOPSUSRPEALUPSLHEFHCGMZMN";
//main();
console.log(englishStatsFileRead("english_trigrams.txt"));
// Adapted from http://practicalcryptography.com/cryptanalysis/stochastic-searching/cryptanalysis-playfair/
function main() {
    let key = ["Q","R","W","S","Y",
            "K","T","P","D","F",
            "U","H","M","N","G",
            "Z","O","E","I","A",
            "L","V","B","X","C"];

    let bestScore = -Number.MAX_VALUE;
    let bestKey = ["Q","R","W","S","Y",
            "K","T","P","D","F",
            "U","H","M","N","G",
            "Z","O","E","I","A",
            "L","V","B","X","C"];

    while(true) {
        let plaintext = playfair(ciphertext, key);
        let score = textFitness(plaintext);
        for (let i = 20; i > 0; i -= 0.2) {
            for (let j = 10000; j > 0; j--) {
                let newKey = shuffleKey(key); // change key slightly
                let newPlaintext = playfair(ciphertext, newKey);
                let newScore = textFitness(ciphertext, newPlaintext);
                if (newScore > score) {
                    score = newScore;
                } else {
                    if (Math.exp((newScore - score) / i) > Math.random()) {
                        score = newScore;
                        key = newKey;
                    }
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestKey = newKey;
                    console.log(`New best score: ${bestScore}`);
                    console.log(`Plaintext: ${newPlaintext}`);
                }
            }
        }
    }
}

function playfair(ciphertext, key) {
    let plaintext = "";
    let table = [[], [], [], [], []];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            table[i][j] = key[counter];
            counter += 1;
        }
    }

    // horizontal is j, vertical is i
    let table_map = {};
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            table_map[table[i][j]] = [i, j];
        }
    }
    // console.log(table);
    // console.log(table_map);
    
    for (let i = 0; i < ciphertext.length-1; i += 2) {
        let digraph = "";
        let l1 = "";
        let l2 = "";
        if (table_map[ciphertext[i]][0] == table_map[ciphertext[i+1]][0]) {
            // column
            let i1 = table_map[ciphertext[i]];
            let i2 = table_map[ciphertext[i+1]];
            let l1, l2;

            if(i1[1] > 0){
                l1 = table[i1[0]][i1[1]-1];
            } else {
                l1 = table[i1[0]][table.length - 1];
            }
            
            if(i2[1] > 0){
                l2 = table[i2[0]][i2[1]-1];
            } else {
                l2 = table[i2[0]][table.length - 1];
            }
            digraph = l1+l2;
            
        } else if (table_map[ciphertext[i]][1] == table_map[ciphertext[i+1]][1]) {
            // row
            let i1 = table_map[ciphertext[i]];
            let i2 = table_map[ciphertext[i+1]];

            if(i1[0] >0){
                l1 = table[i1[0] - 1][i1[1]];
            } else {
                l1 = table[table.length - 1][i1[1]];
            }
            
            if(i2[0] >0){
                l2 = table[i2[0] - 1][i2[1]];
            } else {
                l2 = table[table.length - 1][i2[1]];
            }
            
            
            digraph = l1+l2;

        } else {
            // rectangle
            let i1 = table_map[ciphertext[i]];
            let i2 = table_map[ciphertext[i+1]];

            digraph = table[i1[0]][i2[1]] + table[i2[0]][i1[1]];
            
        }
        
        plaintext += digraph;
    }

    for (let i = 1; i < plaintext.length - 1; i++) {
        if (plaintext[i-1] == plaintext[i+1]) {
            if (plaintext[i] == 'X') {
                plaintext = plaintext.substring(0, i) + plaintext.substring(i+1, plaintext.length);
            }
        }
    }
    
    return plaintext;
}

function modifyKey(oldKey){
    let i = Math.floor(Math.random() * 50);
    let j,k;
    let newKey = new Array(25);
    switch(i){
        case 0: 
            newKey = structuredClone(oldKey);
            swap2rows(newKey);
            break;
        case 1:
            newKey = structuredClone(oldKey);
            swap2cols(newKey);
            break;
        case 2:
            for(k = 0; k < 5; k++){
                newKey[k] = oldKey[24-k]; 
            }
            break;
        case 3:
            for(k = 0; k < 5; k++){
                for(j = 0; j < 5; j++){
                    newKey[k*5+j] = oldKey[(4-k)*5+j];
                }
            }
            break;
        case 4:
            for(k = 0; k < 5; k++){
                for(j = 0; j < 5; j++){
                    newKey[j*5+k] = oldKey[(4-j)*5+k];
                }
            }
            break;
        default:
            newKey = structuredClone(oldKey);
            exchange2letters(newKey);
    }
    return newKey;
}

function exchange2letters(key){
    let i = Math.floor(Math.random() * 25);
    let j = Math.floor(Math.random() * 25);
    let temp = key[i];
    key[i] = key[j];
    key[j] = temp;
}

function swap2rows(key){
    let i = Math.floor(Math.random() * 5);
    let j = Math.floor(Math.random() * 5);
    let temp;
    
    for(let k = 0; k < 5; k++){
        temp = key[i*5+k];
        key[i*5 +k] = key[j*5+k];
        key[j*5+k] = temp;
    }
}

function swap2cols(key){
    let i = Math.floor(Math.random() * 5);
    let j = Math.floor(Math.random() * 5);
    let temp;
    
    for(let k = 0; k < 5; k++){
        temp = key[i+k*5];
        key[i+k*5] = key[j+k*5];
        key[j+k*5] = temp;
    }
}

function scoreTextQgram(text, len){
    let i = 0;
    let temp = new Array(4);
    let score = 0.0;
    for(i = 0; i < len-3; i++){
        temp[0] = text[i]-'A';
        temp[1] = text[i+1]-'A';
        temp[2] = text[i+2]-'A';
        temp[3] = text[i+3]-'A';
        score += qgram[17576*temp[0] + 676*temp[1] + 26*temp[2] + temp[3]];
    }
    return score;
}

// read from a file with lines of format {qgram count}, into an object with format {qgram:count}
function englishStatsFileRead(filename) {
    let contents = readFileSync(filename, "utf-8").split(/\r?\n/);
    let stats = {};
    for (let i = 0; i < contents.length; i++) {
        let line = contents[i].split(" ");
        stats[line[0]] = line[1];
    }
    return stats; 
}