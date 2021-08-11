import styled from "@emotion/styled/macro";

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #3561d0;
  }
`;

export const NumberText = styled.span`
  margin-right: 30px;
`;
