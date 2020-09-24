var cal = new Vue({
    el: '#calculator',
    data: {
        formula: '0',
        result: ''
    },
    methods: {
        addNum: function (val) {
            if (this.formula == '0') {
                this.formula = '';
            }
            this.formula += val;
            this.result = this.formula;
        },
        addOp: function (op) {
            if (this.formula == '0') {
                this.formula = '';
            }
            this.formula += op;
            this.result = this.formula;
        },
        clear: function () {
            this.formula = '0';
            this.result = this.formula;
        },
        remove: function () {
            this.formula = this.formula+'';
            let len = this.formula.length;
            len === 1 ? this.formula = '0' : this.formula = this.formula.split('').slice(0, len-1).join('');
            this.result = this.formula;
        },
        calculate: function () {
            try {
                this.formula = eval(this.result)
            } catch(e) {
                this.formula = 'ERR';
            };
        }
    }
});