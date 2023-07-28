
interface ButtonProps {
    children: string;
    color?: 'primary' | 'secondary' | "success" | "danger" | "warning";
    onButtonClick: () => void;
}
const Button = ({ children, color = "danger", onButtonClick }: ButtonProps) => {
    return (
        <button type="button" className={"btn btn-" + color} onClick={onButtonClick}>{children}</button>
    )
}

export default Button