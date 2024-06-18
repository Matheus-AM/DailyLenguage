function cRoot(){
    cRow();
    const text1 = cText("_");
    end();
    cRow();
        cText("KANJI", {class: "title"});
    end();
    cGrid();
    HIRAGANA.forEach(element => {
        let paramClass = null;
        if (element.id === 75) {
            paramClass = {class: "break-grid-column"}
        }
        cButton(element.symbol, ()=>{text1.refresh(`${element.sound} `)}, paramClass);
    });
    end();
    cRow();
        cText("KATAKANA", {class: "title"});
    end();
    cGrid();
    KATAKANA.forEach(element => {
        let paramClass = null;
        if (element.id === 72 || element.id === 120) {
            paramClass = {class: "break-grid-column"}
        }else if(element.id >= 156){
            paramClass = {style: "max-width: 32px;"} 
        }
        cButton(element.symbol, ()=>{text1.refresh(`${element.sound} `)}, paramClass);
    });
    end();
    cRow();
        cText("KANJI", {class: "title"});
    end();
    cGrid();
    KANJI.forEach(element => {
        cButton(element.symbol, ()=>{text1.refresh(`${element.sound} | ${element.meaning}`)});
    });
    end();
}
