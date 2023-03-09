function Tempo(props){
    console.log('> Passando pelo Frontend;')
        const dynamicDate = new Date();
        const dynamicDateString = dynamicDate.toGMTString();

        return (
            <div>
                <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.StaticDateString} (estático)</div>
            </div>
        )
}
export function getStaticProps(){
    console.log('> Passando pelo getStaticProps();')
    const StaticDate = new Date();
        const StaticDateString = StaticDate.toGMTString();
    return{
        props: {
            StaticDateString
        },
        revalidade: 1
    }
}
export default Tempo;