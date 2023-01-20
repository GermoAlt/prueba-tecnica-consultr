const baseUrl = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api"

export async function getHeroes() {
    return await fetch(baseUrl + "/all.json")
}