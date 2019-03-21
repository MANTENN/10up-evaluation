import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const Toast = ({ email }) => (
  <ToastContainer>Thank you for subscribing with <u>{email}</u></ToastContainer>
);

Toast.propTypes = {
  message: PropType.string.isRequired,
};

const ToastContainer = styled.div`
    position: fixed;
    text-align: center;
    color: ${({ theme }) => theme.white}
    background: ${({ theme }) => theme.orange}
    top: 0;
    width: 100%;
    padding: 1em;
`;

export default Toast;
