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
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/products?populate[0]=image&populate[1]=categories&populate[2]=package&pagination[limit]=15`);

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

export async function getWidgetNews(){
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/news?pagination[limit]=6&sort=date:desc&populate=*`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getNews(){
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/news?populate=*&sort=date:desc`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getOneNews(id){
    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/news/${id}?populate=*`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}