export function addShow(show) {
    console.log(show.lineup)
    return fetch('/api/shows', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(show)
    }).then(res => res.json());
}
