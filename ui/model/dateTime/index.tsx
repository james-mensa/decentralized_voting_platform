
import { DatePicker, Stack } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';
import { FaArrowsAltH } from "react-icons/fa";
import "./datacss.css"
import { Typography} from "@/ui/model/labels-model";
interface props{
  setStartDate?:(value:Date | null)=>void,
  setEndDate?:(value:Date | null)=>void

}
const BasicDatePicker:React.FC<props>=({setStartDate,setEndDate})=> {


  return (
  <Stack direction='row' justifyContent='space-between' style={{ width:"86.5%"}}>
    <Stack  direction="column" style={{alignItems:"flex-start"}}>
      <Typography>Start Date time</Typography>
      <DatePicker  onChange={setStartDate} className="datacss"  format="yyyy-MM-dd HH:mm:ss"  block appearance="subtle" style={{ width: 300}} />
   
    </Stack>
    <Stack direction="column" style={{alignItems:"flex-start"}}>
      <Typography>End Date time</Typography>
      <DatePicker onChange={setEndDate} format="yyyy-MM-dd HH:mm:ss" block appearance="subtle" style={{ width: 300 }} />
    </Stack>
   
  </Stack>
  );
}
export default BasicDatePicker