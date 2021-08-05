export class Account {
    id: string;
    facebookId: string;
    name: string;
    extraInfo: string;
    token?: string;
}

export class FbAccount {
    access_token: string;
    category: string;
    category_list: { id: string; name: string }[];
    id: string;
    name: string;
    tasks: string[];
}