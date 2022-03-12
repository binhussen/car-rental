import {CarDTO} from "../models/Types";

export  interface CarStateStore{
    setVehicles:any[],
    Vehicles: any[],
    SelectedVehicle: CarDTO,
    setSelectedVehicle: CarDTO,
    loadVehicles: ()=>void,
    loadVehicle: ()=>CarDTO
}