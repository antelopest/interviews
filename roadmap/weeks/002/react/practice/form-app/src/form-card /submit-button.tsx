type SubmitButtonProps = {
  children: React.ReactNode;
};

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return <button type="submit">{children}</button>;
};

export default SubmitButton;