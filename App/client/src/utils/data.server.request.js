export async function getMenu() {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/navigation/render/1?type=TREE`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getMenuItem(url) {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/navigation/render/1?path=${url}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getSlider() {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/slider?populate[slides][populate]=*`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function get15Products() {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/products?populate[0]=image&populate[1]=categories&pagination[limit]=15`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getOfficialLinks() {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/official-link?populate[links][populate][0]=*&populate[imageLinks][populate][1]=image&populate[socials][populate][2]=image`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getCop() {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/cop`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getProduct(id) {
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/products/${id}?populate=*`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}