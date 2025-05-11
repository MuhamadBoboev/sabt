export interface IService {
    id: number
    name: string 
    description?: string 
    image: string 
    services: IServiceItem[]
    link?: string
    linkText?: string
}

export interface IServiceItem {
    name: string 
    description: string
}