const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());

const registers = [];

function validateRegisterId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid register ID.'});
    }

    return next();
}

app.use('/registers/:id', validateRegisterId);

app.get('/registers', (request, response) => {
    const { name } = request.query;

    const results = name
        ? registers.filter(register => register.name.includes(name))
        : registers;
    
    return response.json(results);
});

app.post('/registers', (request, response) => {
    const { name, email, cpfoucnpj, telephone, cep, logradouro, number, neighborhood,
            city, state } = request.body;

    const register = { 
                        id: uuid(), 
                        name,
                        email,
                        cpfoucnpj,
                        telephone,
                        cep,
                        logradouro,
                        number,
                        neighborhood,
                        city,
                        state
                    };
    
    registers.push(register);

    return response.json(register);
});

app.put('/registers/:id', (request, response) => {
    const { id } = request.params;
    const { name, email, cpfoucnpj, telephone, cep, logradouro, number, neighborhood,
        city, state } = request.body;

    const registerIndex = registers.findIndex(register => register.id === id);
    
    if (registerIndex < 0) {
        return response.status(400).json({ error: 'Register not found.' })
    }

    const register = {
        id,
        name,
        email,
        cpfoucnpj,
        telephone,
        cep,
        logradouro,
        number,
        neighborhood,
        city,
        state
    };

    registers[registerIndex] = register;

    return response.json(register);
});

app.delete('/registers/:id', (request, response) => {
    const { id } = request.params;

    const registerIndex = registers.findIndex(register => register.id === id);
    
    if (registerIndex < 0) {
        return response.status(400).json({ error:'register not found.' })
    }

    registers.splice(registerIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log(' S2 Back-end Started');
});