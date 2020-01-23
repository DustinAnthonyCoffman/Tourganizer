

export function create(tour) {
    console.log(tour)
    return fetch('/api/tours', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(tour)
    }).then(res => res.json());
}


export function getAll(user) {
    try {
    return fetch('/api/tours/get',  {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({user})})
    .then(res => res.json())
  }
  catch(error) {
    throw new Error(error)
  }
}

export function deleteOne(id, userId) {
    return fetch(`/api/tours/${id}`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({userId})
    }).then(res => res.json());
}


export function update(tour) {
    return fetch(`${'/api/tours'}/${tour._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(tour)
    }).then(res => res.json());
}