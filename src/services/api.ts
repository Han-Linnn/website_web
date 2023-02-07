import { request } from 'umi';

/// -------动态管理------- ///
export async function getPost(params: any) {
    return request(`/blog/post`, {
        method: 'GET',
        params,
    });
}

/// -------申请试用------- ///
export async function createContact(params: {
    name: string,
    phone: string,
    email: string,
    subject: string,
    company: string,
    position: string,
    intro: string
}) {
    return request(`/about/contact`, {
        method: 'POST',
        data: {
            name: params.name,
            phone: params.phone,
            email: params.email,
            subject: params.subject,
            company: params.company,
            position: params.position,
            intro: params.intro
        },
    });
}

// export async function upload(params: {
//     file: string,

// }) {
//     return request(`/about/contact`, {
//         method: 'POST',
//         data: {

//         },
//     });
// }