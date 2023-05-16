// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export async function getMenu() {


    const res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/navigation/render/1?type=TREE`);
    // console.log(res);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
