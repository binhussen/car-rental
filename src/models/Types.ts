export interface CarDTO {
    displayName: string;
    ownerFullName: string;
    price: number;
    negotiable: boolean;
    yearManufactured: number;
    datePosted: Date;
    postOwnerType: number;
    make: string;
    model: string;
    ownerAddress: ownerAddress;
    engineType: string;
    gearPosition: string;
    vehicleType: string;
    distanceCovered: number;
    VehicleType: string;
    category: string;
    transmission: string;
    condition: string;
    images: carImage[];
    postedFor: string; // rental or sell

}
export interface carImage {
    fileName: string;
    caption: string
    address: string
    side: string;
}

export interface ownerAddress {
    fullName: string;
    phoneNumber: string;
    whatsapp?: number;
    telegram: string;
    email: string;
}