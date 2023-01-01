export function postFetch(endpoint, bodyObj) {
    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", 
      body: JSON.stringify(bodyObj),
    }).then( res => {
      return res.json();
      }).then(res => {
        if (res.success) return res;
        throw Error(JSON.stringify(res));
      }).catch(e => {
          return {};
      });
}


export function getFetch(endpoint, auth) {
  return fetch(endpoint, {
    method: "GET",
    redirect: "follow",
    headers: {
      Authorization: auth,
    }
  }).then( res => {
    return res.json();
    }).then(res => {
      if (res.success) return res;
      throw Error(JSON.stringify(res));
    }).catch(e => {
        return {};
    });
}