import EmptyStateStyle from "./EmptyStateStyle";

type EmptyStateProps = {
  header: string;
  text: string;
};

const EmptyState = ({ header, text }: EmptyStateProps) => {
  return (
    <EmptyStateStyle>
      <div className={`empty-state`}>
        <img
          src="https://res.cloudinary.com/dn9dkcxvs/image/upload/v1723809406/empty_state_image_qybc7f.jpg"
          alt="empty-icon"
        />

        <h2>{header}</h2>
        <p>{text}</p>
      </div>
    </EmptyStateStyle>
  );
};

export default EmptyState;
