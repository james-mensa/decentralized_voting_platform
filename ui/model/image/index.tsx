import Image from 'next/image'
type imageType="Avatar" | "Box"

interface props{
    uri?:string;
    style?:React.CSSProperties;
    type?:imageType

}



export const ImageView:React.FC<props>=({

    uri,style,type
})=>{
    return(
        <div>
            {
                uri ?
            <Image
            src={uri}
            width={100}
            height={100}
            alt="Picture of the party" />
                :
                <div className="flex w-[90px] h-[80px] rounded bg-red-200">

                </div>
            }

        </div>
    )
}