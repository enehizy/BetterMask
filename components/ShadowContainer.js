export default function ShadowContainer({children}){
    return(
        <div className={`w-full xl:max-w-[430px]  shadow-md rounded-md  p-4`}>
            {children}
        </div>
    )

}