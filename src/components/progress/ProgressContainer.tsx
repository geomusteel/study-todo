import ProgressButton from "./ProgressButton";
import {useAppSelector} from "../../hooks";
import {useAppDispatch} from "../../hooks";
import {setFilterStatus} from '../../slice/TodoSlice'

import * as S from './ProgressContainer.style'


const ProgressContainer = () => {

    const filterStatus = useAppSelector((state) => state.todos.filterStatus)
    const dispatch = useAppDispatch()

    const handleFilterChange = (filter: string) => {
        dispatch(setFilterStatus(filter))
    };

    return (
        <S.Wrapper>
            {filterStatus.map((value, index: number) => (
                <ProgressButton key={index}
                                onClick={() => handleFilterChange(value.name)}
                                name={value.name}
                                isSelected={value.isSelected}
                />
            ))}
        </S.Wrapper>
    );
};

export default ProgressContainer;