class Indexer {
    constructor() {
        
        this.count = 0;
    }
    next() {
        return this.count++;
    }
}
const indexer = new Indexer();
class State {
    constructor(handler, element) {
        
        this.handler = handler;
        this.key = '' + element + indexer.next();
    }
    refresh(value) {
        localStorage.setItem("prev"+this.key, value);
        this.handler(value);
    }
    get() {
        return this.handler;
    }
}


class Depth {
    constructor(html) {
        this.html = html;
    }
    rmv() {
        this.html = this.html.parentElement;
    }
    add(html) {
        this.html = html;
    }
}

const rootHTML = document.getElementById("root");

    
let depth = new Depth(rootHTML);
function createComponentToHTML(htmlKey, param, content){
    const self = document.createElement(htmlKey);
    for (const key in param) {
        self.setAttribute(key, param[key]);
    }
    self.innerHTML = content;
    depth.html.appendChild(self);

    return self;
}

const TAGS = {
    LABEL: {class: "label-container"},
    ROW: {class: "row-container"},
    COLUMN: {class: "column-container"},
    GRID: {class: "grid-container"},
}


function cGrid(htmlParam){
    const param = {...htmlParam, ...TAGS.GRID };  
    const a = createComponentToHTML("div", param, null);
    depth.add(a);
}

function cDiv(htmlParam){
    const param = {...htmlParam };  
    const a = createComponentToHTML("div", param, null);
    depth.add(a);
}

function cRow(htmlParam){
    const param = {...htmlParam, ...TAGS.ROW};  
    const a = createComponentToHTML("div", param, null);
    depth.add(a);
}

function cColumn(htmlParam){
    cRow({id: "column-intermidiary"});
    const param = {...htmlParam, ...TAGS.COLUMN};  
    const a = createComponentToHTML("div", param, null);
    depth.add(a);
}

function cText(content,htmlParam){
    // htmlParam?.class = htmlParam?.class ?
    // htmlParam.class + " " + TAGS.LABEL.class :
    // TAGS.LABEL.class;
    
    const param = {...htmlParam, ...TAGS.LABEL};  
    const innerContent = content || "";
    const a = createComponentToHTML("p", param, innerContent);
    const state = new State((x)=>{a.innerHTML = x}, a.localName);
    return state;
}

function cButton(content, onClick, htmlParam){
    const param = {...htmlParam, ...TAGS.LABEL};  
    const innerContent = content || "";
    const a = createComponentToHTML("button", param, innerContent);
    a.addEventListener("click", onClick);
}


function end(){
    depth.rmv();
}

function resetScreen(){
    depth.add(rootHTML);
    rootHTML.innerHTML = null;
}

window.addEventListener("load", () => {
    cRoot();
});