import useSWR from 'swr';

export const host = 'http://127.0.0.1:1337'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function getMenu() {
    const { data, error, isLoading } = useSWR(`${host}/api/navigation/render/1?type=TREE`, fetcher);

    return {
        menu: data,
        getMenuIsLoading: isLoading,
        getMenuIsError: error,
    };
}

export function getMenuItem(url) {
    const { data, error, isLoading } = useSWR(`${host}/api/navigation/render/1?path=${url}&populate=*`, fetcher);
    // console.log(data)

    return {
        menuItem: data,
        getMenuItemIsLoading: isLoading, 
        getMenuItemIsError: error,
    };
}

export function getMenuProductItem(url){
    const { data, error, isLoading } = useSWR(`${host}/api/navigation/render/1?path=${url}&populate[0]=products&populate[1]=products.image&populate[2]=products.package`, fetcher);
    // console.log(data)

    return {
        menuItem: data,
        getMenuItemIsLoading: isLoading, 
        getMenuItemIsError: error,
    };
}


// export async function getMenuItem(url){
//     let res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/navigation/render/1?path=/aboutus`);

//     if(!res[0].parent){
//         res = await fetch(`${process.env.HOST_ADMIN_PANEL}/api/navigation/render/1`);
//         res = res.filter(item => item.parent = null)
//     }

//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     return res.json();
// }

    // const { data, error, isLoading } = useSWR(`${process.env.HOST_ADMIN_PANEL}/api/navigation/render/1`, fetcher)

    // return {
    //     menu: data,
    //     isLoading,
    //     isError: error
    // }