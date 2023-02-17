import axios from 'axios';

const deleteRecord = (id) => {
    axios.delete(`https://example.com/api/records/${id}`)
        .then((response) => {
            // atualize a interface do usuário para refletir a exclusão do registro
        })
        .catch((error) => {
            // lide com erros na solicitação DELETE
        });
}
