/**
 * Esta classe recebe com herança o método update().
 * Para extender a classe View deve-se implementar o método template.
 */
class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }
    
    // Sobrescrevendo o método template da classe View(pai)
    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}