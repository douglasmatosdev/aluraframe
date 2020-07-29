class View {
    /**
     * As classes filhas deveram utilizar o método super()
     * para extender a classe pai.
     */
    constructor(elemento) {

        this._elemento = elemento;
    }

    /**
     * As classes filhas devem implementar o método template,
     * caso contrário, será lançado um erro.
     */
    template(model) {

        throw new Error('O método template deve ser implementado');
    }

    /**
     *  Este método será herdado por padrão ao extender esta classe
     */
    update(model) {

        return this._elemento.innerHTML = this.template(model);
    }
}