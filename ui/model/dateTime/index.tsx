import { DatePicker as DatePickerBase, Stack } from "rsuite";
import "rsuite/DatePicker/styles/index.css";
import "./datacss.css";
import { Typography } from "@/ui/model/labels-model";
import { Colors } from "@/theme/palette";
import { Dispatch, SetStateAction } from "react";
interface props {
  onChangeHandler?:Dispatch<SetStateAction<{ value: Date | null; error?: boolean | undefined; }>>;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  value?:Date | null;
}
const DatePicker: React.FC<props> = ({
  label,
  onChangeHandler,
  error,
  errorMessage,
  value
}) => {
  return (
    <Stack direction="column" style={{ alignItems: "flex-start" }}>
      <Typography>{label}</Typography>
      <DatePickerBase
        onChange={(value)=>{onChangeHandler && onChangeHandler({value:value,error:true})}}
        value={value}
        className="datacss"
        format="yyyy-MM-dd HH:mm:ss"
        block
        appearance="subtle"
        style={{ width: 300 }}
      />
      {error && (
        <p
          style={{
            color: Colors.error.main,
            position: "absolute",
            fontSize: "12px",
            marginLeft: "10px",
          }}
        >
          * {errorMessage}
        </p>
      )}
    </Stack>
  );
};
export default DatePicker;
