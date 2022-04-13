export interface HttpInterface {
    get(url: string, params: any);
    post(url: string, body: any);
}
