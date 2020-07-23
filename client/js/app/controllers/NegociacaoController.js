class NegociacaoController {

    constructor() {

        // Simulando um jQuery, o bind é para manter o contexto do this para document
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {

        return new Negociacao(
            /**
             *  Podemos usar o DataHelper se precisar instânciar 
             *  devido termos criado os métodos como estáticos.
             */
            
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    // Apenas limpa os campos e seta um valor padrão e dá foco no primeiro input
    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}