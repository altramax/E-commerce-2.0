import styled from "styled-components";

const ConfirmationModalStyle = styled.div`

.modal-backdrop {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-container {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  z-index: 1001;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.warning-icon {
  color: #f44336;
  font-size: 32px;
}

.close-button {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 16px;
  text-align: center;
}

.message {
  font-size: 18px;
  margin: 0;
  color: #333;
}

.description {
  font-size: 14px;
  color: #777;
  margin-top: 8px;
}

.modal-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}

.cancel-button {
  background: #f1f1f1;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.delete-button {
  background: #f44336;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}



`;

export default ConfirmationModalStyle;