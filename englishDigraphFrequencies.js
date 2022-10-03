import {readFileSync, promises as fsPromises} from 'fs';

const englishDigraphFrequencies = getDigraphFrequencies("bigtext.txt"); // bigtext.txt is downloaded from https://norvig.com/big.txt
const enlishDigraphsDescendingFrequencyOrder = sortDigraphsByFrequencyDescending(englishDigraphFrequencies);

function syncFileRead(filename) {
    let contents = readFileSync(filename, "utf-8");
    contents = contents.replace(/[^a-zA-Z]/g, "");
    contents = contents.toUpperCase();

    // console.log(contents.slice(0, 1000));
    
    if (contents.length % 2 !== 0) {
        contents += "E";
    }
    // console.log(contents.length);

    return contents;
}

function textToDigraphs(str) {
    let digraphs = [];
    for (let i = 0; i < str.length; i += 2) {
        digraphs.push(str.slice(i, i+2));
    }
    return digraphs;
}

function getDigraphFrequencies(filename) {
    const digraphs = textToDigraphs(syncFileRead("bigtext.txt"));
    let digraphFrequencies = {};

    for (let i = 0; i < digraphs.length; i++) {
        if (digraphFrequencies.hasOwnProperty(digraphs[i])) {
            digraphFrequencies[digraphs[i]] += 1;
        } else {
            digraphFrequencies[digraphs[i]] = 1;
        }
    }

    for (const dg in digraphFrequencies) {
        if (digraphFrequencies.hasOwnProperty(dg)) {
            digraphFrequencies[dg] /= digraphs.length;
            digraphFrequencies[dg] *= 100; 
        }
    }
    // console.log(digraphFrequencies);
    return digraphFrequencies;
}

function sortDigraphsByFrequencyDescending(digraphFrequenciesMap) {
    let digraphsInDescendingFrequencyOrder = [];
    for (const dg in digraphFrequenciesMap) {
        if (digraphFrequenciesMap.hasOwnProperty(dg)) {
            digraphsInDescendingFrequencyOrder.push([dg, digraphFrequenciesMap[dg]]);
        }
    }
    digraphsInDescendingFrequencyOrder = digraphsInDescendingFrequencyOrder.sort((a, b) => {
        return a[1] - b[1];
    }).reverse();
    // console.log(digraphsInDescendingFrequencyOrder.slice(0, 100));
    return digraphsInDescendingFrequencyOrder;
}

export {
    englishDigraphFrequencies,
    enlishDigraphsDescendingFrequencyOrder
}