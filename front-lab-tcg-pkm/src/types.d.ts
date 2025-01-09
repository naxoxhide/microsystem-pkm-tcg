export interface Set {
    id:            string;
    name:          string;
    series:        string;
    printed_total: number;
    total:         number;
    ptcgo_code:    string;
    release_date:  Date;
    updated_at:    Date;
    symbol_url:    string;
    logo_url:      string;
}

export interface Card {
    id:       string;
    name:     string;
    supertype: string;
    subtypes: string;
    types:    string;
    number:   number;
    rarity:   string;
    set:      Set;
}

export interface Image {
    id:      number;
    i_id:    number;
    card_id: string;
    card_name: string;
    image_url:string;
    type:    string;
}