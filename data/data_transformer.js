const fs = require('fs');
let sylabs = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "tchi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "hfu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo/o", "n", "ga", "gi", "gu", "ge", "go", "za", "zji", "zu", "ze", "zo", "da", "dji", "dzu", "de", "do", "ba", "bi", "bu", "be", "bo", "pa", "pi", "pu", "pe", "po"]
let digraphs = ["kya", "kyu", "kyo", "sha", "shu", "sho", "cha", "chu", "cho", "nya", "nyu", "nyo", "hya", "hyu", "hyo", "mya", "myu", "myo", "rya", "ryu", "ryo", "gya", "gyu", "gyo", "zja", "zju", "zjo", "dja", "dju", "djo", "bya", "byu", "byo", "pyo", "pyu", "pyo"]
let sokuon = ['kka', 'kki', 'kku', 'kke', 'kko', 'ssa', 'sshi', 'ssu', 'sse', 'sso', 'tta', 'tchi(cchi)', 'ttsu', 'tte', 'tto', 'ppa', 'ppi', 'ppu', 'ppe', 'ppo']
let sylabsExtended = ['yi', 'ye', 'wa', 'wi', 'wu', 'we', 'wo', 'va', 'vi', 'vu', 've', 'vo', 'she', 'je', 'che', 'swa', 'si', 'swu', 'swe', 'swo', 'zwa', 'zi', 'zwu', 'zwe', 'zwo', 'tsa', 'tsi', 'tse', 'tso', 'tha', 'ti', 'thu', 'tye', 'tho', 'dha', 'di', 'dhu', 'dye', 'dho', 'twa', 'twi', 'tu', 'twe', 'two', 'dwa', 'dwi', 'du', 'dwe', 'dwo', 'fa', 'fi', 'hu', 'fe', 'fo', 'ryi', 'rye', 'kwa', 'kwi', 'kwu', 'kwe', 'kwo', 'gwa', 'gwi', 'gwu', 'gwe', 'gwo', 'mwa', 'mwi', 'mwu', 'mwe', 'mwo']
let digraphsExtended = ["wya", "wyu", "wyo", "vya", "vyu", "vyo", "sya", "syu", "syo", "zya", "zyu", "zyo", "tya", "tyu", "tyo", "dya", "dyu", "dyo", "fya", "fyu", "fyo"]
const sortedKatakana = [...sylabs, ...digraphs, ...sokuon, ...sylabsExtended, ...digraphsExtended]
let rawdata = fs.readFileSync('katakana.json');
let katdata = JSON.parse(rawdata);
let newdata = [];
sortedKatakana.forEach((e, i) => {
    let idx = -1;
    const aux = katdata.find((x, ii)=>{
        if(x.sound === e){
            idx = ii;
            return true;
        }
    })
    if(aux){
        newdata.push({...aux, id: i+1});
        katdata[idx] = {id:0, symbol: "", sound: ""};
    }
});

katdata = katdata.filter((e)=>{
    return e.symbol !== "";
})
// console.log(newdata)
if(katdata.length === 0){
    fs.writeFile("./test.json", JSON.stringify(newdata), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

