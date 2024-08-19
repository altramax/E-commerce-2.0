import ConfirmationModalStyle from "./ConfirmationModalStyles";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  description: string;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  description,
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <ConfirmationModalStyle>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <div className="warning-icon">⚠️</div>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <h3 className="message">{message}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </ConfirmationModalStyle>
  );
};

export default ConfirmationModal;
