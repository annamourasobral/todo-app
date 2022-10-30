import styled from 'styled-components';

export const StyledTodo = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;

    .completed {
        text-decoration: line-through;
        opacity: 0.5;
    }
`