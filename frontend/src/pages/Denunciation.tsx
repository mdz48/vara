import Header from "@/components/molecules/header";
import FormDenunciationOrg from "@/components/organisms/FormDenunciationOrg";
function Denuntiation() {
    return (
        <>
    <Header></Header>
       <div className="min-h-screen bg-[#201d1d46]">
    <div className="max-w-screen-sm mx-auto">
    <FormDenunciationOrg></FormDenunciationOrg>
    </div>
</div>

        </>
    )
}

export default Denuntiation;