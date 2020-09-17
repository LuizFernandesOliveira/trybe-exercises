const statesFromBrazil = [
  {id: 'ac', name: 'Acre'},
  {id: 'al', name: 'Alagoas'},
  {id: 'ap', name: 'Amapá'},
  {id: 'am', name: 'Amazonas'},
  {id: 'ba', name: 'Bahia'},
  {id: 'ce', name: 'Ceará'},
  {id: 'es', name: 'Espírito Santo'},
  {id: 'go', name: 'Goiás'},
  {id: 'ma', name: 'Maranhão'},
  {id: 'mt', name: 'Cuibá'},
  {id: 'ms', name: 'Mato Grosso do sul'},
  {id: 'mg', name: 'Minas Gerais'},
  {id: 'pa', name: 'Pará'},
  {id: 'pb', name: 'Paraíba'},
  {id: 'pr', name: 'Paraná'},
  {id: 'pe', name: 'Pernambuco'},
  {id: 'pi', name: 'Piauí'},
  {id: 'rj', name: 'Rio de janeiro'},
  {id: 'rn', name: 'Rio Grande do Norte'},
  {id: 'rs', name: 'Rio Grande do Sul'},
  {id: 'ro', name: 'Rodônia'},
  {id: 'rr', name: 'Roraima'},
  {id: 'sc', name: 'Santa Catarina'},
  {id: 'sp', name: 'São Paulo'},
  {id: 'se', name: 'Sergipe'},
  {id: 'to', name: 'Tocantins'},
];

const getSelectState = () => document.getElementById('state');

const createOptionSelect = () => document.createElement('option');

function insertOptionInSelectState(option) {
  let stateSelect = getSelectState();

  stateSelect.appendChild(option);
}

function createOptions() {
  for(let state of statesFromBrazil) {
    let option = createOptionSelect();
    option.value = state.id;
    option.innerText = state.name;
    insertOptionInSelectState(option);
  }
}

window.onload = createOptions;
