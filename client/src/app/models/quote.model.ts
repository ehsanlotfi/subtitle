export enum QuoteType
{
    EASY,
    MEDIUM,
    HARD
}

export interface Quote
{
    Id: number;
    Content: string,
    Trans: string,
    Season: number,
    Capture: number,
    Type: QuoteType,
    DateSeen: number,
    CntSeen: number
}