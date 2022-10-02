import {randomKey} from "./PlayfairKeys.js" 

// let table = [['P', 'L', 'A', 'Y', 'F'], ['I', 'R', 'B', 'C', 'D'], ['E', 'G', 'H', 'K', 'M'], ['N', 'O', 'Q', 'S', 'T'], ['U', 'V', 'W', 'X', 'Z']]

const ciphertext = "OPRSRMFTRARVEHCFDIQERAHEHIRVKMLKHUWEKNUIMXSNEZNKHOPLMPSROPRAHUWEKNKEASCNHNTFOPGCHOHTILNERIMLVEITBSMURPHUWECHMFIUKMRKRSSIOPRAHEHIHXFOIUEDDGDMZDRSTXLHREMPPLDEATSLHOITDEFMSRZHARFLBIOPKMWIHRITSRVEMNGEOHUSOPRSHNOPRICERVDMOPVIHEZXMRIMEWDCNKHOHNTFOPBQKEZNDMZSMPNGKMHOITVWEMVEHMXDMFIUGBEHGEVOOPSMOPMIGMHIADDNHXFOIUPLHPKIURSMVEKMCLDSEDIROSCBGZHXFOIUUKTRWIMZKNPHZEKMHKMHOSSIOHOPVIFTMSTFORITPHGERAITSROPRALHASLKHEHIIPLGVMSMCBDMSKHOPLPEDEHEKEASHSITDLVORHTMDCPFIUXDMFIUKMCDMONPSIHXFOIUKMLGSUKMOHIWBYICHOOPRMVMREMNOPSIMULKHEHIIPCNCLEKQOATWESISMEHSRCBHXFOIUKMKDHOILDSKWRDRMRZZEOPRVLDTRSVPHRVHNEVITKWVNTNFHCHMFIUVMWHUAMSHSITALVHPHORITXMSEIHMFIUOPPETDSIELSIZAAYLHWDUCOSITEGDKHOOPPEDEOPVMSMHNOLRSHNRZZEOPRVLDTRSVPHRVWEVUMZSVHXFOIUKMCGMZTDWIDIQEREITOEFPMUSLHOTDRSMUHISIHNKFKMHKLHASIGZOITTDMTVDMFIUKMIKORRSTDWQDMZSITIGVEMZOHORITOIKMISHSITOENHFTHOCZHNVOOPRAHEHIMNOPVMMUVEKWTKTFGIMNOPNTRVLDTRSVPHRVHXFOIUEKLCMXTMORITIEXDDPDMVDMFIUKMHSITSRDETNIMHIWEXIMXMSHVSIALOPOPMIGBRPIPEHEHRKSMRTRSGDRAHNSHFTHOCZIQVFELSIOPRVPHRVDMOHOPTIMZVRKMHKIWIVHSITFMOSITEPRWSIHOOPSMTDVIUITMZEKUUAOSHOITIEXDDPDMEKDKEKLCAUIUXOHMGEOHUSRZQIPSMFUQGMEPDKGMHDVIMFIUNMELUIEGSROPVUALCFWBFTVBWUMZEOSIHOIQXGMZITHWIMMLDKXUKWZVITIEXDDPDMEKDKOPRAHEHIMLSVRHMONPSIPEMXMUXMOPRSHXFOIUKMHSITMKSHFTHOCZHXFOIUKMHSITDNPHNPOPMATLMUKNHNEPVOOPVMMUVEHXFOIUXMROWELFMFITSRHXFOIUEKLCMXVIMFIUOPRSMAEKBSMUSHRVRSVHMFIUKMKDMXVIMZDCDLTROHLVNTEDSHHOHEDEOPRVUIMUVOOPRVMZOPHXFOIUEKLCKMHOITVLMFIUNMELIPTRURSMOPRSMUDKVRSMHEHNVOOPRVMZOPDEOPVIMZOSVBMNOPVAEUCDDMSNHNEHUIOHDCHXFOIUEKLCOPREILSLIUXDMFIUOPPEHEDEOPRVUIMUVOOPRARVSHHOKMHSIPVHMZOSVBHXFOIUPLRSREITALDGAMRDCEVIMFIUDEEBIRLGZVITALDQSIALVHPHORITARVEHXFOIUPLFPMZDCIUASZXZIRSRDQEMAXBMZAWVNVRCIRSKWGCHOOPSMFTOPDEXUPHIMHXFOIUEKLCOPTMDCIWCGHXFOIUKMIKEHEVSIUSDEOPRVUISUSRPEISVRSEOPPEEGVFTFGMKNOPDEIWDKMNHTHNEHIULFUACHMFIUXUISWEHXFOIUZXBALDDIQEREFHCERAHEIZNKHOHNTFOPZGSUKMOHTNUWVOOPDEHXFOIUNMSVITMRHRHFMSCBUIMXUKCFHRITVRVEEWDSTATMWHSIHOITSEMUSVVRMISIOHBSAMTROPSADMCIMUSESIIEXDDPDMVDMFIUNMSEITUCFOIMCLPERIZVMONPMZVOOPMATLKMKGRSHIAMNRKMLGSUKMOHARTAWITNHNEPRNFTOPRIHERHTMDCPFIUXDMFIUTDREMONPMNOLRSIQAWDKUWIWXDSIOPTAMHOSMXOPVMSMHNOLRSXMVRHXFOIUPLLDRVITHXGMERHNMSHXFOIURPXHMFIUOPSRMAMKTNIRFXTXLHSIHOPEMXIVOPVIWAHIKMUSHSMPRDPEVIMFIUMXPLLHLPKEBFHEERMDFGDUHXFOIUPLHEVIIPDWIUSWRDREHNTFOPZYHOHOITHLVZMNMIRSWIKNOPRIHERHTMDCPFIUOSMONPOPRVIWERLFMFITSFNTVIMFIUKMCIQEDMBSMUHSITPFSLTNMDVHMFIUKEASCHMFIUDEZXBEMKIMHNTFOPVQMFIUXUISWEUVVDMFIUKMRKRSSIOPVIILDCHXFOIUHFNPDMYBAWDKLSUCDSITSEMUSVHNVOOPSMZXEIGESZHOHOITHLVZMNMIRSWIKNHNOZRSIPKTHTALCFDIRIQZMZHNRPITSRDEOPDEHLVZKEASCNHNTFOPGCHOHEDEVMQIRHUCOSITIVOSRSMNOPVIMZOSVBHXFOIUKMCLVSBISIGZHTHXFOIUOPSUSRPEALUPSLHEFHCGMZMN";
const keysToTry = [ 
    ["U","G","X","Y","Q",
     "S","P","R","N","Z",
     "I","M","T","K","O",
     "V","E","C","L","A",
     "D","W","F","B","H"]
];

//tryExample();
//runN(randomKey, 10000); //found a successful key! -> U,G,X,Y,Q,S,P,R,N,Z,I,M,T,K,O,V,E,C,L,A,D,W,F,B,H

let result = playfair(ciphertext, keysToTry[0]);
console.log(result);

function runN(keyFunc, iterations) {
    let successfulKeys = []
    let count;

    let start = Date.now();;
    for (count = 0; count < iterations; count++) {
        let key = keyFunc();        
        let keySuccess = runOne(key); // keys is from PlayfairKeys.js

        if (keySuccess) {
            successfulKeys.push(key);
        }
    }
    let end = Date.now();
    console.log(`${end - start} ms taken to evaluate ${iterations} keys and find ${successfulKeys.length} succesful keys. ${successfulKeys}`);
}

function runOne(key) {
    let start = Date.now();
    let result = playfair(ciphertext, key)
    let end = Date.now();
    
    let success = false;
    let report = `Time taken to check key ${key}: ${end - start} ms`;
    if (result.indexOf("COMMA") != -1 && result.indexOf("DOT") != -1) {
        report += "\nCOMMA and DOT found in plaintext!"
        success = true
    }
    
    console.log(report);
    return success;
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