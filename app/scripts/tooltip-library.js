class TooltipMaker {

    constructor() {
        this.$baloonElemsList = document.querySelectorAll('[data-baloon]');
        this.addSpanMouseEvtListeners();
    }

    addSpanMouseEvtListeners () {
        const self = this;

        this.$baloonElemsList.forEach((currentValue, currentIndex, listObj) => {
            currentValue.addEventListener("mouseenter", self.addClass);
            currentValue.addEventListener("mouseleave", self.removeClass);
        });
    }

    addClass() {
        this.classList.add('tooltip');
    }

    removeClass() {
        this.classList.remove('tooltip');
    }
}
