function dijkstra(graph, start) {
    // Tableau pour stocker les distances les plus courtes de start à chaque sommet
    const distances = {};
    // File d'attente pour explorer les sommets, commence avec le sommet de départ
    const queue = [start];
    // Distance de start à lui-même est 0
    distances[start] = 0;

    // Tant que la file d'attente n'est pas vide
    while (queue.length > 0) {
        // Prendre le premier sommet de la file d'attente
        const currentVertex = queue.shift();

        // Parcourir les voisins du sommet actuel
        for (let neighbor in graph[currentVertex]) {
            // Calculer la distance jusqu'à ce voisin en passant par le sommet actuel
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            // Si la distance est plus courte que la distance enregistrée précédemment,
            // mettre à jour la distance et ajouter ce voisin à la file d'attente
            if (!distances[neighbor] || distance < distances[neighbor]) {
                distances[neighbor] = distance;
                queue.push(neighbor);
            }
        }
    }

    // Retourner les distances les plus courtes de start à tous les autres sommets
    return distances;
}

// Exemple d'utilisation
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));
