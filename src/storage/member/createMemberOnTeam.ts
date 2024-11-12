import AsyncStorage from "@react-native-async-storage/async-storage";
import {MEMBER_COLLECTION} from "../storageConfig"
import { AppError } from "@utils/AppError";
type MemberStorageDTO = {
    name: string;
    type: string;
    team: string;
}

export async function createMemberOnTeam(newMember: MemberStorageDTO, team:string){
    try {

        const storedMembers = await AsyncStorage.getItem(`${MEMBER_COLLECTION}-${team}`);

        const members: MemberStorageDTO[] =  storedMembers ? JSON.parse(storedMembers) : []

        const membersAlreadyExists = members.filter(member => member.name === newMember.name)

        if (membersAlreadyExists.length > 0){
            throw new AppError("Esse membro ja esta adicionado")
        }

        const storage = JSON.stringify([...members, newMember]);
        
        console.log("Matheus")

        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, storage);
    } catch (error) {
        throw error;
    }
}