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
main();

// Adapted from http://practicalcryptography.com/cryptanalysis/stochastic-searching/cryptanalysis-playfair/
function main() {
    let key = ["Q","R","W","S","Y",
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
                let newScore = playfair(ciphertext, newKey);
                if (newScore > score) {
                    score = newScore;
                } else {
                    let prob = Math.exp((newScore - score) / i);

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