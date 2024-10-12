function customRender(ReactElement, Container) {
    const Element = document.createElement(ReactElement.type); // Create an element of the type
    Element.innerHTML = ReactElement.children; // Set the inner content (children)

    // Loop through the props
    for (const prop in ReactElement.props) {
        if (prop === 'children') continue; // Skip children, already set as innerHTML
        Element.setAttribute(prop, ReactElement.props[prop]); // Set attributes
    }

    Container.append(Element); // Append the element to the container
}

// ReactElement object
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Go to Google'
};

// Container element
const Container = document.querySelector('#root');
customRender(ReactElement, Container);
