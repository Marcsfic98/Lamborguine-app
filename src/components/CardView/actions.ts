import { fetchGetCarData } from "../../apis/getCars";
import { CarModel } from "./props";

export const loadCarData = async(id:number , setCarData:React.Dispatch<React.SetStateAction<CarModel | null>>) =>{
    const response =  await fetchGetCarData(id);
    try{
        if(response){
            setCarData(response);
            
        }
    }catch(error){
        console.log(error);
        setCarData(null);
    }
};


export const handlePreviousItem = async(carData: CarModel | null,setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) =>{
    let response = null;

    try{
        if(carData && carData?.id > 1){
            response = await fetchGetCarData(carData.id - 1)

             
        }

        if(response){
            setCarData(response)
         }
       
        
    }catch(error){
        console.log(error)
        setCarData(null)
    }
};

export const handleNextIten = async(carData: CarModel | null,setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) =>{
    let response = null;

    try{
        if(carData && carData?.id < 10){
            response = await fetchGetCarData(carData.id + 1)

             
        }

        if(response){
            setCarData(response)
         }
       
        
    }catch(error){
        console.log(error)
        setCarData(null)
    }
};