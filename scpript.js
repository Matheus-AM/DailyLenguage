function cRoot(){
    cRow();
    const text1 = cText("");
    end();
    cGrid();
    KANJI.forEach(element => {
        cButton(element.kanji, ()=>{text1.refresh(`name: ${element.description} | meanings: ${element.meaning}`)});
    });
    end();
    
}
