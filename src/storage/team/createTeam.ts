import AsyncStorage from "@react-native-async-storage/async-storage";

import { TEAM_COLLECTION } from "../storageConfig";
import { fetchAllTeams } from "./fetchAllTeams";
import { AppError } from "@utils/AppError";

export async function createTeam(newTeam: string){
    try {

        const storedTeams = await fetchAllTeams();

        const teamsAlreadyExists = storedTeams.includes(newTeam);
        if(teamsAlreadyExists){
            throw new AppError("Já existe uma equipe com este nome")
        }


        const storage = JSON.stringify([...storedTeams,newTeam]);
        
        
        await AsyncStorage.setItem(TEAM_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
    
}