export function Header({ children }: { children: JSX.Element }) {
    return (
        <header aria-label="title">
            <h1>Challenge Week 11 Xmas</h1>
            {children}
        </header>
    );
}
