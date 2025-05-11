// import { IGallery } from "@shared/model/IGallery"

import { IGallery } from "@shared/model/IGallery"

export interface IProfile {
    id: number
    name: string,
    description?: string,
    link?: string
    steps?: {
        step: string
    }[]
    image: string
    images?: IGallery[]
}
