function render(reactEle,root1){
    const Ele=document.createElement(reactEle.type);
    for (const prop in reactEle.props) {
        Ele.setAttribute(prop, reactEle.props[prop]); 
        }
        root1.append(Ele);
    }
const reactEle={
    type:'img',
    props: {
    
        src:'./Ping.png',
        alt:'Loading Image'

    },
}
const root=document.querySelector('#root');
render(reactEle,root);