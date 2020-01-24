export function addShow(show) {
    return fetch('/api/shows', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(show)
    }).then(res => res.json());
}
