import AsyncStorage from "@react-native-async-storage/async-storage";

import { TEAM_COLLECTION } from "../storageConfig";
import { fetchAllTeams } from "./fetchAllTeams";

export async function createTeam(newTeam: string){
    try {

        const storedTeams = await fetchAllTeams();

        const storage = JSON.stringify([...storedTeams,newTeam]);
        
        
        await AsyncStorage.setItem(TEAM_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
    
}