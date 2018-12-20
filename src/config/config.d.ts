export interface Config {
    localHost: string,
    serverHost: string,
    localApiHost: string,
    serverApiHost: string,

    httpRequestInterval: number,
    uploadInterval: number,
    welcomePageInterval: number
}

declare const config: Config

export default config
