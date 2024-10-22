import { ButtomIcon } from "@components/ButtomIcon";
import { Container, Name } from "./style";

type Props = {
    name: string;
}

export function CardMember({ name }: Props){
    return (
        <Container>
            <Name> 
                {name} 
            </Name>
            <ButtomIcon 
                icon="delete-outline"
                type="SECONDARY"
                size="SM"
                borderRadius="RIGHT"
            />
        </Container>
    )
}