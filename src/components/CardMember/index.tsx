import { ButtomIcon } from "@components/ButtomIcon";
import { Container, Name } from "./style";

type Props = {
    name: string;
    onRemove: () => void;
}

export function CardMember({ name, onRemove }: Props){
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
                onPress={onRemove}
            />
        </Container>
    )
}