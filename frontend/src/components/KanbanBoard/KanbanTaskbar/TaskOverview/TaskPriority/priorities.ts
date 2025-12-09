import { assets } from "../../../../assets/assets";
import { Priority } from "../../../../types/Priority";
import type { PriorityOption } from "../../../../types/PriorityOption";

const priorities: PriorityOption[] = [
  { value: Priority.Low, label: "Low", imgURL: assets.low },
  {
    value: Priority.Medium,
    label: "Medium",
    imgURL: assets.medium,
  },
  { value: Priority.High, label: "High", imgURL: assets.high },
];

export default priorities;
