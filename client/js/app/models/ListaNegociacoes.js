class ListaNegociacoes {
    
    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // [].concat() retorna uma cópia da lista evitando que os dados sejam alterados.
        return [].concat(this._negociacoes);
    }
}