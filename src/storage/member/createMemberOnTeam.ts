import AsyncStorage from "@react-native-async-storage/async-storage";
import {MEMBER_COLLECTION} from "../storageConfig"
import { AppError } from "@utils/AppError";
import { MemberStorageDTO } from "./memberStorageDto";
import { getMembersByTeam } from "./getMembersByTeam";


export async function createMemberOnTeam(newMember: MemberStorageDTO, team:string){
    try {


        const storedMembers = await getMembersByTeam(team);


        const membersAlreadyExists = storedMembers.filter(member => member.name === newMember.name)

        if (membersAlreadyExists.length > 0){
            throw new AppError("Esse membro ja esta adicionado")
        }

        const storage = JSON.stringify([...storedMembers, newMember]);
        
        console.log("Matheus")

        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, storage);
    } catch (error) {
        throw error;
    }
}