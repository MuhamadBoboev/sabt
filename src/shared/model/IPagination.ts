export interface IPagination {
  links: IPaginationLink
  meta: {
    current_page: number
    from: number
    last_page: number
    links: IPaginationMetaLink[]
    path: string
    per_page: number
    to: number
    total: number
  }
}

interface IPaginationLink {
  first: string
  last: string
  prev: string | null
  next: string | null
}

interface IPaginationMetaLink {
  url: string | null
  label: string
  active: boolean
}
