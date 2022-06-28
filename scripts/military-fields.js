const fields = document.querySelector('.military-fields');
const fieldTemplate = document.querySelector('#element-template').content;
const fieldsMassive = [];

function createField() {
    const fieldElement = fieldTemplate.querySelector('.military-field').cloneNode(true);
    fieldElement.classList.add('military-field_default');
    fieldElement.addEventListener('contextmenu',(event) => {
        fieldElement.classList.toggle('military-field_flag');
    });
    return fieldElement;
}

function createMassive(a,b,c) {
    for (let i = 0; i <= b; i += 1) {
        fieldsMassive[i] = [];
        for (let j = 0; j <= c; j += 1) {
            fieldsMassive[i][j] = createField();
        }
    }
    const result = [].concat(...fieldsMassive);
    return result;
}

function createFields() {
    const field = createMassive(fieldImages,8,8);
    field.forEach(function(el) {
        fields.append(el);
    })
}

createFields();


