async function executeModel(userInput) {
  const response = await fetch("http://localhost:1337/api/model", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer a0db66e011b1ba307a564d36d86b8ae2c3922f5d0735ec851dabe26253e11c7dfcc041c4d8837e8c6d31c70274e00ff3ded86675b339f343202d703fdfba2433063626c2ffa8ce90dbe1864606355b938fafa86d9a2b1324be7c4253d108335d5d3a75cb823bef92521fcf5094d42a3c18204443a62989c757f3ba79ca4ea670`,
    },
    body: JSON.stringify(userInput),
  });

  const data = await response.json();

  return data;
}

export default executeModel;
