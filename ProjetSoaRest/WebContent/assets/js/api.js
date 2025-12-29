// WebContent/assets/js/api.js

// Base URL from web.xml mapping + context path
const BASE_URL = 'http://localhost:8081/tp_revision/exercice/revision';


async function handleResponse(res) {
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || ('HTTP ' + res.status));
    }
    const ct = res.headers.get('Content-Type') || '';
    if (ct.includes('application/json')) {
        return res.json();
    }
    return res.text();
}

async function getPersons() {
    const res = await fetch(`${BASE_URL}/persons`, {
        headers: { 'Accept': 'application/json' }
    });
    return handleResponse(res);
}

async function addPerson(p) {
    const res = await fetch(`${BASE_URL}/persons`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(p)
    });
    return handleResponse(res);
}

async function getPersonById(id) {
    const res = await fetch(`${BASE_URL}/persons/${encodeURIComponent(id)}`, {
        headers: { 'Accept': 'application/json' }
    });
    return handleResponse(res);
}

async function updatePerson(id, p) {
    const res = await fetch(`${BASE_URL}/persons/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(p)
    });
    return handleResponse(res);
}

async function deletePerson(id) {
    const res = await fetch(`${BASE_URL}/persons/${encodeURIComponent(id)}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        const t = await res.text();
        throw new Error(t || ('HTTP ' + res.status));
    }
}

async function searchPersonsByName(name) {
    const res = await fetch(`${BASE_URL}/persons/search?nom=${encodeURIComponent(name)}`, {
        headers: { 'Accept': 'application/json' }
    });
    return handleResponse(res);
}
