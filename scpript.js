function cRoot(){
    japoneseScreen();
}

function japoneseScreen() {
    resetScreen();
    const handle = (e)=>{
        text1.refresh(`${e.sound}`)
        symbol1.refresh(e.symbol);
    };
    cRow({id: "symbol"});
    const symbol1 = cText(null, {id: "big-label"});
    const text1 = cText(localStorage.getItem("prevsymbol"), {id: "big-label"});
    end();
    cRow();
        cText("KANJI", {id: "title"});
    end();
    cGrid();
        HIRAGANA.forEach(element => {
            let paramClass = null;
            if (element.id === 75 || element.id === 114) {
                paramClass = {id: "break-grid-column"}
            }
            cButton(element.symbol, ()=>{handle(element)}, paramClass);
        });
    end();
    cRow();
        cText("KATAKANA", {id: "title"});
    end();
    cGrid();
        KATAKANA.forEach(element => {
            let paramClass = null;
            if (element.id === 72 || element.id === 120) {
                paramClass = {id: "break-grid-column"}
            }else if(element.id >= 156){
                paramClass = {style: "max-width: 32px;"} 
            }
            cButton(element.symbol, ()=>{handle(element)}, paramClass);
        });
    end();
    cRow();
        cText("KANJI", {id: "title"});
    end();
    cGrid();
        KANJI.forEach(element => {
            cButton(element.symbol, ()=>{handle(element)});
        });
    end();
    cRow({style: "padding-top: 200px"});
    end();    
}

function arabicScreen() {
    resetScreen();

    cRow();
        cText("hey arab")
    end()
}

function englishScreen() {
    resetScreen();

    cRow();
        cText("hey mate")
    end()
}

