import { Box, Button, useToast } from "@chakra-ui/react";
import { createElection } from "@/core/hooks/newEvent";
import "./add-event-btn.css";
import { createNewEventProps } from "@/core/utils/types";
interface props {
  params: createNewEventProps;
}
export function NewElectionButton({ params }: props) {
  const toast = useToast();
  return (
    <Box>
      <Button
        className="btn ig-btn top-[85%] icon"
        colorScheme="gray"
        onClick={() => {
          const hookHandler = new Promise(async (resolve, reject) => {
           console.log({params})

          //  const result = await createElection(params);
            // if (result) {
            //   resolve(200);
            // }
            // else{
            //   reject(400);
            // }
            
            
          });
          toast.promise(hookHandler, {
            success: { title: "Event successfully created", description: "process to add voters" },
            error: {
              title: "Election event creation failed",
              description: "Something wrong",
            },
            loading: { title: "Creating Election Event",description: "Please wait" },
          });

        }}
      >
        <p>Deploy</p>
      </Button>
    </Box>
  );
}
