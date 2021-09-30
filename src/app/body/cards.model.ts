export class Card {
    title: string;
    price: string;
    imagePath: string;
    size: string;
    display: string;
    gps: string;
    gpsCellular: string;
    ecg: string;
    heartRate: string;
    familySetup: string;
    waterResistance: string;


    constructor(
    {
        title, 
        price, 
        imagePath,
        size,
        display,
        gps,
        gpsCellular,
        ecg,
        heartRate,
        familySetup,
        waterResistance
    }: 
    {
        title: string, 
        price: string, 
        imagePath: string,
        size: string,
        display: string,
        gps: string,
        gpsCellular: string,
        ecg: string,
        heartRate: string,
        familySetup: string,
        waterResistance: string
    }) 
     {
        this.title = title;
        this.price = price;
        this.imagePath = imagePath;
        this.size = size;
        this.display = display;
        this.gps = gps;
        this.gpsCellular = gpsCellular;
        this.ecg = ecg;
        this.heartRate = heartRate;
        this.familySetup = familySetup;
        this.waterResistance = waterResistance;
    }
}