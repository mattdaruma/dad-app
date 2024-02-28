export interface ListingIndex {
    [property: string]: ListingSummary
}
export interface ListingSummary {
    Street: string
    City: string
    State: string
    Zip: string
    Price: number
    ForSale: boolean
    Image: string
    DatePosted: Date
}