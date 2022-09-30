export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div>Ini Layout Auth</div>
            <div>{children}</div>
        </div>
    );
}
