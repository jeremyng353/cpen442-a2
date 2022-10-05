
const ciphertext = "OPRSRMFTRARVEHCFDIQERAHEHIRVKMLKHUWEKNUIMXSNEZNKHOPLMPSROPRAHUWEKNKEASCNHNTFOPGCHOHTILNERIMLVEITBSMURPHUWECHMFIUKMRKRSSIOPRAHEHIHXFOIUEDDGDMZDRSTXLHREMPPLDEATSLHOITDEFMSRZHARFLBIOPKMWIHRITSRVEMNGEOHUSOPRSHNOPRICERVDMOPVIHEZXMRIMEWDCNKHOHNTFOPBQKEZNDMZSMPNGKMHOITVWEMVEHMXDMFIUGBEHGEVOOPSMOPMIGMHIADDNHXFOIUPLHPKIURSMVEKMCLDSEDIROSCBGZHXFOIUUKTRWIMZKNPHZEKMHKMHOSSIOHOPVIFTMSTFORITPHGERAITSROPRALHASLKHEHIIPLGVMSMCBDMSKHOPLPEDEHEKEASHSITDLVORHTMDCPFIUXDMFIUKMCDMONPSIHXFOIUKMLGSUKMOHIWBYICHOOPRMVMREMNOPSIMULKHEHIIPCNCLEKQOATWESISMEHSRCBHXFOIUKMKDHOILDSKWRDRMRZZEOPRVLDTRSVPHRVHNEVITKWVNTNFHCHMFIUVMWHUAMSHSITALVHPHORITXMSEIHMFIUOPPETDSIELSIZAAYLHWDUCOSITEGDKHOOPPEDEOPVMSMHNOLRSHNRZZEOPRVLDTRSVPHRVWEVUMZSVHXFOIUKMCGMZTDWIDIQEREITOEFPMUSLHOTDRSMUHISIHNKFKMHKLHASIGZOITTDMTVDMFIUKMIKORRSTDWQDMZSITIGVEMZOHORITOIKMISHSITOENHFTHOCZHNVOOPRAHEHIMNOPVMMUVEKWTKTFGIMNOPNTRVLDTRSVPHRVHXFOIUEKLCMXTMORITIEXDDPDMVDMFIUKMHSITSRDETNIMHIWEXIMXMSHVSIALOPOPMIGBRPIPEHEHRKSMRTRSGDRAHNSHFTHOCZIQVFELSIOPRVPHRVDMOHOPTIMZVRKMHKIWIVHSITFMOSITEPRWSIHOOPSMTDVIUITMZEKUUAOSHOITIEXDDPDMEKDKEKLCAUIUXOHMGEOHUSRZQIPSMFUQGMEPDKGMHDVIMFIUNMELUIEGSROPVUALCFWBFTVBWUMZEOSIHOIQXGMZITHWIMMLDKXUKWZVITIEXDDPDMEKDKOPRAHEHIMLSVRHMONPSIPEMXMUXMOPRSHXFOIUKMHSITMKSHFTHOCZHXFOIUKMHSITDNPHNPOPMATLMUKNHNEPVOOPVMMUVEHXFOIUXMROWELFMFITSRHXFOIUEKLCMXVIMFIUOPRSMAEKBSMUSHRVRSVHMFIUKMKDMXVIMZDCDLTROHLVNTEDSHHOHEDEOPRVUIMUVOOPRVMZOPHXFOIUEKLCKMHOITVLMFIUNMELIPTRURSMOPRSMUDKVRSMHEHNVOOPRVMZOPDEOPVIMZOSVBMNOPVAEUCDDMSNHNEHUIOHDCHXFOIUEKLCOPREILSLIUXDMFIUOPPEHEDEOPRVUIMUVOOPRARVSHHOKMHSIPVHMZOSVBHXFOIUPLRSREITALDGAMRDCEVIMFIUDEEBIRLGZVITALDQSIALVHPHORITARVEHXFOIUPLFPMZDCIUASZXZIRSRDQEMAXBMZAWVNVRCIRSKWGCHOOPSMFTOPDEXUPHIMHXFOIUEKLCOPTMDCIWCGHXFOIUKMIKEHEVSIUSDEOPRVUISUSRPEISVRSEOPPEEGVFTFGMKNOPDEIWDKMNHTHNEHIULFUACHMFIUXUISWEHXFOIUZXBALDDIQEREFHCERAHEIZNKHOHNTFOPZGSUKMOHTNUWVOOPDEHXFOIUNMSVITMRHRHFMSCBUIMXUKCFHRITVRVEEWDSTATMWHSIHOITSEMUSVVRMISIOHBSAMTROPSADMCIMUSESIIEXDDPDMVDMFIUNMSEITUCFOIMCLPERIZVMONPMZVOOPMATLKMKGRSHIAMNRKMLGSUKMOHARTAWITNHNEPRNFTOPRIHERHTMDCPFIUXDMFIUTDREMONPMNOLRSIQAWDKUWIWXDSIOPTAMHOSMXOPVMSMHNOLRSXMVRHXFOIUPLLDRVITHXGMERHNMSHXFOIURPXHMFIUOPSRMAMKTNIRFXTXLHSIHOPEMXIVOPVIWAHIKMUSHSMPRDPEVIMFIUMXPLLHLPKEBFHEERMDFGDUHXFOIUPLHEVIIPDWIUSWRDREHNTFOPZYHOHOITHLVZMNMIRSWIKNOPRIHERHTMDCPFIUOSMONPOPRVIWERLFMFITSFNTVIMFIUKMCIQEDMBSMUHSITPFSLTNMDVHMFIUKEASCHMFIUDEZXBEMKIMHNTFOPVQMFIUXUISWEUVVDMFIUKMRKRSSIOPVIILDCHXFOIUHFNPDMYBAWDKLSUCDSITSEMUSVHNVOOPSMZXEIGESZHOHOITHLVZMNMIRSWIKNHNOZRSIPKTHTALCFDIRIQZMZHNRPITSRDEOPDEHLVZKEASCNHNTFOPGCHOHEDEVMQIRHUCOSITIVOSRSMNOPVIMZOSVBHXFOIUKMCLVSBISIGZHTHXFOIUOPSUSRPEALUPSLHEFHCGMZMN";

//-------------------some keys found--(using random)-----------------------
const keysToTry = [ 
    ["G","Y","Z","U","B",
     "S","V","T","E","R",
     "N","X","O","M","F",
     "D","C","H","I","L",
     "K","Q","P","A","W"], 
    ["Q","R","W","S","Y",   // COMMA, DOT, THE
     "K","T","P","D","F",
     "U","H","M","N","G",
     "Z","O","E","I","A",
     "L","V","B","X","C"],
    ["D","O","P","C","V",   // COMMA, DOT, THE
     "I","Z","S","H","Q",
     "T","X","F","R","Y",
     "A","B","U","L","N",
     "M","G","K","E","W"]
];

//-------------------try example----------------
tryExample();
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

//---------------------Some background on keyspace--------------------
// the key is some word fit into a 5 x 5 matrix.
// There are a total of 26 letters in English
// There are 25 ways to pick 25 out of 26 letters
//there are 25! ways to rearrange the 25 letters in the 5x5 matrix


//---------------------alphabets used in keys-------------------
let alphabet = ['A', 'B', 'C', 'D', 'E', 
                'F', 'G', 'H', 'I', 'K', 
                'L', 'M', 'N', 'O', 'P', 
                'Q', 'R', 'S', 'T', 'U',
                'V', 'W', 'X', 'Y', 'Z'];



//---------------------try keys------------------------------
runOne(keysToTry[0], true);

// runN(randomKey, 1000000); //found a successful key! -> U,G,X,Y,Q,S,P,R,N,Z,I,M,T,K,O,V,E,C,L,A,D,W,F,B,H -> plaintext has COMMA and DOT in it



//-------------------------------------------------------------
//-------------------FUNCTIONS--------------------------------
//-------------------------------------------------------------
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
        console.log(plaintextAsDigraphs(highlightFoundKeywords(result)));
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
    str = str.replace(/THE/g, "the");
    str = str.replace(/AND/g, "and");
    str = str.replace(/IS/g, "is");
    str = str.replace(/IN/g, "in");
    str = str.replace(/ON/g, "on");
    str = str.replace(/ARE/g, "are");
    str = str.replace(/FOR/g, "for");
    return str;
}

function punctuatePlaintext (str) {
    str = str.replace(/COMMA/g, ",");
    str = str.replace(/DOT/g, ".");
    return str;
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

//*************random keys*****************/
function randomKey() {
    // Assumption: unlikely to repeat a key in repeated calls
    let key = [];
    let takenIndices = [];
    for (let i = 0; i < 25; i++) {
        let idx = -1;
        while (idx < 0 || takenIndices.includes(idx)) {
        idx = Math.floor(Math.random() * 25);
        }
        takenIndices.push(idx);
        key.push(alphabet[idx]);
    }
    return key;
}

// source: https://www.30secondsofcode.org/js/s/permutations
function permutations(arr) {
    i += 1;
    if(i >= 100){
        return [];
    }
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
};

// source: https://www.baeldung.com/cs/array-generate-all-permutations
// adapted from: https://gist.github.com/brianpursley/57bbaf0a8823e51012bc
function getKeys(arr){
    let N = arr.length
    let p = []
    let index;
    for (index = 0; index < (N+1); index++) {
      p[index] = index
    }
    let i = 1
    let j
    console.log(arr);
    let result = runOne(arr);
    if(result === 1) return;
    while (i < N){
      p[i] -= 1;
      if (i % 2 == 1) {
        j = p[i]
      } else {
        j = 0
      }
      let temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
      console.log(arr);
      result = runOne(arr);
      if(result === 1) return;
      i = 1;
      while (p[i] == 0){
        p[i] = i
        i += 1
      }
    }
  }
