import { Button, useToast } from '@chakra-ui/react'
import { createElection } from "@/core/hooks/newEvent";
interface props{
  params:any; 
}
export function PromiseBasedToast({params}:props) {
    const toast = useToast()
    return (
                 <Button
                 
      colorScheme='gray'
        onClick={() => {
          const hookHandler = new Promise(async(resolve, reject) => {  
            const result=await createElection(params);
if(result){
  resolve(200);
}
          })
          toast.promise(hookHandler, {
            success: { title: 'Promise resolved', description: 'Looks great' },
            error: { title: 'Promise rejected', description: 'Something wrong' },
            loading: { title: 'Promise pending', description: 'Please wait' },
          })
        }}
      >
        <p>Show Toast</p>
      </Button>

    

 
    )
  }