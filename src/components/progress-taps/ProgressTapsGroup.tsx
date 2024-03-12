import {styled} from "styled-components";
import {FlexCenterBox} from "../../common/FlexCenterBox";
import ProgressTapsButton from "./ProgressTapsButton";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {setFilterStatus} from '../../slice/TodoSlice'

const StyledProgressTapsGroup = styled.div`
    width: 480px;
    height: 60px;
    gap: 4px;
    ${FlexCenterBox}
`;


const ProgressTapsGroup = () => {

    const filterStatus = useAppSelector((state) => state.todos.filterStatus)
    const dispatch = useAppDispatch()

    const handleFilterChange = (filter: string) => {
        dispatch(setFilterStatus(filter))
    };

    return (
        <StyledProgressTapsGroup>
            {filterStatus.map((value, index: number) => (
                <ProgressTapsButton key={index}
                                    onClick={() => handleFilterChange(value.name)}
                                    name={value.name}
                                    isSelected={value.isSelected}
                />
            ))}
        </StyledProgressTapsGroup>
    );
};

export default ProgressTapsGroup;