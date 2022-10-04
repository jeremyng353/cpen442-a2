import {randomKey} from "./PlayfairKeys.js" 
import {englishDigraphFrequencies, enlishDigraphsDescendingFrequencyOrder} from "./englishDigraphFrequencies.js"

// let table = [['P', 'L', 'A', 'Y', 'F'], ['I', 'R', 'B', 'C', 'D'], ['E', 'G', 'H', 'K', 'M'], ['N', 'O', 'Q', 'S', 'T'], ['U', 'V', 'W', 'X', 'Z']]

const ciphertext = "OPRSRMFTRARVEHCFDIQERAHEHIRVKMLKHUWEKNUIMXSNEZNKHOPLMPSROPRAHUWEKNKEASCNHNTFOPGCHOHTILNERIMLVEITBSMURPHUWECHMFIUKMRKRSSIOPRAHEHIHXFOIUEDDGDMZDRSTXLHREMPPLDEATSLHOITDEFMSRZHARFLBIOPKMWIHRITSRVEMNGEOHUSOPRSHNOPRICERVDMOPVIHEZXMRIMEWDCNKHOHNTFOPBQKEZNDMZSMPNGKMHOITVWEMVEHMXDMFIUGBEHGEVOOPSMOPMIGMHIADDNHXFOIUPLHPKIURSMVEKMCLDSEDIROSCBGZHXFOIUUKTRWIMZKNPHZEKMHKMHOSSIOHOPVIFTMSTFORITPHGERAITSROPRALHASLKHEHIIPLGVMSMCBDMSKHOPLPEDEHEKEASHSITDLVORHTMDCPFIUXDMFIUKMCDMONPSIHXFOIUKMLGSUKMOHIWBYICHOOPRMVMREMNOPSIMULKHEHIIPCNCLEKQOATWESISMEHSRCBHXFOIUKMKDHOILDSKWRDRMRZZEOPRVLDTRSVPHRVHNEVITKWVNTNFHCHMFIUVMWHUAMSHSITALVHPHORITXMSEIHMFIUOPPETDSIELSIZAAYLHWDUCOSITEGDKHOOPPEDEOPVMSMHNOLRSHNRZZEOPRVLDTRSVPHRVWEVUMZSVHXFOIUKMCGMZTDWIDIQEREITOEFPMUSLHOTDRSMUHISIHNKFKMHKLHASIGZOITTDMTVDMFIUKMIKORRSTDWQDMZSITIGVEMZOHORITOIKMISHSITOENHFTHOCZHNVOOPRAHEHIMNOPVMMUVEKWTKTFGIMNOPNTRVLDTRSVPHRVHXFOIUEKLCMXTMORITIEXDDPDMVDMFIUKMHSITSRDETNIMHIWEXIMXMSHVSIALOPOPMIGBRPIPEHEHRKSMRTRSGDRAHNSHFTHOCZIQVFELSIOPRVPHRVDMOHOPTIMZVRKMHKIWIVHSITFMOSITEPRWSIHOOPSMTDVIUITMZEKUUAOSHOITIEXDDPDMEKDKEKLCAUIUXOHMGEOHUSRZQIPSMFUQGMEPDKGMHDVIMFIUNMELUIEGSROPVUALCFWBFTVBWUMZEOSIHOIQXGMZITHWIMMLDKXUKWZVITIEXDDPDMEKDKOPRAHEHIMLSVRHMONPSIPEMXMUXMOPRSHXFOIUKMHSITMKSHFTHOCZHXFOIUKMHSITDNPHNPOPMATLMUKNHNEPVOOPVMMUVEHXFOIUXMROWELFMFITSRHXFOIUEKLCMXVIMFIUOPRSMAEKBSMUSHRVRSVHMFIUKMKDMXVIMZDCDLTROHLVNTEDSHHOHEDEOPRVUIMUVOOPRVMZOPHXFOIUEKLCKMHOITVLMFIUNMELIPTRURSMOPRSMUDKVRSMHEHNVOOPRVMZOPDEOPVIMZOSVBMNOPVAEUCDDMSNHNEHUIOHDCHXFOIUEKLCOPREILSLIUXDMFIUOPPEHEDEOPRVUIMUVOOPRARVSHHOKMHSIPVHMZOSVBHXFOIUPLRSREITALDGAMRDCEVIMFIUDEEBIRLGZVITALDQSIALVHPHORITARVEHXFOIUPLFPMZDCIUASZXZIRSRDQEMAXBMZAWVNVRCIRSKWGCHOOPSMFTOPDEXUPHIMHXFOIUEKLCOPTMDCIWCGHXFOIUKMIKEHEVSIUSDEOPRVUISUSRPEISVRSEOPPEEGVFTFGMKNOPDEIWDKMNHTHNEHIULFUACHMFIUXUISWEHXFOIUZXBALDDIQEREFHCERAHEIZNKHOHNTFOPZGSUKMOHTNUWVOOPDEHXFOIUNMSVITMRHRHFMSCBUIMXUKCFHRITVRVEEWDSTATMWHSIHOITSEMUSVVRMISIOHBSAMTROPSADMCIMUSESIIEXDDPDMVDMFIUNMSEITUCFOIMCLPERIZVMONPMZVOOPMATLKMKGRSHIAMNRKMLGSUKMOHARTAWITNHNEPRNFTOPRIHERHTMDCPFIUXDMFIUTDREMONPMNOLRSIQAWDKUWIWXDSIOPTAMHOSMXOPVMSMHNOLRSXMVRHXFOIUPLLDRVITHXGMERHNMSHXFOIURPXHMFIUOPSRMAMKTNIRFXTXLHSIHOPEMXIVOPVIWAHIKMUSHSMPRDPEVIMFIUMXPLLHLPKEBFHEERMDFGDUHXFOIUPLHEVIIPDWIUSWRDREHNTFOPZYHOHOITHLVZMNMIRSWIKNOPRIHERHTMDCPFIUOSMONPOPRVIWERLFMFITSFNTVIMFIUKMCIQEDMBSMUHSITPFSLTNMDVHMFIUKEASCHMFIUDEZXBEMKIMHNTFOPVQMFIUXUISWEUVVDMFIUKMRKRSSIOPVIILDCHXFOIUHFNPDMYBAWDKLSUCDSITSEMUSVHNVOOPSMZXEIGESZHOHOITHLVZMNMIRSWIKNHNOZRSIPKTHTALCFDIRIQZMZHNRPITSRDEOPDEHLVZKEASCNHNTFOPGCHOHEDEVMQIRHUCOSITIVOSRSMNOPVIMZOSVBHXFOIUKMCLVSBISIGZHTHXFOIUOPSUSRPEALUPSLHEFHCGMZMN";
const keysToTry = [ 
    ["U","G","X","Y","Q",   // COMMA, DOT
     "S","P","R","N","Z",
     "I","M","T","K","O",
     "V","E","C","L","A",
     "D","W","F","B","H"], 
    ["Q","R","W","S","Y",   // COMMA, DOT, THE
     "K","T","P","D","F",
     "U","H","M","N","G",
     "Z","O","E","I","A",
     "L","V","B","X","C"],
    ["D","O","P","C","V",   // COMMA, DOT, THE
     "I","Z","S","H","Q",
     "T","X","F","R","Y",
     "A","B","U","L","N",
     "M","G","K","E","W"],
     ["Y","Z","L","X","Q",
     "F","A","W","G","D",
     "U","B","C","N","S",
     "I","V","E","O","R",
     "M","P","H","T","K"], 
    ["T","C","P","K","V",
     "H","L","G","U","Y",
     "F","I","Z","X","W",
     "R","Q","S","E","M",
     "N","B","O","A","D"],
    ["L","I","Y","V","G",
     "R","P","B","A","W",
     "F","U","H","Z","N",
     "T","M","E","O","D",
     "X","C","K","S","Q"],
    ["D","X","I","N","M",
     "U","P","O","Z","S",
     "W","G","R","B","T",
     "C","E","L","Q","V",
     "Y","F","H","K","A"],
    ["V","Y","Z","S","I",
     "K","N","W","X","G",
     "C","E","P","T","A",
     "U","B","O","R","D",
     "Q","M","F","L","H"],
    ["L","T","V","B","O",
     "Q","A","N","S","R",
     "U","M","C","E","F",
     "X","G","K","Z","D",
     "W","P","Y","I","H"],
    ["P","B","I","M","T",
     "X","W","C","F","H",
     "S","L","A","U","N",
     "D","Y","V","R","K",
     "E","Z","G","O","Q"],
    ["E","A","H","I","V",
     "M","Z","O","R","Y",
     "Q","L","F","B","W",
     "S","P","C","X","N",
     "D","G","T","K","U"],
    ["I","Q","G","C","B",
     "U","H","M","A","Y",
     "L","E","R","S","K",
     "F","X","Z","O","P",
     "W","V","T","N","D"],
    ["K","Y","W","T","H",
     "U","B","Z","L","Q",
     "V","F","C","P","O",
     "N","R","I","S","D",
     "X","A","G","M","E"],
    ["A","L","Z","R","H",
     "M","X","E","Q","V",
     "D","I","Y","T","C",
     "W","N","B","O","S",
     "U","G","P","F","K"],
    ["I","C","W","N","Z",
     "O","V","D","E","M",
     "T","U","F","S","R",
     "A","Y","H","X","P",
     "K","L","Q","B","G"],
    ["L","T","S","B","G",
     "Q","V","Z","W","U",
     "H","D","X","I","F",
     "C","Y","A","N","K",
     "O","E","R","M","P"],
    ["E","D","S","U","P",
     "X","I","A","B","T",
     "N","C","M","Q","F",
     "V","R","K","G","O",
     "Y","H","Z","W","L"],
    ["N","Z","R","E","X",
     "B","L","F","K","G",
     "T","Y","Q","P","S",
     "U","I","V","C","O",
     "W","H","A","M","D"],
    ["O","T","I","X","Q",
     "B","P","D","N","L",
     "C","V","W","Y","R",
     "U","E","A","S","Z",
     "K","M","G","F","H"]
];


// tryExample();
// runN(randomKey, 10000000); //found a successful key! -> U,G,X,Y,Q,S,P,R,N,Z,I,M,T,K,O,V,E,C,L,A,D,W,F,B,H -> plaintext has COMMA and DOT in it

for (let i = 0; i < keysToTry.length; i++) {
    runOne(keysToTry[i], true);
}

function runN(keyFunc, iterations) {
    let successfulKeys = []
    let count;

    let start = Date.now();;
    for (count = 0; count < iterations; count++) {
        let key = keyFunc();        
        let keySuccess = runOne(key, false); // keys is from PlayfairKeys.js

        if (keySuccess) {
            successfulKeys.push(key);
        }
    }
    let end = Date.now();
    console.log(`${end - start} ms taken to evaluate ${iterations} keys and find ${successfulKeys.length} succesful keys.`);
    console.log(`successful keys: ${successfulKeys}`);
}

function runOne(key, verbose) {
    let start = Date.now();
    let result = playfair(ciphertext, key)
    let end = Date.now();
    
    let success = false;
    let report = `Time taken to check key ${key}: ${end - start} ms`;
    let keywords = commonWordsFound(result); 
    if (keywords.length > 0) {
        report += `\ncommon words found in plaintext: ${keywords}`;
        if (keywords.includes("COMMA") 
            && keywords.includes("DOT")
            && keywords.includes("THE")) 
        {
            report += "\nCOMMA, DOT, and THE found in plaintext!"
            success = true
        }
    }
    console.log(report);
    
    if (verbose) {
        console.log(highlightFoundKeywords(punctuatePlaintext(result)));
        // console.log(plaintextAsDigraphs(highlightFoundKeywords(result)));
    }

    return success;
}

function commonWordsFound (str) {
    const commonWords = [
        "COMMA", 
        "DOT", 
        "THE", 
        "AND", 
        "ARE", 
        "IS", 
        "IN", 
        "ON", 
        "FOR"];
    let wordsFound = [];
    for (let i = 0; i < commonWords.length; i++) {
        if (str.indexOf(commonWords[i]) != -1) {
            wordsFound.push(commonWords[i]);
        }
    }
    return wordsFound;
}

function plaintextAsDigraphs (plaintext) {
    let newText = "";
    for (let i = 0; i < plaintext.length; i++) {
        if (i > 0 && i % 2 === 0) {
            newText += " ";
        }
        newText += plaintext.charAt(i);
    }
    return newText;
}
function highlightFoundKeywords (str) {
    str = str.replace(/THE/g, " the ");
    str = str.replace(/AND/g, " and ");
    str = str.replace(/IS/g, " is ");
    str = str.replace(/IN/g, " in ");
    str = str.replace(/ON/g, " on ");
    str = str.replace(/ARE/g, " are ");
    str = str.replace(/FOR/g, " for ");
    return str;
}
function punctuatePlaintext (str) {
    str = str.replace(/COMMA/g, " , ");
    str = str.replace(/DOT/g, " . ");
    return str;
}

function tryExample(){
    //try the example given in the pdf
    const key = ['P', 'L', 'A', 'Y', 'F', 
                'I', 'R', 'E', 'X', 'M', 
                'B', 'C', 'D', 'G', 'H', 
                'K', 'N', 'O', 'Q', 'S', 
                'T', 'U', 'V', 'W', 'Z'];

    const plaintext = "HIDETHEGOLDINTHETREESTUMP";
    const ciphertext = "BMODZBXDNABEKUDMUIXMMOUVIF";

    let result = playfair(ciphertext, key);
    console.log("Resulting plaintext from function = " +  result.toString());
    console.log("Actual plaintext = " + plaintext);
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
