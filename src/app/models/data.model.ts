export interface Image {
    src: string;
    caption: string;
    loaded: boolean;
}

export interface CrescentProjectDataModel {
    label: string;
    description: string;
    infoSections: {
        label: string,
        description: { 
            label: string,
            description: string[] 
        }[]
    }[];
    previews: DarkLightModeImgModel[];
}

export interface DarkLightModeImgModel {
    label: string;
    description: string;
    list: string[];
    images: { 
        light: Image[], 
        dark: Image[] 
    }
}

export interface QuotesProjectDataModel {
    label: string;
    description: string;
    infoSections: {
        label: string,
        description: { 
            label: string, 
            description: string[] 
        }[]
    }[];
    previews: SimpleImgModel[];
}

export interface SimpleImgModel {
    label: string;
    description: string;
    list: string[];
    images: Image[]
}

export interface Contact { 
    link: string;
    tooltip: string;
    icon: string;
}

export interface Skill {
    label: string;
    images: string[];
}