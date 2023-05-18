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