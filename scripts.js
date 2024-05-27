const players = [
    {
        nome: 'João Silva',
        idade: 25,
        atributos: {
            forca: 8,
            tecnica: 7,
            raca: 9,
            experiencia: 6,
            visaoDeJogo: 7
        }
    },
    {
        nome: 'Carlos Pereira',
        idade: 30,
        atributos: {
            forca: 6,
            tecnica: 8,
            raca: 7,
            experiencia: 8,
            visaoDeJogo: 8
        }
    },
    {
        nome: 'André Santos',
        idade: 22,
        atributos: {
            forca: 7,
            tecnica: 9,
            raca: 8,
            experiencia: 5,
            visaoDeJogo: 6
        }
    },
    {
        nome: 'Lucas Lima',
        idade: 28,
        atributos: {
            forca: 7,
            tecnica: 7,
            raca: 8,
            experiencia: 7,
            visaoDeJogo: 9
        }
    }
];

function calculateOverall(atributos) {
    const total = Object.values(atributos).reduce((sum, value) => sum + value, 0);
    const average = total / Object.values(atributos).length;
    return Math.ceil(average);
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = player.nome;
    card.appendChild(name);

    const age = document.createElement('p');
    age.textContent = `Idade: ${player.idade}`;
    card.appendChild(age);

    for (const [key, value] of Object.entries(player.atributos)) {
        const attribute = document.createElement('p');
        attribute.innerHTML = `<span class="attribute">${key.charAt(0).toUpperCase() + key.slice(1)}:</span> ${value}`;
        card.appendChild(attribute);
    }

    const overall = calculateOverall(player.atributos);
    const overallElement = document.createElement('p');
    overallElement.innerHTML = `<span class="attribute">Overall:</span> ${overall}`;
    card.appendChild(overallElement);

    return card;
}

function displayPlayers(players) {
    const container = document.getElementById('player-cards');
    players.forEach(player => {
        const card = createPlayerCard(player);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayPlayers(players);
});
