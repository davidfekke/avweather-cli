
export async function getMetar(icaoId: string): Promise<JSON> {
    const response = await fetch(`https://avwx.fekke.com/metar/${icaoId}`);
    const json = await response.json();
    return json;
}

export async function getTaf(icaoId: string): Promise<JSON> {
    const response = await fetch(`https://avwx.fekke.com/taf/${icaoId}`);
    const json = await response.json();
    return json;
}