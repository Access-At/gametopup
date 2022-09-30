export default function Home({
    phpVersion,
    laravelVersion,
    canLogin,
    canRegister,
}) {
    return (
        <>
            <div>Ini rumah</div>
            <div>{laravelVersion}</div>
            <div>{phpVersion}</div>
        </>
    );
}
