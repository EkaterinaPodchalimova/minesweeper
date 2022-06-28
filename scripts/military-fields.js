const fields = document.querySelector('.military-fields');
const fieldTemplate = document.querySelector('#element-template').content;
const fieldsMassive = [];

function createField(a) {
    const fieldElement = fieldTemplate.querySelector('.military-field').cloneNode(true);
    fieldElement.classList.add('military-field_default');
    fieldElement.addEventListener('contextmenu',(event) => {
        fieldElement.classList.toggle('military-field_flag');
    });
    return fieldElement;
}

function createMassive_9_9(a) {
    for (let i = 0; i <= 8; i += 1) {
        fieldsMassive[i] = [];
        for (let j = 0; j <= 8; j += 1) {
            fieldsMassive[i][j] = createField(a);
        }
    }
    const result = [].concat(fieldsMassive[0],fieldsMassive[1],fieldsMassive[2],fieldsMassive[3],fieldsMassive[4],fieldsMassive[5],fieldsMassive[6],fieldsMassive[7],fieldsMassive[8]);
    return result;
}

function createFields() {
    const field = createMassive_9_9(fieldImages);
    field.forEach(function(el) {
        fields.append(el);
    })
}

createFields();


