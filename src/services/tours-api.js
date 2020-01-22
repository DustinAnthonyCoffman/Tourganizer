

export function create(tour) {
    return fetch('/', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(tour)
    }).then(res => res.json());
}


export function getAll() {
  try{
    return fetch('/api/tours')
    .then(res => res.json())
  }
  catch(error) {
    throw new Error(error)
  }

}

export function deleteOne(id) {
    return fetch(`${'/'}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}


export function update(tour) {
    return fetch(`${'/'}/${tour._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(tour)
    }).then(res => res.json());
}