
async function test() {
    const response = await fetch("http://localhost:9001/execute", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: "console.log('balls');" }),
    })

    return await response.json()
}

test().then(x => console.log(x))