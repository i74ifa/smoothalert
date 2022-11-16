import defaultProps from "./defaultProps"

export default class ParamsSmoothAlert {
    constructor(params, node) {
        params = { ...defaultProps, ...params }
        this.node = node
        this.text = params.text
        this.direction = params.direction
        this.delay = params.delay
        this.buttonRemove = params.buttonRemove
        this.buttonRemoveText = params.buttonRemove
        this.autoHide = params.autoHide;
    }

    setParams() {
        this.node.style.direction = this.direction
        if (this.autoHide) {
            this.#delay()
        }
    }

    /**
     * set delay smoothalert
     * @return void
     */
    #delay() {
        setInterval(() => {
            this.node.classList.add('vue-smoothalert__pop-bye');
        }, this.delay);

        setInterval(() => {
            this.node.remove();

        }, this.delay + 1200)
    }
}