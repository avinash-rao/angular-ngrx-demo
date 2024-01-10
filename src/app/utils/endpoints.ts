/** Except base url, every endpoint should start with forward slash and should not end with forward slash */
export class Endpoint {
    public static readonly fakersApiBaseUrl = 'https://fakerapi.it/api/v1';
    public static readonly persons = this.fakersApiBaseUrl + '/persons';
}