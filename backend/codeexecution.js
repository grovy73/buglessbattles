/**
 * 
 * @param {string} content 
 * @returns {object}
 */
export default async function executeJS(content) {
    const pistonUrl = "https://emkc.org/api/v2/piston/"
    const opts = {
        method: "POST",
        body: JSON.stringify({
            language: "javascript",
            version: "1.32.3",
            files: [
                {
                    content: content 
                }
            ]

        })
    }

    const response = await fetch(pistonUrl + "execute", opts)
    return response.json().then((x) => x.run);
}
// Returns object with params stdout, stderr, code, signal, output