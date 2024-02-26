export interface Listing {
    Images: ListingImage[]
    ForSale: boolean,
    Price: number
    DatePosted: Date
    Longitude: number
    Lattitude: number
    Street: string
    City: string
    State: string
    Zip: string
    LotSize: number
    HomeSize: number
    SizeUnits: 'sqft' | 'km'
    CurrencyUnits: '$'
    Bed: number
    Bath: number
    YearBuilt: Date
    GarageSize: number
    Overview: string
    PropertyFeatures: ListingFeatureCategory[]
    Valuations: ListingValuation[]
    TaxHistory: ListingTaxHistory[]
    EnvironmentalRisk: ListingEnvironmentalRisk
}
export interface ListingImage{
    URL: string
    Title: string
    Description: string
}
export interface ListingFeatureCategory{
    Category: string,
    Features: ListingFeature[]
}
export interface ListingFeature{
    Feature: string
    Value: string
}
export interface ListingValuation{
    Date: Date
    Price: number
    Organization: string
    ForSale: boolean
}
export interface ListingTaxHistory{
    Year: number,
    Land: number,
    Additions: ListingAddition[]
    Price: number
    Taxes: number
}
export interface ListingAddition{
    Count: number,
    Type: 'Bed' | 'Bath'
}
enum Risk {Low, Average, High}
export interface ListingEnvironmentalRisk{
    Flood: Risk
    Fire: Risk
}