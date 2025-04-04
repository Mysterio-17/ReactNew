function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.clildren
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    clildren :' click me'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)