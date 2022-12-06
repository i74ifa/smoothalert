import defaultProps from "./defaultProps"
import ParamsSmoothAlert from "./SetParams";
import Templates from "./Templates";

const types = ['simple', 'notSimple', 'snowball', 'testTemplate', 'mushy', 'note', 'testName'];
const position = ['left-top', 'left-bottom', 'right-top', 'right-bottom', 'bottom', 'top'];
const prefix = 'smoothalert__'


class SmoothAlert {
    constructor(props) {
        if (typeof props === 'string') {
            props = { ...defaultProps, ...{text: props} }
        }else {
            props = { ...defaultProps, ...props }
        }
        this.typeSmoothAlert = props?.type
        this.props = props
        this.props.icon = eval(`this.props.icons.${this.props.status}`)
        this.html
        this.area
        this.#initialization()
    }

    /**
     * 
     * @param {Object|String} props 
     * @returns {SmoothAlert}
     */
    static pop(props) {
        return new this(props)
    }

    simple() {
        const html = document.createElement('div')
        html.innerHTML = this.props.text
        html.classList.add('smoothalert__smoothalert-simple')
        return html
    }

    snowball() {
        const html = document.createElement('div');
        html.setAttribute('class', 'smoothalert__smoothalert smoothalert__smoothalert-blurry')
        const span = document.createElement('span');
        span.innerHTML = this.props.text
        if (this.props.buttonRemove) {
            const button = document.createElement('button');
            button.classList.add('smoothalert__smoothalert-blurry-close')
            button.type = 'button';
            button.innerHTML = this.props?.buttonRemoveText
            html.appendChild(button)
        }else {
            html.style.paddingTop = '10px' 
            html.style.paddingBottom = '10px' 
        }
        html.appendChild(span)
        return html

    }

    mushy() {
        const html = this.#createElementFromHTML(Templates.mushy(this.props))
        return html
    }

    testTemplate() {
        let html = Templates.blurry(this.props);
        html = this.#createElementFromHTML(html);
        let testDiv = document.createElement('div');
        document.classList.add();
        return html;
    }

    notSimple() {
        return `<div>Is not simple</div>`
    }

    note() {
        const html = this.#createElementFromHTML(Templates.note(this.props))
    }
    
    testName() {
        const html = this.#createElementFromHTML(Templates.testName(this.props))
        html.dataset.type = this.props.status
        console.log(html)
        return html;
    }

    #initialization() {
        let area = document.querySelector(`.smoothalert__area.${this.#getPosition()}`);
        if (area === null) {
            const htmlArea = document.createElement('div');
            htmlArea.setAttribute('class', `${prefix}area ${this.#getPosition()}`);
            document.querySelector('body').appendChild(htmlArea)
        }
        this.area = document.querySelector(`.smoothalert__area.${this.#getPosition()}`);

        this.#renderSmoothAlert()
    }

    #renderSmoothAlert() {
        if (!types.includes(this.typeSmoothAlert)) {
            throw new Error('Smoothalert type ' + this.typeSmoothAlert + ' not found')
        }
        console.log(this.typeSmoothAlert)
        this.html = eval(`this.${this.typeSmoothAlert}()`)
        const newHTML = new ParamsSmoothAlert(this.props, this.html).setParams()
        this.area.appendChild(this.html)

        return this
    }

    #createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        console.log(htmlString)
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes.
        return div.firstChild;
    }

    #getPosition() {
        if (position.includes(this.props.position)) {
            return `${prefix}${this.props.position}`
        }else {
            return `${prefix}${defaultProps.position}`
        }
    }

    dark() {
        this.html.classList.add('smoothalert__smoothalert-dark')
        return this
    }

    bottom() {
        this.props.position = 'bottom'
        return this
    }

    destructor() {
        this.area.appendChild(this.html);
    }
}

export default SmoothAlert