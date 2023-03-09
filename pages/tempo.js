function Tempo(){
        const dynamicDate = new Date();
        const dynamicDateString = dynamicDate.toGMTString();

        return (
            <div>
                {dynamicDateString} (dinânico)
            </div>
        )
}
export default Tempo;