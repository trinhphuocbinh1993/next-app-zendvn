// get all
export async function getAll(url_path) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}${url_path}`);
  const data = await response.json();
  return data;
}

// get by id
export async function getById(url_path, id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}${url_path}${id}`
  );
  const data = await response.json();
  return data;
}

// insert one
export async function insertOne(url_path, body) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}${url_path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = response.json();
  return data;
}

// update one
export async function updateOne(url_path, body, id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}${url_path}${id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = response.json();
  return data;
}

// delete one
export async function deleteOne(url_path, id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}${url_path}${id}`,
    {
      method: "DELETE",
    }
  );
  const data = response.json();
  return data;
}
