import "./SwitchBox.css";

interface SwitchBoxProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

const SwitchBox = ({ isOn, onToggle }: SwitchBoxProps) => {
  return (
    <div
      className={`switch-box ${isOn ? "on" : "off"}`}
      onClick={() => {
        onToggle(!isOn);
      }}
    >
      <div className="switch-box__ball"></div>
    </div>
  );
};

export default SwitchBox;
