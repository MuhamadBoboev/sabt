import { IGallery } from "@shared/model/IGallery"
import { IPagination } from "@shared/model/IPagination"

export interface IProjectCard {
    address: string,
    completion_date: string,
    description: string,
    id: number,
    image: string,
    is_residence: string | null,
    gallery_images: IGallery[]
    lang_id: string,
    phone: string | null,
    quantity_rooms: string,
    status: string | null,
    title: string,
    type: string,
    type_color: string
}

export interface IResidences {
    area: string,
    description: string | null,
    floor: number,
    id: number,
    image: string,
    price: string,
    residence: IProjectCard | null
    room_count: number,
    title: string
}

export interface IResidencesData extends IPagination {
    data: IResidences[]
}